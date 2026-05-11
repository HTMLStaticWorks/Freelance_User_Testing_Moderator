document.addEventListener("DOMContentLoaded", () => {
  Site.initInteractions();

  const sidebar = document.querySelector("[data-dashboard-sidebar]");
  const mobileOpen = document.querySelector("[data-dashboard-mobile-open]");
  const mobileClose = document.querySelector("[data-dashboard-mobile-close]");
  const collapse = document.querySelector("[data-sidebar-collapse]");

  mobileOpen?.addEventListener("click", () => sidebar?.classList.add("open"));
  mobileClose?.addEventListener("click", () => sidebar?.classList.remove("open"));
  collapse?.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-collapsed");
    Site.refreshIcons();
  });

  document.querySelectorAll(".dashboard-nav").forEach((link) => {
    link.addEventListener("click", () => sidebar?.classList.remove("open"));
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => {
        item.classList.toggle("btn-secondary", item === button);
        item.classList.toggle("btn-ghost", item !== button);
      });
      document.querySelectorAll("[data-session-card]").forEach((card) => {
        card.classList.toggle("hidden", filter !== "all" && card.dataset.status !== filter);
      });
    });
  });
});
