const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

// =========================================================================
// CODEMIK AI — Multi-Tenant AI Automation SaaS Middleware Engine
// 100% Tenant Isolated Architecture: User A vs User B Data Never Mixes
// =========================================================================
const db = {
  tenants: [
    {
      tenantId: 'tenant_01',
      storeName: 'Toko Sembako Berkah Jaya',
      ownerName: 'Budi Santoso (User A)',
      phone: '081234567890',
      email: 'berkah@kodemik.com',
      qrisInfo: 'QRIS-BCA-00129',
      activeWorkflow: 'Otomasi WA Sales & Auto Invoice',
      waConnected: true,
      waStatus: 'AUTOPILOT_ACTIVE'
    },
    {
      tenantId: 'tenant_02',
      storeName: 'Hijab & Fashion Store Cantik',
      ownerName: 'Siti Rahma (User B)',
      phone: '085799887766',
      email: 'hijab@kodemik.com',
      qrisInfo: 'QRIS-MANDIRI-9988',
      activeWorkflow: 'AI Customer Support 24/7',
      waConnected: true,
      waStatus: 'AUTOPILOT_ACTIVE'
    }
  ],

  // Stock items scoped strictly by tenantId
  inventory: [
    // User A (Toko Sembako)
    { id: 'inv-1', tenantId: 'tenant_01', sku: 'BRS-5KG', name: 'Beras Rojolele 5kg', price: 68000, stock: 15, unit: 'karung' },
    { id: 'inv-2', tenantId: 'tenant_01', sku: 'MYK-2L', name: 'Minyak Bimoli 2L', price: 35000, stock: 4, unit: 'pouch' },
    { id: 'inv-3', tenantId: 'tenant_01', sku: 'GUL-1KG', name: 'Gula Pasir Gulaku 1kg', price: 17500, stock: 0, unit: 'kg' },

    // User B (Toko Fashion Hijab)
    { id: 'inv-4', tenantId: 'tenant_02', sku: 'HJB-PASH', name: 'Hijab Pashmina Silk Premium', price: 85000, stock: 30, unit: 'pcs' },
    { id: 'inv-5', tenantId: 'tenant_02', sku: 'GMS-ELEG', name: 'Gamis Brokat Modern XL', price: 245000, stock: 12, unit: 'pcs' },
    { id: 'inv-6', tenantId: 'tenant_02', sku: 'SCR-SILK', name: 'Scarf Segiempat Voal', price: 45000, stock: 0, unit: 'pcs' }
  ],

  // Invoices scoped strictly by tenantId
  invoices: [
    {
      id: 'INV-A-101',
      tenantId: 'tenant_01',
      customerName: 'Pembeli WA Sembako (0812990011)',
      items: [{ name: 'Beras Rojolele 5kg', qty: 5, price: 68000, subtotal: 340000 }],
      totalAmount: 340000,
      paymentStatus: 'LUNAS',
      qrisUrl: 'https://kodemik.com/pay/INV-A-101',
      pdfUrl: 'https://kodemik.com/pdf/INV-A-101.pdf',
      createdAt: '2026-08-12 18:10:00'
    },
    {
      id: 'INV-B-202',
      tenantId: 'tenant_02',
      customerName: 'Pelanggan Hijab (0856443322)',
      items: [{ name: 'Hijab Pashmina Silk Premium', qty: 2, price: 85000, subtotal: 170000 }],
      totalAmount: 170000,
      paymentStatus: 'BELUM DIBAYAR',
      qrisUrl: 'https://kodemik.com/pay/INV-B-202',
      pdfUrl: 'https://kodemik.com/pdf/INV-B-202.pdf',
      createdAt: '2026-08-12 18:30:00'
    }
  ],

  ownerNotifications: []
};

const DB_FILE = path.join(__dirname, 'database.json');

function saveDatabase() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify({ tenants: db.tenants, inventory: db.inventory, invoices: db.invoices, ownerNotifications: db.ownerNotifications }, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error saving database file:', e);
  }
}

function loadDatabase() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, 'utf-8');
      const loaded = JSON.parse(raw);
      if (loaded.tenants) db.tenants = loaded.tenants;
      if (loaded.inventory) db.inventory = loaded.inventory;
      if (loaded.invoices) db.invoices = loaded.invoices;
      if (loaded.ownerNotifications) db.ownerNotifications = loaded.ownerNotifications;
    }
  } catch (e) {
    console.error('Error loading database file:', e);
  }
}

loadDatabase();

// Multi-Tenant Scoped AI Agent Execution Logic
function runMultiTenantAIAgent(rawMessage, activeTenantId) {
  const tid = activeTenantId || 'tenant_01';
  const tenantObj = db.tenants.find(t => t.tenantId === tid) || db.tenants[0];
  const text = (rawMessage || '').toLowerCase();
  
  // Filter inventory ONLY for active tenant
  const tenantStock = db.inventory.filter(item => item.tenantId === tid);

  const matchedItems = [];
  const outOfStockAlerts = [];
  const lowStockWarnings = [];
  let totalAmount = 0;

  tenantStock.forEach(item => {
    const itemNameLower = item.name.toLowerCase();
    const keywords = itemNameLower.split(' ');
    const isMatch = keywords.some(kw => kw.length > 2 && text.includes(kw));

    if (isMatch) {
      const numbers = text.match(/\b\d+\b/g) || [1];
      let requestedQty = parseInt(numbers[0]) || 1;
      if (requestedQty > 50) requestedQty = 2;

      if (item.stock <= 0) {
        outOfStockAlerts.push({ name: item.name, currentStock: 0 });
      } else if (item.stock < requestedQty) {
        lowStockWarnings.push({ name: item.name, requested: requestedQty, available: item.stock });
        const fulfillQty = item.stock;
        item.stock = 0;
        const subtotal = item.price * fulfillQty;
        matchedItems.push({ sku: item.sku, name: item.name, qty: fulfillQty, unit: item.unit, price: item.price, subtotal: subtotal });
        totalAmount += subtotal;
      } else {
        item.stock -= requestedQty;
        const subtotal = item.price * requestedQty;
        matchedItems.push({ sku: item.sku, name: item.name, qty: requestedQty, unit: item.unit, price: item.price, subtotal: subtotal });
        totalAmount += subtotal;

        if (item.stock < 10) {
          db.ownerNotifications.unshift({
            id: 'NOTIF-' + Date.now(),
            tenantId: tid,
            type: 'WARNING_LOW_STOCK',
            message: `⚠️ PERINGATAN [${tenantObj.storeName}]: Sisa stok "${item.name}" tinggal ${item.stock} ${item.unit}! Segera Restock!`,
            createdAt: new Date().toLocaleString('id-ID')
          });
        }
      }
    }
  });

  saveDatabase();

  let createdInvoice = null;
  if (matchedItems.length > 0) {
    const invId = 'INV-' + tid.toUpperCase() + '-' + Math.floor(100 + Math.random() * 900);
    createdInvoice = {
      id: invId,
      tenantId: tid,
      customerName: 'Pembeli WA (' + tenantObj.phone + ')',
      items: matchedItems,
      totalAmount: totalAmount,
      paymentStatus: 'BELUM DIBAYAR',
      qrisUrl: `https://kodemik.com/pay/${invId}`,
      pdfUrl: `https://kodemik.com/pdf/${invId}.pdf`,
      createdAt: new Date().toLocaleString('id-ID')
    };
    db.invoices.unshift(createdInvoice);
    saveDatabase();
  }

  let waResponse = '';
  if (outOfStockAlerts.length > 0 || lowStockWarnings.length > 0) {
    let issueDetails = '';
    outOfStockAlerts.forEach(o => { issueDetails += `❌ *${o.name}*: MAAF, STOK HABIS (0 Pcs)\n`; });
    lowStockWarnings.forEach(l => { issueDetails += `⚠️ *${l.name}*: STOK MENIPIS (Sisa ${l.available} Pcs)\n`; });

    waResponse = `🤖 *AI AGENT OTOMATIS — ${tenantObj.storeName.toUpperCase()}*\n\nMaaf Kak, terdapat stok barang yang sedang habis/menipis:\n\n${issueDetails}\n`;
    if (matchedItems.length > 0) {
      waResponse += `\n📦 *Barang Lain Yang Tersedia & Diterbitkan Nota:*\n`;
      matchedItems.forEach((it, idx) => {
        waResponse += `${idx + 1}. ${it.name} (${it.qty} ${it.unit}) = Rp ${it.subtotal.toLocaleString('id-ID')}\n`;
      });
      waResponse += `\n*TOTAL BAYAR: Rp ${totalAmount.toLocaleString('id-ID')}*\n💳 Link QRIS: ${createdInvoice.qrisUrl}\n📄 PDF Invoice: ${createdInvoice.pdfUrl}`;
    }
  } else if (matchedItems.length > 0) {
    let itemsStr = '';
    matchedItems.forEach((it, idx) => {
      itemsStr += `${idx + 1}. ${it.name} (${it.qty} ${it.unit}) = Rp ${it.subtotal.toLocaleString('id-ID')}\n`;
    });

    waResponse = `🤖 *AI AGENT OTOMATIS — ${tenantObj.storeName.toUpperCase()}*\nNo Nota: #${createdInvoice.id}\nStatus: BELUM DIBAYAR\n\n*Detail Pesanan Anda:*\n${itemsStr}-----------------------------------------\n*TOTAL BAYAR: Rp ${totalAmount.toLocaleString('id-ID')}*\n\n💳 *Link Bayar QRIS Instan:*\n${createdInvoice.qrisUrl}\n\n📄 *Download File PDF Invoice:* \n${createdInvoice.pdfUrl}\n\nTerima kasih telah berbelanja di ${tenantObj.storeName}! 🙏`;
  } else {
    waResponse = `🤖 *AI AGENT OTOMATIS — ${tenantObj.storeName.toUpperCase()}*\n\nMaaf Kak, produk tersebut belum ditemukan di daftar stok ${tenantObj.storeName}. Silakan sebutkan nama produk lain.`;
  }

  return {
    success: true,
    activeTenant: tenantObj,
    agentOutput: {
      actionExecuted: 'TENANT_ISOLATED_AI_AGENT_REPLY',
      matchedItemsCount: matchedItems.length,
      generatedInvoice: createdInvoice,
      ownerNotifications: db.ownerNotifications.filter(n => n.tenantId === tid).slice(0, 5),
      autoWaReplyText: waResponse
    }
  };
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = parsedUrl.pathname;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // 1. Fetch Tenants List API
  if (pathname === '/api/tenants' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ success: true, data: db.tenants }));
  }

  // 2. Fetch Tenant Isolated Inventory
  if (pathname === '/api/inventory' && req.method === 'GET') {
    const tid = parsedUrl.searchParams.get('tenantId') || 'tenant_01';
    const tenantObj = db.tenants.find(t => t.tenantId === tid) || db.tenants[0];
    const isolatedStock = db.inventory.filter(item => item.tenantId === tid);
    const isolatedInvoices = db.invoices.filter(inv => inv.tenantId === tid);
    const isolatedNotifs = db.ownerNotifications.filter(n => n.tenantId === tid);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      success: true,
      activeTenant: tenantObj,
      inventory: isolatedStock,
      invoices: isolatedInvoices,
      notifications: isolatedNotifs
    }));
  }

  // 3. Add Item to Tenant Isolated Inventory API
  if (pathname === '/api/inventory/add' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const tid = data.tenantId || 'tenant_01';
        const newItem = {
          id: 'inv-' + Date.now(),
          tenantId: tid,
          sku: data.sku || ('SKU-' + Math.floor(100 + Math.random() * 900)),
          name: data.name,
          price: parseInt(data.price) || 0,
          stock: parseInt(data.stock) || 0,
          unit: data.unit || 'pcs'
        };
        db.inventory.unshift(newItem);
        saveDatabase();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: `Stok "${newItem.name}" Berhasil Diisi Ke Kamar Toko Anda!`, item: newItem }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Gagal menambah stok gudang' }));
      }
    });
    return;
  }

  // 4. Run Multi-Tenant AI Agent API
  if (pathname === '/api/ai/auto-agent' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const result = runMultiTenantAIAgent(data.messageText, data.tenantId);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Format data AI Agent tidak valid' }));
      }
    });
    return;
  }

  // Static File Serving
  let filePath = path.join(PUBLIC_DIR, pathname === '/' ? 'index.html' : pathname);

  if (!path.extname(filePath)) {
    filePath = filePath + '.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        fs.readFile(path.join(PUBLIC_DIR, 'index.html'), (err, indexContent) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>', 'utf-8');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(indexContent, 'utf-8');
          }
        });
      } else {
        res.writeHead(500);
        res.end('Check site admin for error: ' + error.code + ' ..\n');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Codemik AI Multi-Tenant SaaS Server running on port ${PORT}`);
});
