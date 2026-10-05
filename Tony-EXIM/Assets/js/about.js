/* ============================================
   ABOUT PAGE – Specific logic
   ============================================ */

// ===== LANGUAGE TRANSLATIONS =====
const translations = {
  en: {
    'hero.name': 'TONY EXIM',
    'hero.title': 'Export-Import Specialist',
    'hero.contact': 'Get in Touch',
    'hero.blog': 'Read Blog',
    'section.about': 'About Me',
    'section.services': "What I'm Doing",
    'section.experience': 'Experience',
    'section.education': 'Education',
    'section.skills': 'Skills',
    'section.activities': 'Activities & Certifications',
    'section.contact': 'Contact',
    'footer.rights': '© 2026 Tony EXIM · Built with ❤️',
  },
  vi: {
    'hero.name': 'TONY EXIM',
    'hero.title': 'Chuyên viên Xuất nhập khẩu',
    'hero.contact': 'Liên hệ',
    'hero.blog': 'Đọc Blog',
    'section.about': 'Giới thiệu',
    'section.services': 'Dịch vụ',
    'section.experience': 'Kinh nghiệm',
    'section.education': 'Học vấn',
    'section.skills': 'Kỹ năng',
    'section.activities': 'Hoạt động & Chứng chỉ',
    'section.contact': 'Liên hệ',
    'footer.rights': '© 2026 Tony EXIM · Xây dựng với ❤️',
  },
  zh: {
    'hero.name': 'TONY EXIM',
    'hero.title': '进出口专员',
    'hero.contact': '联系我',
    'hero.blog': '阅读博客',
    'section.about': '关于我',
    'section.services': '服务项目',
    'section.experience': '工作经验',
    'section.education': '教育背景',
    'section.skills': '技能',
    'section.activities': '活动与证书',
    'section.contact': '联系方式',
    'footer.rights': '© 2026 TONY EXIM · 用心构建 ❤️',
  }
};

// ===== APPLY TRANSLATION =====
function applyTranslation(lang) {
  const t = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      el.textContent = t[key];
    }
  });
}

// Listen for language change
document.addEventListener('languageChange', (e) => {
  applyTranslation(e.detail.lang);
});

// Apply saved language on load
applyTranslation(localStorage.getItem('lang') || 'en');

// ===== SKILL BAR ANIMATION =====
// Animate skill bars when they enter viewport
const skillBars = document.querySelectorAll('.skill-bar__fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.style.width;
      entry.target.style.width = '0';
      setTimeout(() => {
        entry.target.style.width = width;
      }, 100);
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => skillObserver.observe(bar));