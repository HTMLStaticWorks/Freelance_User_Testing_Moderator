// Handle Theme Toggle
function initTheme() {
  const isDark = localStorage.getItem('theme') === 'dark' || 
                 (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Handle RTL Toggle
function initRTL() {
  const isRTL = localStorage.getItem('rtl') === 'true';
  if(isRTL) {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
}

function toggleRTL() {
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  if(isRTL) {
    document.documentElement.setAttribute('dir', 'ltr');
    localStorage.setItem('rtl', 'false');
  } else {
    document.documentElement.setAttribute('dir', 'rtl');
    localStorage.setItem('rtl', 'true');
  }
}

// Header Scroll Effect & Reveals
function handleScroll() {
  const header = document.getElementById('main-header');
  if (header) {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'py-0');
      header.classList.remove('py-2');
    } else {
      header.classList.remove('shadow-md');
      header.classList.add('py-2');
    }
  }

  // Scroll Reveals
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('active');
    }
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Inject Header and Footer
  if (typeof injectComponents === 'function') {
    injectComponents();
  }

  initTheme();
  initRTL();

  // Event Listeners for Toggles (Desktop & Mobile)
  const themeBtns = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');
  themeBtns.forEach(btn => btn?.addEventListener('click', toggleTheme));

  const rtlBtns = document.querySelectorAll('#rtl-toggle, #mobile-rtl-toggle');
  rtlBtns.forEach(btn => btn?.addEventListener('click', toggleRTL));

  // Mobile Menu
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
    const icon = mobileMenu?.classList.contains('hidden') ? 'menu' : 'x';
    menuBtn.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  });

  // FAQ Accordion
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const item = toggle.closest('.faq-item');
      const content = item.querySelector('.faq-content');
      const icon = toggle.querySelector('.faq-icon');
      const isActive = item.classList.contains('active');

      // Close all other items (optional, but cleaner)
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-content').style.height = '0px';
          otherItem.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
          otherItem.classList.remove('border-primary/50', 'shadow-lg');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        content.style.height = '0px';
        icon.style.transform = 'rotate(0deg)';
        item.classList.remove('border-primary/50', 'shadow-lg');
      } else {
        item.classList.add('active');
        content.style.height = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
        item.classList.add('border-primary/50', 'shadow-lg');
      }
    });
  });

  // Initial Scroll check
  handleScroll();
  window.addEventListener('scroll', handleScroll);

  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
