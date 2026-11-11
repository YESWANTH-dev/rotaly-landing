// Rotaly landing page interactions
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  // 1. Mobile menu
  const toggle = $("#navToggle");
  const menu = $("#navMenu");
  function setMenu(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  // 2. Highlight the nav link of the section in view
  const links = $$('.nav__menu a[href^="#"]:not(.btn)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => observer.observe(s));

  // 3. Monthly / yearly pricing switch
  const sw = $("#billingSwitch");
  sw.addEventListener("click", () => {
    const yearly = sw.getAttribute("aria-checked") !== "true";
    sw.setAttribute("aria-checked", String(yearly));
    $("#lblMonthly").classList.toggle("is-on", !yearly);
    $("#lblYearly").classList.toggle("is-on", yearly);
    $$("[data-monthly]").forEach((el) => {
      el.textContent = yearly ? el.dataset.yearly : el.dataset.monthly;
    });
  });

  // 4. Plan / CTA buttons preselect the plan in the form
  const planSelect = $("#plan");
  $$("[data-plan]").forEach((btn) => {
    btn.addEventListener("click", () => {
      planSelect.value = btn.dataset.plan;
      setTimeout(() => $("#name").focus({ preventScroll: true }), 600);
    });
  });

  // 5. Demo form validation
  const form = $("#demoForm");
  const success = $("#formSuccess");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function showError(input, msg) {
    const field = input.closest(".field");
    field.classList.toggle("invalid", Boolean(msg));
    $(".error", field).textContent = msg;
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  }
  function validateName() {
    const v = $("#name").value.trim();
    return showError($("#name"), v.length < 2 ? "Enter your full name (at least 2 characters)." : "");
  }
  function validateEmail() {
    const v = $("#email").value.trim();
    if (!v) return showError($("#email"), "Enter your work email.");
    return showError($("#email"), emailPattern.test(v) ? "" : "Enter a valid email, like name@company.com.");
  }
  function validateMessage() {
    return showError($("#message"), $("#message").value.length > 300 ? "Keep your message under 300 characters." : "");
  }

  $("#name").addEventListener("blur", validateName);
  $("#email").addEventListener("blur", validateEmail);
  $("#message").addEventListener("input", validateMessage);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    success.hidden = true;
    const ok = [validateName(), validateEmail(), validateMessage()].every(Boolean);
    if (!ok) { $(".invalid input, .invalid textarea", form).focus(); return; }
    const first = $("#name").value.trim().split(" ")[0];
    success.textContent = `Thanks, ${first}! We’ve got your request for the ${planSelect.value} plan and will email you within one working day.`;
    success.hidden = false;
    form.reset();
  });

  // 6. Footer year
  $("#year").textContent = new Date().getFullYear();
})();
