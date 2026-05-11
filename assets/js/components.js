const navItems = [
  {
    label: "Home",
    href: "index.html",
    children: [
      { label: "Home 1", href: "index.html" },
      { label: "Home 2", href: "home2.html" }
    ]
  },
  { label: "Services", href: "services.html" },
  { label: "Methodology", href: "methodology.html" },
  { label: "Pricing", href: "pricing.html" },
  { label: "About", href: "about.html" },
  { label: "Contact", href: "contact.html" },
  { label: "Dashboard", href: "dashboard.html" }
];

const getCurrentFile = () => {
  const file = window.location.pathname.split("/").pop();
  return file || "index.html";
};

const icon = (name, classes = "h-5 w-5") => `<i data-lucide="${name}" class="${classes}"></i>`;

function applyThemePreference() {
  const stored = localStorage.getItem("fum-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.toggle("dark", stored ? stored === "dark" : prefersDark);
}

function applyDirectionPreference() {
  const stored = localStorage.getItem("fum-dir") || "ltr";
  document.documentElement.setAttribute("dir", stored);
}

function toggleTheme() {
  const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("fum-theme", next);
  applyThemePreference();
  refreshIcons();
}

function toggleDirection() {
  const next = document.documentElement.getAttribute("dir") === "rtl" ? "ltr" : "rtl";
  localStorage.setItem("fum-dir", next);
  applyDirectionPreference();
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderHeader() {
  const target = document.getElementById("site-header");
  if (!target) return;

  const current = getCurrentFile();
  const desktopLinks = navItems
    .map((item) => {
      const isActive = item.href === current || (current === "" && item.href === "index.html") || (item.children && item.children.some(c => c.href === current));

      if (item.children) {
        return `
          <div class="group relative py-3">
            <button class="nav-link ${isActive ? "active" : ""} flex items-center gap-1 text-sm font-semibold whitespace-nowrap">
              ${item.label} ${icon("chevron-down", "h-3.5 w-3.5 opacity-60")}
            </button>
            <div class="absolute top-full left-0 mt-1 hidden group-hover:block w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-slate-900">
              ${item.children.map(child => `
                <a href="${child.href}" class="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-research-primary dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white">
                  ${child.label}
                </a>
              `).join("")}
            </div>
          </div>
        `;
      }
      return `<a class="nav-link ${isActive ? "active" : ""} whitespace-nowrap text-sm font-semibold" href="${item.href}">${item.label}</a>`;
    })
    .join("");

  const mobileLinks = navItems
    .map((item) => {
      if (item.children) {
        return `
          <div class="py-2">
            <div class="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">${item.label}</div>
            ${item.children.map(child => `
              <a class="nav-link block rounded-lg px-4 py-3 text-base font-semibold" href="${child.href}">${child.label}</a>
            `).join("")}
          </div>
        `;
      }
      return `<a class="nav-link block rounded-lg px-4 py-3 text-base font-semibold" href="${item.href}">${item.label}</a>`;
    })
    .join("");

  target.innerHTML = `
    <header class="fixed inset-x-0 top-0 z-50">
      <div class="container-pad mt-4">
        <div class="glass-panel flex items-center justify-between gap-3 px-4 py-2.5 lg:px-5">
          <a href="index.html" class="flex flex-shrink-0 items-center gap-2.5" aria-label="Freelance User Testing Moderator home">
            <span class="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-neon">
              ${icon("scan-search", "h-5 w-5")}
            </span>
            <span class="min-w-0">
              <span class="block font-display text-sm font-extrabold leading-tight text-slate-950 dark:text-white">FUT Moderator</span>
              <span class="block text-[10px] font-medium leading-tight text-slate-500 dark:text-slate-400">Research operations</span>
            </span>
          </a>

          <nav class="hidden flex-1 items-center justify-center gap-2.5 xl:flex" aria-label="Main navigation">
            ${desktopLinks}
          </nav>

          <div class="hidden flex-shrink-0 items-center gap-1.5 lg:flex">
            <a class="btn-secondary inline-flex items-center justify-center px-3.5 text-xs font-bold whitespace-nowrap" href="case-studies.html">View Sample Insights</a>
            <a class="btn-primary inline-flex items-center justify-center px-3.5 text-xs font-bold whitespace-nowrap" href="contact.html">Book a Research Session</a>
            <button class="icon-button grid h-10 w-10 flex-shrink-0 place-items-center text-slate-700 dark:text-slate-100" data-theme-toggle aria-label="Toggle dark mode">
              ${icon("moon", "h-4.5 w-4.5 dark:hidden")}
              ${icon("sun", "hidden h-4.5 w-4.5 dark:block")}
            </button>
            <button class="icon-button grid h-10 w-10 flex-shrink-0 place-items-center text-[10px] font-black text-slate-700 dark:text-slate-100" data-dir-toggle aria-label="Toggle RTL">RTL</button>
          </div>

          <button class="icon-button grid h-10 w-10 flex-shrink-0 place-items-center text-slate-700 dark:text-slate-100 xl:hidden" data-menu-open aria-label="Open menu">
            ${icon("menu")}
          </button>
        </div>
      </div>

      <div class="pointer-events-none fixed inset-0 z-50 xl:hidden" data-mobile-menu aria-hidden="true">
        <div class="absolute inset-0 bg-slate-950/50 opacity-0 transition-opacity" data-menu-close></div>
        <aside class="absolute inset-y-0 right-0 flex w-[min(420px,92vw)] translate-x-full flex-col bg-white p-5 shadow-2xl transition-transform dark:bg-slate-950" data-menu-panel>
          <div class="mb-6 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-3">
              <span class="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-research-primary to-research-secondary text-white">
                ${icon("scan-search", "h-5 w-5")}
              </span>
              <span class="font-display text-sm font-extrabold text-slate-950 dark:text-white">FUT Moderator</span>
            </a>
            <button class="icon-button grid h-11 w-11 place-items-center" data-menu-close aria-label="Close menu">${icon("x")}</button>
          </div>
          <nav class="space-y-1" aria-label="Mobile navigation">${mobileLinks}</nav>
          <div class="mt-auto grid gap-3 pt-8">
            <a class="btn-secondary inline-flex items-center justify-center px-4 text-sm font-bold" href="case-studies.html">View Sample Insights</a>
            <a class="btn-primary inline-flex items-center justify-center px-4 text-sm font-bold" href="contact.html">Book a Research Session</a>
            <div class="grid grid-cols-2 gap-3">
              <button class="btn-ghost inline-flex items-center justify-center gap-2 px-4 text-sm font-bold" data-theme-toggle>${icon("moon", "h-4 w-4")} Theme</button>
              <button class="btn-ghost inline-flex items-center justify-center px-4 text-sm font-black" data-dir-toggle>RTL</button>
            </div>
          </div>
        </aside>
      </div>
    </header>
  `;
  refreshIcons();
}

function renderFooter() {
  const target = document.getElementById("site-footer");
  if (!target) return;

  target.innerHTML = `
    <footer class="border-t border-slate-200 bg-white/76 py-12 dark:border-white/10 dark:bg-slate-950/80">
      <div class="container-pad">
        <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
          <div>
            <a href="index.html" class="flex items-center gap-3">
              <span class="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-research-primary to-research-secondary text-white">${icon("scan-search")}</span>
              <span>
                <span class="block font-display text-base font-extrabold text-slate-950 dark:text-white">FUT Moderator</span>
                <span class="block text-sm text-slate-500 dark:text-slate-400">Moderated research for product teams</span>
              </span>
            </a>
            <p class="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300">Enterprise-grade usability testing, moderated interviews, participant recruitment, and research reporting for teams that need confident product decisions.</p>
          </div>
          <div>
            <h3 class="font-display text-sm font-bold text-slate-950 dark:text-white">Platform</h3>
            <div class="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
              <a href="services.html">Services</a>
              <a href="methodology.html">Methodology</a>
              <a href="dashboard.html">Secure dashboard</a>
            </div>
          </div>
          <div>
            <h3 class="font-display text-sm font-bold text-slate-950 dark:text-white">Research Proof</h3>
            <div class="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
              <a href="pricing.html">Pricing</a>
              <a href="about.html">Moderator background</a>
              <a href="contact.html">Schedule consultation</a>
            </div>
          </div>
          <div>
            <h3 class="font-display text-sm font-bold text-slate-950 dark:text-white">Client Access</h3>
            <div class="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
              <a href="login.html">Login</a>
              <a href="signup.html">Signup</a>
              <a href="contact.html">Research brief</a>
            </div>
          </div>
        </div>
        <div class="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© <span data-year></span> Freelance User Testing Moderator. All rights reserved.</p>
          <div class="flex gap-4">
            <a href="contact.html">Privacy-ready intake</a>
            <a href="methodology.html">Research ethics</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function bindShellControls() {
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", toggleTheme);
  });

  document.querySelectorAll("[data-dir-toggle]").forEach((button) => {
    button.addEventListener("click", toggleDirection);
  });

  const menu = document.querySelector("[data-mobile-menu]");
  const panel = document.querySelector("[data-menu-panel]");
  const open = document.querySelector("[data-menu-open]");
  const closeButtons = document.querySelectorAll("[data-menu-close]");

  const setMenu = (isOpen) => {
    if (!menu || !panel) return;
    menu.classList.toggle("pointer-events-none", !isOpen);
    menu.setAttribute("aria-hidden", String(!isOpen));
    menu.querySelector("[data-menu-close]")?.classList.toggle("opacity-0", !isOpen);
    panel.classList.toggle("translate-x-full", !isOpen);
    document.body.classList.toggle("overflow-hidden", isOpen);
  };

  open?.addEventListener("click", () => setMenu(true));
  closeButtons.forEach((button) => button.addEventListener("click", () => setMenu(false)));
}

function bindRevealAnimations() {
  const items = document.querySelectorAll(".reveal, .stagger");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  items.forEach((item) => observer.observe(item));
}

function bindCounters() {
  document.querySelectorAll("[data-count]").forEach((node) => {
    const target = Number(node.dataset.count || 0);
    const suffix = node.dataset.suffix || "";
    const decimals = String(node.dataset.count || "").includes(".") ? 1 : 0;
    let frame = 0;
    const frames = 72;
    const step = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / frames, 3);
      node.textContent = `${(target * progress).toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}${suffix}`;
      if (frame < frames) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function bindFaqs() {
  document.querySelectorAll("[data-faq-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest("[data-faq-item]");
      const panel = item?.querySelector("[data-faq-panel]");
      const isOpen = item?.classList.toggle("is-open");
      if (panel) {
        panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : "0px";
      }
    });
  });
}

function bindVideoModal() {
  const modal = document.getElementById("video-modal");
  if (!modal) return;

  const close = () => {
    modal.classList.add("hidden");
    modal.innerHTML = "";
  };

  document.querySelectorAll("[data-video-open]").forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.innerHTML = `
        <div class="modal-backdrop fixed inset-0 z-[80] grid place-items-center p-4">
          <div class="dashboard-panel w-full max-w-4xl overflow-hidden bg-white dark:bg-slate-950">
            <div class="flex items-center justify-between border-b border-slate-200 p-4 dark:border-white/10">
              <div>
                <p class="text-sm font-bold text-research-primary dark:text-cyan-300">Session preview</p>
                <h3 class="font-display text-lg font-bold text-slate-950 dark:text-white">${button.dataset.videoTitle || "Usability session highlight"}</h3>
              </div>
              <button class="icon-button grid h-10 w-10 place-items-center" data-modal-close aria-label="Close preview">${icon("x")}</button>
            </div>
            <div class="grid aspect-video place-items-center bg-slate-950 text-white">
              <div class="text-center">
                <div class="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white/10">${icon("play", "h-7 w-7")}</div>
                <p class="mt-4 text-sm text-slate-300">Video playback placeholder for secured research recordings.</p>
              </div>
            </div>
            <div class="grid gap-3 p-4 md:grid-cols-3">
              <div class="rounded-lg border border-slate-200 p-3 text-sm dark:border-white/10">00:42 Navigation friction</div>
              <div class="rounded-lg border border-slate-200 p-3 text-sm dark:border-white/10">03:18 Prototype expectation mismatch</div>
              <div class="rounded-lg border border-slate-200 p-3 text-sm dark:border-white/10">05:54 Clearer success moment</div>
            </div>
          </div>
        </div>
      `;
      refreshIcons();
      modal.querySelector("[data-modal-close]")?.addEventListener("click", close);
      modal.querySelector(".modal-backdrop")?.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal-backdrop")) close();
      });
    });
  });
}

function bindFileUpload() {
  document.querySelectorAll("[data-upload-zone]").forEach((zone) => {
    const input = zone.querySelector("input[type='file']");
    const label = zone.querySelector("[data-upload-label]");
    zone.addEventListener("click", () => input?.click());
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("border-research-secondary");
    });
    zone.addEventListener("dragleave", () => zone.classList.remove("border-research-secondary"));
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("border-research-secondary");
      if (event.dataTransfer?.files?.length && label) label.textContent = event.dataTransfer.files[0].name;
    });
    input?.addEventListener("change", () => {
      if (input.files?.length && label) label.textContent = input.files[0].name;
    });
  });
}

function bindPasswordToggles() {
  document.querySelectorAll("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.passwordToggle);
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
      button.innerHTML = input.type === "password" ? icon("eye") : icon("eye-off");
      refreshIcons();
    });
  });
}

function initInteractions() {
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
  bindShellControls();
  bindRevealAnimations();
  bindCounters();
  bindFaqs();
  bindVideoModal();
  bindFileUpload();
  bindPasswordToggles();
  refreshIcons();
}

window.Site = {
  applyThemePreference,
  applyDirectionPreference,
  renderHeader,
  renderFooter,
  initInteractions,
  icon,
  refreshIcons
};

document.addEventListener("DOMContentLoaded", () => {
  applyThemePreference();
  applyDirectionPreference();
  renderHeader();
  renderFooter();
});
