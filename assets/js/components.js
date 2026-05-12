const Header = () => `
<header class="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-[#0b1120]/80 border-b border-slate-200 dark:border-slate-800" id="main-header">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <!-- Logo -->
      <a href="index.html" class="flex items-center gap-2">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-sora font-bold text-xl shadow-lg">
          UX
        </div>
        <span class="font-sora font-bold text-xl text-slate-900 dark:text-white tracking-tight">UserTest<span class="text-primary">Pro</span></span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex space-x-1 lg:space-x-4 items-center">
        <a href="index.html" class="nav-link">Home</a>
        <a href="home2.html" class="nav-link">Home 2</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="services.html" class="nav-link">Services</a>
        <a href="pricing.html" class="nav-link">Pricing</a>
        <a href="blog.html" class="nav-link">Blog</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>

      <!-- Right Actions -->
      <div class="hidden lg:flex items-center gap-4">
        <div class="flex items-center gap-2 border-r border-slate-200 dark:border-slate-700 pr-4">
          <button id="theme-toggle" class="p-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-secondary transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            <i data-lucide="moon" class="w-5 h-5 dark:hidden"></i>
            <i data-lucide="sun" class="w-5 h-5 hidden dark:block"></i>
          </button>
          <button id="rtl-toggle" class="p-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-secondary transition-colors font-medium text-sm rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            RTL
          </button>
        </div>
        <a href="dashboard.html" class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors">Dashboard</a>
        <a href="contact.html" class="bg-primary hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 text-sm">
          Book Session
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button class="lg:hidden p-2 text-slate-600 dark:text-slate-300" id="mobile-menu-btn">
        <i data-lucide="menu" class="w-6 h-6"></i>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div class="lg:hidden hidden bg-white dark:bg-[#0b1120] border-b border-slate-200 dark:border-slate-800 absolute w-full" id="mobile-menu">
    <div class="px-4 pt-2 pb-6 space-y-2 shadow-xl">
      <a href="index.html" class="mobile-nav-link">Home</a>
      <a href="home2.html" class="mobile-nav-link">Home 2</a>
      <a href="about.html" class="mobile-nav-link">About</a>
      <a href="services.html" class="mobile-nav-link">Services</a>
      <a href="pricing.html" class="mobile-nav-link">Pricing</a>
      <a href="blog.html" class="mobile-nav-link">Blog</a>
      <a href="contact.html" class="mobile-nav-link">Contact</a>
      <a href="dashboard.html" class="mobile-nav-link text-primary dark:text-secondary">Dashboard</a>
      <div class="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
        <button id="mobile-theme-toggle" class="flex items-center gap-2 text-slate-600 dark:text-slate-300 px-4">
          <i data-lucide="moon" class="w-5 h-5 dark:hidden"></i>
          <i data-lucide="sun" class="w-5 h-5 hidden dark:block"></i>
          <span class="dark:hidden font-medium">Dark Mode</span>
          <span class="hidden dark:block font-medium">Light Mode</span>
        </button>
        <button id="mobile-rtl-toggle" class="text-slate-600 dark:text-slate-300 font-medium px-4">
          Toggle RTL
        </button>
      </div>
      <div class="pt-4 px-2">
        <a href="contact.html" class="block text-center bg-primary text-white px-5 py-3 rounded-xl font-medium w-full shadow-lg shadow-primary/30">Book Research Session</a>
      </div>
    </div>
  </div>
</header>
`;

const Footer = () => `
<footer class="bg-slate-50 dark:bg-[#080d1a] border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div class="space-y-6">
        <a href="index.html" class="flex items-center gap-2">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-sora font-bold text-xl">
            UX
          </div>
          <span class="font-sora font-bold text-xl text-slate-900 dark:text-white">UserTest<span class="text-primary">Pro</span></span>
        </a>
        <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          Premium moderated user testing platform for enterprise product teams and UX research agencies. Transform feedback into strategy.
        </p>
        <div class="flex gap-4">
          <a href="#" class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-sm group" aria-label="Twitter">
            <i data-lucide="twitter" class="w-5 h-5 transition-transform group-hover:scale-110"></i>
          </a>
          <a href="#" class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-sm group" aria-label="LinkedIn">
            <i data-lucide="linkedin" class="w-5 h-5 transition-transform group-hover:scale-110"></i>
          </a>
          <a href="#" class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-sm group" aria-label="Instagram">
            <i data-lucide="instagram" class="w-5 h-5 transition-transform group-hover:scale-110"></i>
          </a>
        </div>
      </div>
      
      <div>
        <h4 class="font-sora font-semibold text-slate-900 dark:text-white mb-6">Platform</h4>
        <ul class="space-y-4 text-sm text-slate-500 dark:text-slate-400">
          <li><a href="services.html" class="hover:text-primary dark:hover:text-secondary transition-colors">UX Research Services</a></li>
          <li><a href="pricing.html" class="hover:text-primary dark:hover:text-secondary transition-colors">Pricing & Plans</a></li>
          <li><a href="dashboard.html" class="hover:text-primary dark:hover:text-secondary transition-colors">Client Dashboard</a></li>
          <li><a href="#" class="hover:text-primary dark:hover:text-secondary transition-colors">Participant Recruitment</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-sora font-semibold text-slate-900 dark:text-white mb-6">Resources</h4>
        <ul class="space-y-4 text-sm text-slate-500 dark:text-slate-400">
          <li><a href="blog.html" class="hover:text-primary dark:hover:text-secondary transition-colors">UX Blog & Insights</a></li>
          <li><a href="#" class="hover:text-primary dark:hover:text-secondary transition-colors">Case Studies</a></li>
          <li><a href="#" class="hover:text-primary dark:hover:text-secondary transition-colors">Research Methodologies</a></li>
          <li><a href="contact.html" class="hover:text-primary dark:hover:text-secondary transition-colors">Help Center</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-sora font-semibold text-slate-900 dark:text-white mb-6">Subscribe to Insights</h4>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">Get the latest UX trends and testing strategies weekly.</p>
        <form class="flex gap-2">
          <input type="email" placeholder="Work email" class="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary dark:focus:border-secondary text-sm">
          <button type="button" class="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary dark:hover:bg-secondary transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    
    <div class="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-slate-400 dark:text-slate-500 text-sm">© 2026 UserTestPro. All rights reserved.</p>
      <div class="flex gap-6 text-sm text-slate-400 dark:text-slate-500">
        <a href="#" class="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" class="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

function injectComponents() {
  const headerContainer = document.getElementById('header-placeholder');
  const footerContainer = document.getElementById('footer-placeholder');
  
  if (headerContainer) headerContainer.innerHTML = Header();
  if (footerContainer) footerContainer.innerHTML = Footer();
  
  // Highlight active link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const isActive = href === currentPath || (currentPath === '' && href === 'index.html');
    
    if (isActive) {
      link.classList.add('text-primary', 'dark:text-secondary', 'font-semibold');
      link.classList.remove('text-slate-600', 'dark:text-slate-300');
    } else {
      link.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:text-primary', 'dark:hover:text-white');
    }
    
    // Base classes
    if(link.classList.contains('nav-link')) {
        link.classList.add('text-sm', 'font-medium', 'px-3', 'py-2', 'rounded-lg', 'transition-colors');
    } else if(link.classList.contains('mobile-nav-link')) {
        link.classList.add('block', 'px-4', 'py-3', 'text-base', 'font-medium', 'rounded-xl', 'hover:bg-slate-50', 'dark:hover:bg-slate-800/50');
    }
  });

  // Re-initialize Lucide icons for injected HTML
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}
