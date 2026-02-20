(() => {
  const refs = {
    openBtn: document.querySelector("[data-menu-open]"),
    closeBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
  };

  refs.openBtn.addEventListener("click", openMenu);
  refs.closeBtn.addEventListener("click", closeMenu);

  refs.modal.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }

    closeMenu();
  });

  function openMenu() {
    refs.modal.classList.add("is-open");
    refs.modal.hidden = false;
    refs.openBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    refs.modal.classList.remove("is-open");
    refs.modal.hidden = true;
    refs.openBtn.setAttribute("aria-expanded", "false");
  }
})();
