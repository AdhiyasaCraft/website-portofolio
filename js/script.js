// ====== Data yang mudah di-edit ======
    const DATA = {
      skills: [
        'HTML5', 'CSS3', 'JavaScript', 'Video Editor'
      ],

      tools: ['Figma', 'Vercel', 'Notion', 'Canva', 'GitHub', 'Replit', 'Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe After Effects'],
      projects: [
        {
          title: 'Aplikasi Kasir Web',
          desc: 'Aplikasi kasir sederhana dengan cetak struk.',
          tech: ['HTML', 'CSS', 'JavaScript'],
          cover: 'images/Cashier Web.png',
          links: { demo: '#', repo: '#' }
        },
        {
          title: 'Aplikasi Parkir',
          desc: 'Aolikasi Kasir Sederhana Untuk Menghitung Tarif Parkir',
          tech: ['HTML', 'CSS', 'JavaScript'],
          cover: 'images/Parkir.png',
          links: { demo: '#', repo: '#' }
        },
        {
          title: 'Belum Tersedia',
          desc: 'Belum Tersedia',
          tech: ['Belum Tersedia'],
          cover: 'images/belum.png',
          links: { demo: '#', repo: '#' }
        },
        {
          title: 'Belum Tersedia',
          desc: 'Belum Tersedia',
          tech: ['Belum Tersedia'],
          cover: 'images/belum.png',
          links: { demo: '#', repo: '#' }
        }
      ],
      experience: [
        { role: 'Belum ada', company: 'Belum ada', period: 'Belum ada', points: [
          'Belum Memiliki Pengalaman, Sedang Menempuh Jenjang S1.'
        ]},
        { role: 'Belum ada', company: 'Belum ada', period: 'Belum ada', points: [
          'Belum Memiliki Pengalaman, Sedang Menempuh Jenjang S1.'
        ]}
      ]
    }

    // ====== Util: Theme toggle ======
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'light') document.documentElement.classList.add('light');
    themeToggle?.addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      themeToggle.setAttribute('aria-pressed', String(isLight));
    });

    // ====== Inject skills & tools ======
    function injectChips(id, items){
      const el = document.getElementById(id);
      items.forEach(t=>{
        const span = document.createElement('span');
        span.className = 'chip';
        span.textContent = t;
        el.appendChild(span);
      })
    }
    injectChips('skills', DATA.skills);
    injectChips('tools', DATA.tools);

    // ====== Projects render ======
    const grid = document.getElementById('projectGrid');
    DATA.projects.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card reveal';
      card.innerHTML = `
        <div class="cover"><img src="${p.cover}"</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="meta">
          <span>${p.tech.join(' • ')}</span>
        </div>
      `;
      grid.appendChild(card);
    });

    // ====== Experience render ======
    const timeline = document.getElementById('timeline');
    DATA.experience.forEach(x => {
      const item = document.createElement('div');
      item.className = 't-item reveal';
      item.innerHTML = `
        <div class="row" style="justify-content:space-between">
          <strong>${x.role} · ${x.company}</strong>
          <span class="muted">${x.period}</span>
        </div>
        <ul style="margin-top:6px; color:#cbd5e1; padding-left:18px">
          ${x.points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      `;
      timeline.appendChild(item);
    });

    // ====== Reveal on scroll ======
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: .18 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // ====== Year ======
    document.getElementById('year').textContent = new Date().getFullYear();

emailjs.init("jua9vGO0nzi9_c5jU");

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
event.preventDefault(); // Cegah reload page

const name = form.elements["from_name"].value.trim();
const email = form.elements["from_email"].value.trim();
const message = form.elements["message"].value.trim();

    formMessage.textContent = "";
    formMessage.style.color = "red";

    if (!name || !email || !message) {
    formMessage.textContent = "❌ Semua field wajib diisi!";
    return;
    }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "❌ Format email tidak valid!";
    return;
    }
    emailjs.sendForm("service_xnx3jfr", "template_81s54xc", form)
    .then(() => {
    alert("✅ Pesan berhasil dikirim!");
    form.reset(); // reset form
    })
    .catch((error) => {
    console.error("Error:", error);
    alert("❌ Gagal mengirim pesan, cek console log.");
  });
});

// ====== Generate minimal CV (client-side) ======
// document.getElementById('downloadCV').addEventListener('click', (e) => {
//   e.preventDefault();
// const blob = new Blob([
//   `Curriculum Vitae\n\nNama: Nama Anda\nPeran: Web Developer\nEmail: email@domain.com\nGitHub: https://github.com/username\nLinkedIn: https://linkedin.com/in/username\n\nKeahlian:\n- ${DATA.skills.join('\n- ')}\n\nPengalaman:\n${DATA.experience.map(x=> `- ${x.role} @ ${x.company} (${x.period})`).join('\n')}\n`], { type:'text/plain' });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url; a.download = 'CV-Nama-Anda.txt'; a.click();
//   URL.revokeObjectURL(url);
// });

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');

}
