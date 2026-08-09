// KodeKu.id Master Client JavaScript — Professional E-Learning Architecture

let allCoursesCache = [];

const courseIdMap = {
  'dasar-komputer': '1',
  '1': '1',
  'internet-web': '2',
  '2': '2',
  'linux-cli': '3',
  '3': '3',
  'git-github': '4',
  '4': '4',
  'html5-semantics': '5',
  '5': '5',
  'css3-tailwind': '6',
  '6': '6',
  'ui-ux-design': '7',
  '7': '7',
  'figma-developer': '8',
  '8': '8'
};

document.addEventListener('DOMContentLoaded', () => {
  const courseGrid = document.getElementById('courseGrid');
  if (courseGrid) {
    loadCoursesCatalog();
  }
  updateStudentNavbarUI();

  const params = new URLSearchParams(window.location.search);
  if (params.get('action') === 'login') {
    openAuthModal('login');
  } else if (params.get('checkoutCourse')) {
    const cid = params.get('checkoutCourse');
    openCheckoutModal(cid, 'Kelas ID ' + cid);
  }
});

function getStudentUser() {
  try {
    return JSON.parse(localStorage.getItem('kodeku_student_user')) || null;
  } catch (e) {
    return null;
  }
}

function toggleProfileDropdown() {
  const dd = document.getElementById('profileDropdown');
  if (dd) dd.style.display = dd.style.display === 'block' ? 'none' : 'block';
}

function updateStudentNavbarUI() {
  const user = getStudentUser();
  const guestEls = document.querySelectorAll('.guest-only');
  const userEls = document.querySelectorAll('.user-only');
  const greetingEl = document.getElementById('navStudentGreeting');
  const avatarLetterEl = document.getElementById('navAvatarLetter');
  const adminLinkEl = document.getElementById('adminDropdownLink');

  if (user && user.email) {
    guestEls.forEach(el => el.style.display = 'none');
    userEls.forEach(el => el.style.display = 'inline-block');
    if (greetingEl) greetingEl.textContent = user.name || user.email.split('@')[0];
    if (avatarLetterEl) avatarLetterEl.textContent = (user.name || user.email || 'S')[0].toUpperCase();

    // Show Admin Studio option strictly if user is Admin
    const isAdmin = user.role === 'admin' || user.email === 'hanifabdullohhanifabdulloh@gmail.com';
    if (adminLinkEl) adminLinkEl.style.display = isAdmin ? 'block' : 'none';
  } else {
    guestEls.forEach(el => el.style.display = 'inline-block');
    userEls.forEach(el => el.style.display = 'none');
    if (adminLinkEl) adminLinkEl.style.display = 'none';
  }
}

function logoutStudent() {
  localStorage.removeItem('kodeku_student_user');
  sessionStorage.removeItem('kodeku_admin_token');
  updateStudentNavbarUI();
  if (allCoursesCache.length) renderCatalog(allCoursesCache);
  alert('🚪 Anda telah keluar dari akun.');
  window.location.href = 'index.html';
}

function getPurchasedCourses() {
  const user = getStudentUser();
  if (!user || !user.email) return [];

  try {
    const raw = JSON.parse(localStorage.getItem('kodeku_purchased_' + user.email)) || ['1', '5'];
    const normalized = raw.map(id => courseIdMap[id] || id);
    return [...new Set(normalized)];
  } catch (e) {
    return ['1', '5'];
  }
}

function savePurchasedCourse(courseId) {
  const user = getStudentUser();
  const key = user && user.email ? ('kodeku_purchased_' + user.email) : 'kodeku_purchased_guest';
  const normId = courseIdMap[courseId] || courseId;

  let list = [];
  try { list = JSON.parse(localStorage.getItem(key)) || []; } catch(e) {}
  if (!list.includes(normId)) {
    list.push(normId);
    localStorage.setItem(key, JSON.stringify(list));
  }
}

function setLastActiveCourse(courseId) {
  const normId = courseIdMap[courseId] || courseId;
  localStorage.setItem('kodeku_last_active_course', normId);
}

function getLastActiveCourse() {
  const last = localStorage.getItem('kodeku_last_active_course') || '1';
  return courseIdMap[last] || last;
}

function openClassroomDirect() {
  const user = getStudentUser();
  if (!user || !user.email) {
    alert('Silakan Login atau Daftar Akun terlebih dahulu untuk membuka Ruang Belajar!');
    openAuthModal('login');
    return;
  }
  const lastId = getLastActiveCourse();
  window.location.href = `classroom.html?courseId=${encodeURIComponent(lastId)}`;
}

function loadCoursesCatalog() {
  fetch('/api/courses')
    .then(res => res.json())
    .then(result => {
      if (result.success) {
        allCoursesCache = result.data;
        renderCatalog(result.data);
      }
    })
    .catch(err => console.log('Error loading catalog:', err));
}

function renderCatalog(courses) {
  const container = document.getElementById('courseGrid');
  if (!container) return;

  const user = getStudentUser();
  const purchasedList = getPurchasedCourses();
  const availableContentIds = ['1', '2', '3', '4', '5', '6', '7', '8', 'dasar-komputer', 'internet-web', 'linux-cli', 'git-github', 'html5-semantics', 'css3-tailwind', 'ui-ux-design', 'figma-developer'];

  container.innerHTML = '';
  courses.forEach(c => {
    const normId = courseIdMap[c.id] || c.id;
    const isPurchased = user && (purchasedList.includes(normId) || purchasedList.includes(c.id) || purchasedList.includes(c.slug));
    const isReady = availableContentIds.includes(c.id) || availableContentIds.includes(c.slug) || availableContentIds.includes(normId);

    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <div class="course-banner">
        <span>${c.badge === 'TERLARIS' ? '🤖' : (c.badge === 'POPULER' ? '🌐' : '📄')}</span>
        <span class="course-badge">${isReady ? '✅ MATERI LENGKAP' : '⏳ PENYUSUNAN MATERI'}</span>
      </div>
      <div class="course-body">
        <div class="course-cat">${c.category} • ${c.level}</div>
        <h3 class="course-title">${c.title}</h3>
        <p class="course-desc">${c.desc}</p>
        <div style="font-size:0.82rem; color:var(--text-muted); margin-bottom:12px;">⭐ ${c.rating} (${c.students.toLocaleString('id-ID')} Siswa) • ⏱ ${c.duration}</div>
      </div>
      <div style="padding:16px 20px; background:rgba(0,0,0,0.2); border-top:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div>
          <div style="font-size:0.72rem; color:var(--text-muted);">Harga Kelas:</div>
          <div class="course-price">Rp ${c.price.toLocaleString('id-ID')}</div>
          ${isPurchased ? `<div style="font-size:0.72rem; color:#10B981; font-weight:700; margin-top:2px;">✓ KEPEMILIKAN AKTIF</div>` : ''}
        </div>
        ${
          !user ?
            `<button class="btn btn-primary" onclick="handleCourseActionGuest('${normId}', '${c.title}')">Beli Sekarang →</button>` :
          (isPurchased ? 
            `<button class="btn btn-outline" style="border-color:#10B981; color:#10B981; font-weight:700;" onclick="enterClassroom('${normId}')">⚡ Lanjutkan Belajar →</button>` : 
            `<button class="btn btn-primary" onclick="openCheckoutModal('${normId}', '${c.title}')">Beli Sekarang →</button>`)
        }
      </div>
    `;
    container.appendChild(card);
  });
}

function handleCourseActionGuest(courseId, title) {
  sessionStorage.setItem('intendedCourseId', courseId);
  sessionStorage.setItem('intendedCourseTitle', title);
  alert('Silakan Login atau Daftar Akun terlebih dahulu untuk melanjutkan pembelian kelas.');
  openAuthModal('login');
}

function enterClassroom(courseId) {
  const user = getStudentUser();
  const normId = courseIdMap[courseId] || courseId;

  if (!user || !user.email) {
    sessionStorage.setItem('intendedCourseId', normId);
    alert('Silakan Login atau Daftar Akun terlebih dahulu untuk membuka Ruang Kelas!');
    openAuthModal('login');
    return;
  }

  const purchased = getPurchasedCourses();
  const isAdmin = user.role === 'admin' || user.email === 'hanifabdullohhanifabdulloh@gmail.com';

  if (!isAdmin && !purchased.includes(normId)) {
    alert('Anda belum membeli kelas ini. Silakan lakukan pembayaran terlebih dahulu!');
    openCheckoutModal(normId, 'Kelas ID ' + normId);
    return;
  }

  setLastActiveCourse(normId);
  window.location.href = `classroom.html?courseId=${encodeURIComponent(normId)}`;
}

function filterCourseList() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const filtered = allCoursesCache.filter(c => 
    c.title.toLowerCase().includes(q) || 
    c.category.toLowerCase().includes(q) || 
    c.desc.toLowerCase().includes(q)
  );
  renderCatalog(filtered);
}

function filterCategory(level, btn) {
  document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  if (level === 'all') {
    renderCatalog(allCoursesCache);
  } else {
    const filtered = allCoursesCache.filter(c => 
      c.level.toLowerCase().includes(level.toLowerCase()) || 
      c.category.toLowerCase().includes(level.toLowerCase())
    );
    renderCatalog(filtered);
  }
}

// Toggle Password Visibility Eye Button
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
  } else {
    input.type = 'password';
    btn.textContent = '👁️';
  }
}

// Modal Handlers
function openAuthModal(mode) {
  const isReg = mode === 'register';
  document.getElementById('authTitle').textContent = isReg ? 'Daftar Akun Siswa Baru' : 'Masuk ke KodeKu.id';
  document.getElementById('groupName').style.display = isReg ? 'block' : 'none';
  document.getElementById('groupWhatsapp').style.display = isReg ? 'block' : 'none';
  document.getElementById('authSubmitBtn').textContent = isReg ? 'Daftar Akun Sekarang →' : 'Masuk Sekarang →';
  document.getElementById('authModal').classList.add('active');
}

function closeAuthModal() {
  document.getElementById('authModal').classList.remove('active');
}

const authForm = document.getElementById('authForm');
if (authForm) {
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('authName').value || 'Siswa KodeKu';
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value.trim();
    const whatsapp = document.getElementById('authWhatsapp').value || '08123456789';

    fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username: email, password })
    })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        closeAuthModal();

        if (res.role === 'admin') {
          sessionStorage.setItem('kodeku_admin_token', 'valid');
          const adminProfile = { name: 'Hanif Abdulloh (Admin)', email: 'hanifabdullohhanifabdulloh@gmail.com', role: 'admin' };
          localStorage.setItem('kodeku_student_user', JSON.stringify(adminProfile));
          alert('🔐 Akses Admin Terverifikasi!\nSelamat datang Hanif Abdulloh (Admin). Mengarahkan ke Dashboard Admin...');
          window.location.href = 'admin.html';
          return;
        }

        const studentProfile = { name: res.user.name || name, email: res.user.email || email, whatsapp, role: 'student' };
        localStorage.setItem('kodeku_student_user', JSON.stringify(studentProfile));
        updateStudentNavbarUI();
        if (allCoursesCache.length) renderCatalog(allCoursesCache);

        const intendedId = sessionStorage.getItem('intendedCourseId');
        const intendedTitle = sessionStorage.getItem('intendedCourseTitle');
        if (intendedId) {
          sessionStorage.removeItem('intendedCourseId');
          sessionStorage.removeItem('intendedCourseTitle');
          openCheckoutModal(intendedId, intendedTitle || intendedId);
        } else {
          window.location.href = 'dashboard.html';
        }
      } else {
        alert('❌ Login Gagal: ' + (res.message || 'Email atau Password salah'));
      }
    })
    .catch(err => {
      alert('❌ Terjadi kesalahan jaringan saat login: ' + err.message);
    });
  });
}

function openCheckoutModal(id, title) {
  const normId = courseIdMap[id] || id;
  const purchasedList = getPurchasedCourses();
  if (purchasedList.includes(normId)) {
    enterClassroom(normId);
    return;
  }

  const user = getStudentUser();
  if (user) {
    document.getElementById('coName').value = user.name || '';
    document.getElementById('coEmail').value = user.email || '';
    document.getElementById('coWhatsapp').value = user.whatsapp || '';
  }

  document.getElementById('checkoutCourseId').value = normId;
  document.getElementById('checkoutCourseTitle').textContent = `Beli Kelas: ${title}`;
  document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal').classList.remove('active');
}

const checkoutForm = document.getElementById('checkoutForm');
if (checkoutForm) {
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('coName').value;
    const whatsapp = document.getElementById('coWhatsapp').value;
    const email = document.getElementById('coEmail').value;
    const courseId = document.getElementById('checkoutCourseId').value;
    const normId = courseIdMap[courseId] || courseId;
    const paymentMethod = document.getElementById('coPaymentMethod').value;

    const currentStudent = getStudentUser() || { name, email, whatsapp, role: 'student' };
    localStorage.setItem('kodeku_student_user', JSON.stringify(currentStudent));

    fetch('/api/payments/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, whatsapp, email, courseId: normId, paymentMethod })
    })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        savePurchasedCourse(normId);
        setLastActiveCourse(normId);
        updateStudentNavbarUI();
        alert(`✅ PEMBAYARAN BERHASIL!\n\nStatus kepemilikan kursus aktif. Mengarahkan langsung ke Ruang Kelas...`);
        window.location.href = `classroom.html?courseId=${encodeURIComponent(normId)}`;
      }
    });
  });
}

function openHistoryModal() {
  const user = getStudentUser();
  if (!user) {
    alert('Harap masuk/daftar akun terlebih dahulu untuk melihat riwayat kelas Anda!');
    openAuthModal('login');
    return;
  }
  window.location.href = 'dashboard.html?tab=history';
}

function closeHistoryModal() {
  const modal = document.getElementById('historyModal');
  if (modal) modal.classList.remove('active');
}

function submitContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value;
  const contactInfo = document.getElementById('contactContact').value;
  const subject = document.getElementById('contactSubject').value;
  const message = document.getElementById('contactMessage').value;
  const resultMsg = document.getElementById('contactMsgResult');

  fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      email: contactInfo.includes('@') ? contactInfo : 'via-whatsapp@kodeku.id',
      whatsapp: contactInfo.includes('@') ? '-' : contactInfo,
      subject: subject,
      message: message
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      resultMsg.style.color = '#10B981';
      resultMsg.textContent = '✅ ' + data.message;
      document.getElementById('contactForm').reset();
    } else {
      resultMsg.style.color = '#F43F5E';
      resultMsg.textContent = '❌ Gagal mengirim pesan';
    }
  });
}

function updatePurchasedStateUI() {
  updateStudentNavbarUI();
}
