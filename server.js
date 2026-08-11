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
// CODEMIK AI — B2B AI Supply Chain & WA Order Automation Database
// Ultra-Lightweight, Super Fast, 100% Persistent Database
// =========================================================================
const db = {
  merchants: [
    {
      id: 'm-01',
      name: 'Toko Sembako Berkah Jaya',
      owner: 'Budi Santoso',
      phone: '081234567890',
      email: 'berkahjaya@gmail.com',
      city: 'Surabaya'
    }
  ],

  inventory: [
    { id: 'inv-1', sku: 'BRS-5KG', name: 'Beras Rojolele 5kg', price: 68000, stock: 150, unit: 'karung' },
    { id: 'inv-2', sku: 'MYK-2L', name: 'Minyak Bimoli 2L', price: 35000, stock: 85, unit: 'pouch' },
    { id: 'inv-3', sku: 'GUL-1KG', name: 'Gula Pasir Gulaku 1kg', price: 17500, stock: 200, unit: 'kg' },
    { id: 'inv-4', sku: 'TLR-1KG', name: 'Telur Ayam Ras 1kg', price: 28000, stock: 90, unit: 'kg' },
    { id: 'inv-5', sku: 'IND-MIE', name: 'Indomie Goreng Spesi 1 Karton', price: 112000, stock: 45, unit: 'dus' }
  ],

  invoices: [
    {
      id: 'INV-8821',
      customerName: 'Toko Sumber Rejeki',
      address: 'Jl. Pemuda No. 45 Surabaya',
      whatsapp: '085711223344',
      items: [
        { name: 'Beras Rojolele 5kg', qty: 10, price: 68000, subtotal: 680000 },
        { name: 'Minyak Bimoli 2L', qty: 5, price: 35000, subtotal: 175000 }
      ],
      totalAmount: 855000,
      paymentStatus: 'LUNAS',
      qrisUrl: 'https://kodemik.com/pay/INV-8821',
      pdfUrl: 'https://kodemik.com/pdf/INV-8821.pdf',
      createdAt: '2026-08-11 09:15:00'
    }
  ]
};

const DB_FILE = path.join(__dirname, 'database.json');

function saveDatabase() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify({ merchants: db.merchants, inventory: db.inventory, invoices: db.invoices }, null, 2), 'utf-8');
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
    }
  } catch (e) {
    console.error('Error loading database file:', e);
  }
}

loadDatabase();

// AI Intelligence Order Parser Simulation Engine
function parseOrderWithAI(rawText) {
  const text = (rawText || '').toLowerCase();
  const extractedItems = [];
  let totalCalculated = 0;

  db.inventory.forEach(item => {
    const itemNameLower = item.name.toLowerCase();
    const keywords = itemNameLower.split(' ');
    
    // Check match keywords
    const matchCount = keywords.filter(kw => kw.length > 2 && text.includes(kw)).length;
    if (matchCount >= 1) {
      // Regex search for quantity numbers around item name
      const numbers = text.match(/\b\d+\b/g) || [1];
      let qty = 1;
      if (numbers.length > 0) {
        qty = parseInt(numbers[0]) || 1;
        if (qty > 100) qty = 5; // Sanity cap for demo
      }

      const subtotal = item.price * qty;
      extractedItems.push({
        sku: item.sku,
        name: item.name,
        qty: qty,
        unit: item.unit,
        price: item.price,
        subtotal: subtotal
      });
      totalCalculated += subtotal;
    }
  });

  // Fallback defaults if no keywords matched
  if (extractedItems.length === 0) {
    const fallbackItem = db.inventory[0];
    extractedItems.push({
      sku: fallbackItem.sku,
      name: fallbackItem.name,
      qty: 10,
      unit: fallbackItem.unit,
      price: fallbackItem.price,
      subtotal: fallbackItem.price * 10
    });
    totalCalculated = fallbackItem.price * 10;
  }

  // Extract Customer Name / Address from text if available
  let custName = 'Toko Pembeli WA';
  let custAddress = 'Jl. Raya Utama No. 12';
  if (text.includes('toko')) {
    custName = 'Toko Mitra Pembeli';
  }

  return {
    success: true,
    parsedJson: {
      status: 'EXTRACTED_SUCCESS',
      aiModel: 'Codemik-Vision-v4.2-Turbo',
      confidenceScore: 0.98,
      customer: {
        name: custName,
        address: custAddress,
        detectedSource: 'WhatsApp Message / Photo Receipt'
      },
      items: extractedItems,
      totalAmount: totalCalculated,
      paymentStatus: 'UNPAID',
      timestamp: new Date().toISOString()
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

  // ============================================
  // REST API ENDPOINTS (Codemik AI B2B SaaS)
  // ============================================

  // 1. AI Order Parsing API (Text / Vision Image Input)
  if (pathname === '/api/ai/parse-order' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const result = parseOrderWithAI(data.orderText || data.imageUrl);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Format input pesanan tidak valid' }));
      }
    });
    return;
  }

  // 2. Fetch Warehouse Inventory API
  if (pathname === '/api/inventory' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ success: true, data: db.inventory }));
  }

  // 3. Add / Update Inventory Item API
  if (pathname === '/api/inventory' && req.method === 'POST') {
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
        res.end(JSON.stringify({ success: true, message: 'Produk Berhasil Ditambahkan ke Stok Gudang!', item: newItem }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Gagal menambah stok' }));
      }
    });
    return;
  }

  // 4. Create Auto Invoice PDF & QRIS Link API
  if (pathname === '/api/invoice/create' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const invId = 'INV-' + Math.floor(1000 + Math.random() * 9000);
        const newInvoice = {
          id: invId,
          customerName: data.customerName || 'Toko Pembeli WA',
          address: data.address || 'Alamat Utama Pembeli',
          whatsapp: data.whatsapp || '081234567890',
          items: data.items || [],
          totalAmount: data.totalAmount || 0,
          paymentStatus: 'BELUM DIBAYAR',
          qrisUrl: `https://kodemik.com/pay/${invId}`,
          pdfUrl: `https://kodemik.com/pdf/${invId}.pdf`,
          createdAt: new Date().toLocaleString('id-ID')
        };

        // Deduct inventory stocks
        newInvoice.items.forEach(item => {
          const invItem = db.inventory.find(i => i.name === item.name || i.sku === item.sku);
          if (invItem) {
            invItem.stock = Math.max(0, invItem.stock - (item.qty || 1));
          }
        });

        db.invoices.unshift(newInvoice);
        saveDatabase();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Invoice PDF & Link QRIS Berhasil Diterbitkan!',
          invoice: newInvoice
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Gagal menerbitkan invoice' }));
      }
    });
    return;
  }

  // 5. Fetch Invoice List API
  if (pathname === '/api/invoices' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ success: true, data: db.invoices }));
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
        res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Codemik.com AI B2B Server running on port ${PORT}`);
});
