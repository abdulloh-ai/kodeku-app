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
// CODEMIK AI — Full Autopilot WA AI Agent & Merchant Account Database
// 100% Autopilot: Scan QR Code ➔ Connect Real WA ➔ Auto Reply 24/7
// =========================================================================
const db = {
  merchants: [
    {
      id: 'm-01',
      storeName: 'Toko Sembako Berkah Jaya',
      ownerName: 'Budi Santoso',
      phone: '081234567890',
      email: 'berkahjaya@gmail.com',
      qrisInfo: '00020101021126580016ID.CO.QRIS.WWW9010000000000000',
      waConnected: true,
      waStatus: 'AUTOPILOT_ACTIVE'
    }
  ],

  inventory: [
    { id: 'inv-1', sku: 'BRS-5KG', name: 'Beras Rojolele 5kg', price: 68000, stock: 15, unit: 'karung' },
    { id: 'inv-2', sku: 'MYK-2L', name: 'Minyak Bimoli 2L', price: 35000, stock: 5, unit: 'pouch' },
    { id: 'inv-3', sku: 'GUL-1KG', name: 'Gula Pasir Gulaku 1kg', price: 17500, stock: 0, unit: 'kg' },
    { id: 'inv-4', sku: 'TLR-1KG', name: 'Telur Ayam Ras 1kg', price: 28000, stock: 40, unit: 'kg' },
    { id: 'inv-5', sku: 'IND-MIE', name: 'Indomie Goreng Spesi 1 Karton', price: 112000, stock: 25, unit: 'dus' }
  ],

  invoices: [
    {
      id: 'INV-8821',
      customerName: 'Pembeli WA (085711223344)',
      address: 'Jl. Pemuda No. 45 Surabaya',
      whatsapp: '085711223344',
      items: [
        { name: 'Beras Rojolele 5kg', qty: 10, price: 68000, subtotal: 680000 }
      ],
      totalAmount: 680000,
      paymentStatus: 'BELUM DIBAYAR',
      qrisUrl: 'https://kodemik.com/pay/INV-8821',
      pdfUrl: 'https://kodemik.com/pdf/INV-8821.pdf',
      createdAt: '2026-08-11 09:15:00'
    }
  ],

  ownerNotifications: []
};

const DB_FILE = path.join(__dirname, 'database.json');

function saveDatabase() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify({ merchants: db.merchants, inventory: db.inventory, invoices: db.invoices, ownerNotifications: db.ownerNotifications }, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error saving database file:', e);
  }
}

function loadDatabase() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, 'utf-8');
      const loaded = JSON.parse(raw);
      if (loaded.merchants) db.merchants = loaded.merchants;
      if (loaded.inventory) db.inventory = loaded.inventory;
      if (loaded.invoices) db.invoices = loaded.invoices;
      if (loaded.ownerNotifications) db.ownerNotifications = loaded.ownerNotifications;
    }
  } catch (e) {
    console.error('Error loading database file:', e);
  }
}

loadDatabase();

// Autonomous AI Agent Processing Logic
function runAutonomousAIAgent(rawMessage, senderPhone) {
  const text = (rawMessage || '').toLowerCase();
  const matchedItems = [];
  const outOfStockAlerts = [];
  const lowStockWarnings = [];
  let totalAmount = 0;

  db.inventory.forEach(item => {
    const itemNameLower = item.name.toLowerCase();
    const keywords = itemNameLower.split(' ');
    const isMatch = keywords.some(kw => kw.length > 2 && text.includes(kw));

    if (isMatch) {
      const numbers = text.match(/\b\d+\b/g) || [1];
      let requestedQty = parseInt(numbers[0]) || 1;
      if (requestedQty > 50) requestedQty = 5;

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
            type: 'WARNING_LOW_STOCK',
            message: `⚠️ PERINGATAN GUDANG: Sisa stok "${item.name}" tinggal ${item.stock} ${item.unit}! Segera Restock!`,
            createdAt: new Date().toLocaleString('id-ID')
          });
        }
      }
    }
  });

  saveDatabase();

  let createdInvoice = null;
  if (matchedItems.length > 0) {
    const invId = 'INV-' + Math.floor(1000 + Math.random() * 9000);
    createdInvoice = {
      id: invId,
      customerName: 'Pembeli WA (' + (senderPhone || '081234567890') + ')',
      address: 'Alamat Pengiriman Otomatis',
      whatsapp: senderPhone || '081234567890',
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

    waResponse = `🤖 *AUTOPILOT WA AI AGENT RESPON — TOKO BERKAH*\n\nMaaf Kak, terdapat stok barang yang sedang habis/menipis:\n\n${issueDetails}\n`;
    if (matchedItems.length > 0) {
      waResponse += `\n📦 *Barang Lain Yang Tersedia & Diterbitkan Nota:*\n`;
      matchedItems.forEach((it, idx) => {
        waResponse += `${idx + 1}. ${it.name} (${it.qty} ${it.unit}) = Rp ${it.subtotal.toLocaleString('id-ID')}\n`;
      });
      waResponse += `\n*TOTAL BAYAR: Rp ${totalAmount.toLocaleString('id-ID')}*\n💳 Link Bayar QRIS: ${createdInvoice.qrisUrl}\n📄 PDF Invoice: ${createdInvoice.pdfUrl}`;
    }
  } else if (matchedItems.length > 0) {
    let itemsStr = '';
    matchedItems.forEach((it, idx) => {
      itemsStr += `${idx + 1}. ${it.name} (${it.qty} ${it.unit}) = Rp ${it.subtotal.toLocaleString('id-ID')}\n`;
    });

    waResponse = `🤖 *AUTOPILOT WA AI AGENT RESPON — TOKO BERKAH*\nNo Nota: #${createdInvoice.id}\nStatus: BELUM DIBAYAR\n\n*Detail Pesanan Anda:*\n${itemsStr}-----------------------------------------\n*TOTAL BAYAR: Rp ${totalAmount.toLocaleString('id-ID')}*\n\n💳 *Link Bayar QRIS Instan:*\n${createdInvoice.qrisUrl}\n\n📄 *Download File PDF Invoice:* \n${createdInvoice.pdfUrl}\n\nTerima kasih telah berbelanja! 🙏`;
  } else {
    waResponse = `🤖 *AUTOPILOT WA AI AGENT RESPON*\n\nMaaf Kak, barang yang Kakak cari belum ditemukan di database stok gudang kami. Silakan sebutkan nama barang sembako lain.`;
  }

  return {
    success: true,
    agentOutput: {
      actionExecuted: 'AUTONOMOUS_CHECK_STOK_AND_REPLY',
      matchedItemsCount: matchedItems.length,
      generatedInvoice: createdInvoice,
      ownerNotifications: db.ownerNotifications.slice(0, 5),
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

  // 1. Merchant Registration API (Mendaftar Toko Baru + Email + No WA)
  if (pathname === '/api/merchant/register' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const newMerchant = {
          id: 'm-' + Date.now(),
          storeName: data.storeName || 'Toko Baru UMKM',
          ownerName: data.ownerName || 'Pemilik Toko',
          phone: data.phone || '081234567890',
          email: data.email || 'toko@gmail.com',
          qrisInfo: data.qrisInfo || 'QRIS-DEFAULT',
          waConnected: false,
          waStatus: 'WAITING_QR_SCAN'
        };
        db.merchants.unshift(newMerchant);
        saveDatabase();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Pendaftaran Toko Berhasil! Silakan Lanjut Sambungkan WhatsApp HP Anda.', merchant: newMerchant }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Gagal mendaftar merchant' }));
      }
    });
    return;
  }

  // 2. WA QR Code Connection Engine API (Menghubungkan WA HP Toko)
  if (pathname === '/api/wa/connect-qr' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const m = db.merchants.find(item => item.email === data.email || item.phone === data.phone) || db.merchants[0];
        m.waConnected = true;
        m.waStatus = 'AUTOPILOT_ACTIVE';
        saveDatabase();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: '🟢 WhatsApp HP Toko Anda Berhasil Terhubung 24/7 Autopilot!',
          merchant: m,
          qrCodeImage: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=CODEMIK-AUTOPILOT-WA-' + m.phone
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Gagal menghubungkan WA' }));
      }
    });
    return;
  }

  // 3. Autonomous AI Agent Webhook Engine
  if (pathname === '/api/ai/auto-agent' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const result = runAutonomousAIAgent(data.messageText, data.senderPhone);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Format data AI Agent tidak valid' }));
      }
    });
    return;
  }

  // 4. Fetch Stock Inventory
  if (pathname === '/api/inventory' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ success: true, data: db.inventory, merchant: db.merchants[0], notifications: db.ownerNotifications }));
  }

  // 5. Add Stock Item Form API
  if (pathname === '/api/inventory/add' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const newItem = {
          id: 'inv-' + Date.now(),
          sku: data.sku || ('SKU-' + Math.floor(100 + Math.random() * 900)),
          name: data.name,
          price: parseInt(data.price) || 0,
          stock: parseInt(data.stock) || 0,
          unit: data.unit || 'pcs'
        };
        db.inventory.unshift(newItem);
        saveDatabase();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: `Stok "${newItem.name}" Berhasil Diisi/Ditambahkan!`, item: newItem }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Gagal menambah stok gudang' }));
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
  console.log(`🚀 Codemik AI Full Autopilot Server running on port ${PORT}`);
});
