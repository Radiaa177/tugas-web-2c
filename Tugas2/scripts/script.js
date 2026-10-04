document.addEventListener('DOMContentLoaded', () => {
 
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      
      navMenu.classList.toggle('active');

      const isExpanded = navMenu.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggleBtn) {
      themeToggleBtn.textContent = '☀️ Mode Terang';
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      
      document.body.classList.toggle('dark-mode');


      const isDark = document.body.classList.contains('dark-mode');

      
      if (isDark) {
        themeToggleBtn.textContent = '☀️ Mode Terang';
        localStorage.setItem('theme', 'dark');
      } else {
        themeToggleBtn.textContent = '🌙 Mode Gelap';
        localStorage.setItem('theme', 'light');
      }
    });
  }

  const greetBtn = document.getElementById('greet-btn');
  if (greetBtn) {
    greetBtn.addEventListener('click', () => {
      alert(
        'Halo! Terima kasih telah mengunjungi web AI Tech Pulse karya Muhammad Radia Wirayudha. Selamat belajar pemrograman web di Dicoding!'
      );
    });
  }
});