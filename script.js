const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const form = document.querySelector("[data-form]");
const formNote = document.querySelector("[data-form-note]");
const year = document.querySelector("[data-year]");
const phoneAlert = document.querySelector("[data-phone-alert]");

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "已记录演示提交。正式上线前可接入邮箱、微信或其他询盘方式。";
    formNote.classList.add("is-success");
    form.reset();
  });
}

if (phoneAlert) {
  phoneAlert.addEventListener("click", () => {
    alert("联系方式待客户确认后补充。");
  });
}
