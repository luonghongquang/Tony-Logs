/* ============================================
   MAIN – Global functionality
   ============================================ */

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle?.querySelector('.theme-toggle__icon');

function getTheme() {
  return localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// Init theme
setTheme(getTheme());

themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger?.addEventListener('click', () => {
  navMenu?.classList.toggle('header__nav--open');
});

// Close menu when clicking a link
navMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('header__nav--open');
  });
});

// ===== HEADER SCROLL =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header?.classList.add('header--scrolled');
  } else {
    header?.classList.remove('header--scrolled');
  }
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop?.classList.add('back-to-top--visible');
  } else {
    backToTop?.classList.remove('back-to-top--visible');
  }
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== LANGUAGE SWITCHER =====
const langButtons = document.querySelectorAll('.lang-switcher__btn');

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    langButtons.forEach(b => b.classList.remove('lang-switcher__btn--active'));
    btn.classList.add('lang-switcher__btn--active');
    const lang = btn.dataset.lang;
    localStorage.setItem('lang', lang);
    // TODO: Implement actual translation in about.js
    document.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
  });
});

// Restore saved language
const savedLang = localStorage.getItem('lang') || 'en';
langButtons.forEach(btn => {
  if (btn.dataset.lang === savedLang) {
    btn.classList.add('lang-switcher__btn--active');
  }
});

// ===== AOS INIT =====
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
  });
}