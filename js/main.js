/**
 * نبض للرعاية الطبية - Nabd Medical Care
 * المحرك البرمجي الأساسي (main.js)
 * يدعم الترجمة، الهيدر والفوتر الموحدين، شريط الطوارئ المضغوط، السلايدر، والطلب التفاعلي للمواعيد
 */

(function () {
  'use strict';

  // --- أيقونات SVG خطية مدمجة بأحجام قياسية ---
  const ICONS = {
    phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    emergency: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"></path></svg>`,
    clock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    mapPin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    whatsapp: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
    star: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    arrowRight: `<svg class="dir-flip" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    chevronDown: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`,
    calendar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    user: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    shield: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    zoom: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`,
    close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    up: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`,
    // التخصصات
    internal: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    heart: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    baby: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"></circle><path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path><path d="M9 7h.01M15 7h.01M12 11c-1 0-1.5-.5-1.5-.5"></path></svg>`,
    female: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"></circle><line x1="12" y1="15" x2="12" y2="22"></line><line x1="9" y1="18" x2="15" y2="18"></line></svg>`,
    skin: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`,
    bone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="18" cy="18" r="3"></circle><line x1="6" y1="9" x2="6" y2="15"></line><line x1="18" y1="9" x2="18" y2="15"></line><line x1="6" y1="12" x2="18" y2="12"></line></svg>`,
    tooth: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3C4 5 4 9 5 12c1 3 2 9 3 9 2 0 2-4 4-4s2 4 4 4c1 0 2-6 3-9 1-3 1-7-2-9-3-2-5 0-5 0s-2-2-5 0z"></path></svg>`,
    eye: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    // الاستشارات
    building: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="2"></line><line x1="8" y1="6" x2="8.01" y2="6"></line><line x1="16" y1="6" x2="16.01" y2="6"></line><line x1="8" y1="10" x2="8.01" y2="10"></line><line x1="16" y1="10" x2="16.01" y2="10"></line><line x1="8" y1="14" x2="8.01" y2="14"></line><line x1="16" y1="14" x2="16.01" y2="14"></line><line x1="8" y1="18" x2="8.01" y2="18"></line><line x1="16" y1="18" x2="16.01" y2="18"></line></svg>`,
    video: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`
  };

  function getLang() {
    return localStorage.getItem('nabd_lang') || 'ar';
  }

  function setLang(lang) {
    localStorage.setItem('nabd_lang', lang);
    applyLanguage(lang);
  }

  function t(path) {
    const lang = getLang();
    const keys = path.split('.');
    let current = I18N[lang] || I18N.ar;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return path;
      }
    }
    return current;
  }

  function formatNumber(num) {
    const lang = getLang();
    return new Intl.NumberFormat(lang === 'ar' ? 'ar-EG' : 'en-US').format(num);
  }

  function formatCurrency(amount) {
    const lang = getLang();
    const curr = lang === 'ar' ? 'ج.م' : 'EGP';
    return `${formatNumber(amount)} ${curr}`;
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val && typeof val === 'string') {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);
      if (val && typeof val === 'string') {
        el.setAttribute('placeholder', val);
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const val = t(key);
      if (val && typeof val === 'string') {
        el.setAttribute('title', val);
      }
    });

    renderHeader();
    renderFooter();
    reRenderActivePage();
  }

  // --- الهيدر وشريط الطوارئ المضغوط (36-40px) ---
  function renderHeader() {
    const headerEl = document.getElementById('site-header');
    if (!headerEl) return;

    const lang = getLang();
    const pathname = window.location.pathname;
    const pageName = pathname.substring(pathname.lastIndexOf('/') + 1) || 'index.html';

    const isCurrent = (file) => (pageName === file || (file === 'index.html' && (pageName === '' || pageName === '/'))) ? 'active' : '';

    const langBtnTextFull = lang === 'ar' ? 'English' : 'عربي';
    const langBtnTextShort = lang === 'ar' ? 'EN' : 'ع';
    const siteTitle = lang === 'ar' ? CONFIG.clinicNameAr : CONFIG.clinicNameEn;
    const siteSlogan = lang === 'ar' ? 'الرعاية الطبية الموثوقة' : 'Trusted Healthcare';
    const hoursText = lang === 'ar' ? CONFIG.workingHoursShortAr : CONFIG.workingHoursShortEn;

    headerEl.innerHTML = `
      <!-- الشريط العلوي الاحترافي المضغوط: 36-40px سطر واحد فقط -->
      <div class="site-topbar">
        <div class="container topbar-content">
          <!-- الطرف الأول: الطوارئ ورقم الهاتف في سطر واحد -->
          <div class="topbar-contacts">
            <span class="topbar-emergency">
              <span class="topbar-pulse"></span>
              ${ICONS.emergency}
              <span>${t('topbar.emergencyHotline')} <strong>${CONFIG.hotline}</strong></span>
            </span>
            <span class="topbar-sep">•</span>
            <a href="tel:${CONFIG.phone.replace(/\\s/g, '')}" class="topbar-phone-link">
              ${ICONS.phone}
              <span>${CONFIG.phoneDisplay}</span>
            </a>
          </div>

          <!-- الطرف الثاني: ساعات العمل المختصرة في سطر واحد -->
          <div class="topbar-hours-wrap">
            <span class="topbar-hours">
              ${ICONS.clock}
              <span>${hoursText}</span>
            </span>
          </div>
        </div>
      </div>

      <!-- شريط التنقل الرئيسي: 70px ديسكتوب / 60px موبايل -->
      <nav class="site-navbar" id="site-navbar" aria-label="Main Navigation">
        <div class="nav-container">
          <!-- الشعار واسم المركز -->
          <a href="./index.html" class="brand-link" aria-label="${siteTitle}">
            <img src="${IMAGES.logoIcon}" alt="${siteTitle}" class="brand-logo-img" onerror="window.handleImageError(this)">
            <div class="brand-texts">
              <span class="brand-title">${siteTitle}</span>
              <span class="brand-subtitle">${siteSlogan}</span>
            </div>
          </a>

          <!-- روابط الديسكتوب (بدون حجوزاتي) -->
          <ul class="nav-menu">
            <li><a href="./index.html" class="nav-link ${isCurrent('index.html')}">${t('nav.home')}</a></li>
            <li><a href="./about.html" class="nav-link ${isCurrent('about.html')}">${t('nav.about')}</a></li>
            <li><a href="./specialties.html" class="nav-link ${isCurrent('specialties.html')}">${t('nav.specialties')}</a></li>
            <li><a href="./doctors.html" class="nav-link ${isCurrent('doctors.html')}">${t('nav.doctors')}</a></li>
            <li><a href="./blog.html" class="nav-link ${isCurrent('blog.html')}">${t('nav.blog')}</a></li>
            <li><a href="./faq.html" class="nav-link ${isCurrent('faq.html')}">${t('nav.faq')}</a></li>
            <li><a href="./contact.html" class="nav-link ${isCurrent('contact.html')}">${t('nav.contact')}</a></li>
          </ul>

          <!-- أزرار الإجراءات واللغة -->
          <div class="nav-actions">
            <button type="button" class="lang-btn" id="lang-switcher-btn" aria-label="Switch Language">
              <span class="lang-text-desktop">${langBtnTextFull}</span>
              <span class="lang-text-mobile">${langBtnTextShort}</span>
            </button>
            <a href="./booking.html" class="btn btn-primary btn-sm nav-cta-btn">
              ${ICONS.calendar}
              <span>${t('nav.booking')}</span>
            </a>
            <button type="button" class="nav-hamburger" id="nav-hamburger-btn" aria-label="Toggle mobile menu" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      <!-- القائمة الجانبية للشاشات الصغيرة (بدون حجوزاتي) -->
      <div class="drawer-backdrop" id="drawer-backdrop"></div>
      <div class="mobile-drawer" id="mobile-drawer">
        <div class="drawer-header">
          <div class="brand-texts">
            <span class="brand-title" style="font-size:1.15rem;">${siteTitle}</span>
          </div>
          <button type="button" class="drawer-close" id="drawer-close-btn" aria-label="Close menu">
            ${ICONS.close}
          </button>
        </div>
        <ul class="drawer-menu">
          <li><a href="./index.html" class="drawer-link ${isCurrent('index.html')}">${t('nav.home')}</a></li>
          <li><a href="./about.html" class="drawer-link ${isCurrent('about.html')}">${t('nav.about')}</a></li>
          <li><a href="./specialties.html" class="drawer-link ${isCurrent('specialties.html')}">${t('nav.specialties')}</a></li>
          <li><a href="./doctors.html" class="drawer-link ${isCurrent('doctors.html')}">${t('nav.doctors')}</a></li>
          <li><a href="./blog.html" class="drawer-link ${isCurrent('blog.html')}">${t('nav.blog')}</a></li>
          <li><a href="./faq.html" class="drawer-link ${isCurrent('faq.html')}">${t('nav.faq')}</a></li>
          <li><a href="./contact.html" class="drawer-link ${isCurrent('contact.html')}">${t('nav.contact')}</a></li>
        </ul>
        <div style="margin-top:auto;display:flex;flex-direction:column;gap:12px;padding-top:20px;">
          <a href="./booking.html" class="btn btn-primary btn-block">
            ${ICONS.calendar}
            <span>${t('nav.booking')}</span>
          </a>
          <button type="button" class="btn btn-outline btn-block" id="drawer-lang-btn">
            🌐 ${langBtnTextFull}
          </button>
        </div>
      </div>
    `;

    // ربط تبديل اللغة
    const langBtn = document.getElementById('lang-switcher-btn');
    const drawerLangBtn = document.getElementById('drawer-lang-btn');
    const toggleLang = () => {
      const current = getLang();
      setLang(current === 'ar' ? 'en' : 'ar');
    };
    if (langBtn) langBtn.addEventListener('click', toggleLang);
    if (drawerLangBtn) drawerLangBtn.addEventListener('click', toggleLang);

    // قائمة الموبايل
    const hamburger = document.getElementById('nav-hamburger-btn');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    const drawerClose = document.getElementById('drawer-close-btn');

    const toggleDrawer = (open) => {
      if (hamburger) hamburger.classList.toggle('open', open);
      if (drawer) drawer.classList.toggle('open', open);
      if (backdrop) backdrop.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };

    if (hamburger) hamburger.addEventListener('click', () => toggleDrawer(!drawer.classList.contains('open')));
    if (drawerClose) drawerClose.addEventListener('click', () => toggleDrawer(false));
    if (backdrop) backdrop.addEventListener('click', () => toggleDrawer(false));

    // تصغير الهيدر وإضافة ظل عند التمرير
    const navbar = document.getElementById('site-navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 25) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  }

  // --- الفوتر الموحد (تم حذف رابط حجوزاتي) + الشريط السفلي للموبايل ---
  function renderFooter() {
    const footerEl = document.getElementById('site-footer');
    if (!footerEl) return;

    const lang = getLang();
    const siteTitle = lang === 'ar' ? CONFIG.clinicNameAr : CONFIG.clinicNameEn;
    const specialtiesList = SPECIALTIES.slice(0, 5).map(spec => {
      const name = lang === 'ar' ? spec.nameAr : spec.nameEn;
      return `<li><a href="./doctors.html?specialty=${spec.id}" class="footer-link">${ICONS.arrowRight} ${name}</a></li>`;
    }).join('');

    footerEl.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-top">
            <!-- العمود الأول: الشعار والتعريف -->
            <div class="footer-brand">
              <div class="footer-brand-logo">
                <img src="${IMAGES.logoIcon}" alt="${siteTitle}" class="footer-logo-img" onerror="window.handleImageError(this)">
                <span class="footer-brand-title">${siteTitle}</span>
              </div>
              <p class="footer-desc">${t('footer.aboutText')}</p>
              <div class="footer-social-row">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://wa.me/${CONFIG.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="WhatsApp">
                  ${ICONS.whatsapp}
                </a>
              </div>
            </div>

            <!-- العمود الثاني: روابط سريعة (بدون حجوزاتي) -->
            <div>
              <h4 class="footer-col-title">${t('footer.quickLinks')}</h4>
              <ul class="footer-links-list">
                <li><a href="./index.html" class="footer-link">${ICONS.arrowRight} ${t('nav.home')}</a></li>
                <li><a href="./about.html" class="footer-link">${ICONS.arrowRight} ${t('nav.about')}</a></li>
                <li><a href="./specialties.html" class="footer-link">${ICONS.arrowRight} ${t('nav.specialties')}</a></li>
                <li><a href="./doctors.html" class="footer-link">${ICONS.arrowRight} ${t('nav.doctors')}</a></li>
                <li><a href="./booking.html" class="footer-link">${ICONS.arrowRight} ${t('nav.booking')}</a></li>
                <li><a href="./blog.html" class="footer-link">${ICONS.arrowRight} ${t('nav.blog')}</a></li>
                <li><a href="./faq.html" class="footer-link">${ICONS.arrowRight} ${t('nav.faq')}</a></li>
                <li><a href="./contact.html" class="footer-link">${ICONS.arrowRight} ${t('nav.contact')}</a></li>
              </ul>
            </div>

            <!-- العمود الثالث: التخصصات -->
            <div>
              <h4 class="footer-col-title">${t('footer.specialties')}</h4>
              <ul class="footer-links-list">
                ${specialtiesList}
                <li><a href="./specialties.html" class="footer-link" style="color:var(--mint);font-weight:700;">${ICONS.arrowRight} ${t('specialtiesSection.viewAll')}</a></li>
              </ul>
            </div>

            <!-- العمود الرابع: التواصل وساعات العمل -->
            <div>
              <h4 class="footer-col-title">${t('footer.contactInfo')}</h4>
              <div class="footer-contact-list">
                <div class="footer-contact-item">
                  ${ICONS.phone}
                  <div>
                    <div style="font-weight:700;color:var(--white);">${CONFIG.phoneDisplay}</div>
                    <div style="font-size:0.8rem;color:var(--coral-light);">${t('topbar.emergencyHotline')} ${CONFIG.hotline}</div>
                  </div>
                </div>
                <div class="footer-contact-item">
                  ${ICONS.mail}
                  <span>${CONFIG.email}</span>
                </div>
                <div class="footer-contact-item">
                  ${ICONS.mapPin}
                  <span>${lang === 'ar' ? CONFIG.addressAr : CONFIG.addressEn}</span>
                </div>
                <div class="footer-contact-item">
                  ${ICONS.clock}
                  <span>${lang === 'ar' ? CONFIG.workingHoursShortAr : CONFIG.workingHoursShortEn}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- التنبيهات الطبية والتجريبية -->
          <div class="footer-disclaimers">
            <p><strong>⚠️ ${t('footer.medicalDisclaimer')}</strong></p>
            <p>ℹ️ ${t('footer.demoNotice')}</p>
          </div>

          <!-- حقوق النشر -->
          <div class="footer-bottom">
            <p>${t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      <!-- الأزرار العائمة (واتساب + العودة للأعلى) -->
      <div class="floating-widgets">
        <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(lang === 'ar' ? 'مرحباً، أود الاستفسار عن مواعيد العيادات في مركز نبض' : 'Hello, I would like to inquire about clinic appointments at Nabd Medical Care')}" 
           target="_blank" rel="noopener noreferrer" class="whatsapp-float-btn" aria-label="${t('common.whatsappHelp')}">
          <span class="whatsapp-pulse"></span>
          ${ICONS.whatsapp}
        </a>
        <button type="button" class="back-to-top-btn" id="back-to-top-btn" aria-label="${t('common.backToTop')}">
          ${ICONS.up}
        </button>
      </div>

      <!-- الشريط الثابت السفلي على الموبايل (ارتفاع 56px مع وصول سريع) -->
      <nav class="mobile-bottom-bar" aria-label="Mobile Quick Actions">
        <a href="tel:${CONFIG.phone.replace(/\\s/g, '')}" class="mobile-bottom-btn">
          ${ICONS.phone}
          <span>${lang === 'ar' ? 'اتصل بنا' : 'Call Us'}</span>
        </a>
        <a href="https://wa.me/${CONFIG.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="mobile-bottom-btn mobile-bottom-wa">
          ${ICONS.whatsapp}
          <span>${lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
        </a>
        <a href="./booking.html" class="mobile-bottom-btn mobile-bottom-cta">
          ${ICONS.calendar}
          <span>${t('nav.booking')}</span>
        </a>
      </nav>
    `;

    // زر العودة للأعلى
    const bttBtn = document.getElementById('back-to-top-btn');
    if (bttBtn) {
      window.addEventListener('scroll', () => {
        bttBtn.classList.toggle('visible', window.scrollY > 400);
      });
      bttBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // --- معالج الخطأ الآمن للصور ---
  window.handleImageError = function (imgEl) {
    if (!imgEl) return;
    imgEl.onerror = null;
    imgEl.style.display = 'none';
    const parent = imgEl.parentElement;
    if (parent && !parent.querySelector('.img-fallback-placeholder')) {
      const fallback = document.createElement('div');
      fallback.className = 'img-fallback-placeholder img-fallback';
      fallback.style.width = '100%';
      fallback.style.height = '100%';
      fallback.style.minHeight = '180px';
      fallback.innerHTML = `<span style="font-size:1.6rem;opacity:0.85;">🏥 نبض</span>`;
      parent.appendChild(fallback);
    }
  };

  // --- العدادات المتحركة على التمرير (Count-Up) ---
  function initCountUp() {
    const statsElements = document.querySelectorAll('.stat-number[data-target]');
    if (!statsElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          let count = 0;
          const duration = 1600;
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = Math.ceil(target / steps);

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            el.textContent = formatNumber(count) + suffix;
          }, stepTime);

          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    statsElements.forEach(el => observer.observe(el));
  }

  // --- سلايدر الهيرو في الرئيسية ---
  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;

    let current = 0;
    let timer = null;

    function goToSlide(idx) {
      slides.forEach((s, i) => s.classList.toggle('active', i === idx));
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      current = idx;
    }

    function nextSlide() {
      goToSlide((current + 1) % slides.length);
    }

    timer = setInterval(nextSlide, 6000);

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        clearInterval(timer);
        goToSlide(idx);
        timer = setInterval(nextSlide, 6000);
      });
    });
  }

  // --- شريط الحجز السريع في الهيرو ---
  function initQuickBookingBar() {
    const specialtySelect = document.getElementById('quick-specialty-select');
    const typeSelect = document.getElementById('quick-type-select');
    const submitBtn = document.getElementById('quick-search-btn');

    if (!specialtySelect || !submitBtn) return;
    const lang = getLang();

    specialtySelect.innerHTML = `
      <option value="">${t('hero.allSpecialties')}</option>
      ${SPECIALTIES.map(s => `<option value="${s.id}">${lang === 'ar' ? s.nameAr : s.nameEn}</option>`).join('')}
    `;

    if (typeSelect) {
      typeSelect.innerHTML = CONSULTATION_TYPES.map(c => `
        <option value="${c.id}">${lang === 'ar' ? c.nameAr : c.nameEn}</option>
      `).join('');
    }

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const spec = specialtySelect.value;
      const type = typeSelect ? typeSelect.value : 'clinic';
      let targetUrl = './doctors.html';
      const params = new URLSearchParams();
      if (spec) params.append('specialty', spec);
      if (type) params.append('type', type);
      if (params.toString()) {
        targetUrl += '?' + params.toString();
      }
      window.location.href = targetUrl;
    });
  }

  // --- رسم بطاقات التخصصات في الرئيسية ---
  function renderFeaturedSpecialties() {
    const grid = document.getElementById('featured-specialties-grid');
    if (!grid) return;
    const lang = getLang();

    grid.innerHTML = SPECIALTIES.map(spec => {
      const name = lang === 'ar' ? spec.nameAr : spec.nameEn;
      const desc = lang === 'ar' ? spec.shortDescAr : spec.shortDescEn;
      const iconSvg = ICONS[spec.icon] || ICONS.internal;

      return `
        <a href="./doctors.html?specialty=${spec.id}" class="specialty-card">
          <div class="specialty-icon-box">
            ${iconSvg}
          </div>
          <h3 class="specialty-name">${name}</h3>
          <p class="specialty-desc">${desc}</p>
          <span class="specialty-link">
            <span>${t('specialtiesSection.viewDoctors')}</span>
            ${ICONS.arrowRight}
          </span>
        </a>
      `;
    }).join('');
  }

  // --- رسم الأطباء المميزين في الرئيسية ---
  function renderFeaturedDoctors() {
    const grid = document.getElementById('featured-doctors-grid');
    if (!grid) return;
    const lang = getLang();
    const featured = DOCTORS.slice(0, 4);

    grid.innerHTML = featured.map(doc => renderDoctorCardHtml(doc, lang)).join('');
  }

  function renderDoctorCardHtml(doc, lang) {
    const name = lang === 'ar' ? doc.nameAr : doc.nameEn;
    const title = lang === 'ar' ? doc.titleAr : doc.titleEn;
    const spec = SPECIALTIES.find(s => s.id === doc.specialtyId);
    const specName = spec ? (lang === 'ar' ? spec.nameAr : spec.nameEn) : '';
    const imgHtml = doc.photo
      ? `<img src="${doc.photo}" alt="${name}" loading="lazy" onerror="window.handleImageError(this)">`
      : `<div class="doctor-avatar-fallback">${lang === 'ar' ? (doc.initials || 'د') : (doc.initialsEn || 'Dr')}</div>`;

    const availableBadge = doc.availableToday
      ? `<span class="doctor-badge-today">● ${t('featuredDoctors.availableToday')}</span>`
      : '';

    return `
      <div class="doctor-card">
        <div class="doctor-img-wrap">
          ${imgHtml}
          ${availableBadge}
        </div>
        <div class="doctor-card-body">
          <span class="doctor-specialty-tag">${specName}</span>
          <h3 class="doctor-name">${name}</h3>
          <p class="doctor-title-sub">${title}</p>
          <div class="doctor-meta-row">
            <span class="doctor-rating">
              ${ICONS.star}
              <span>${doc.rating}</span>
              <span style="color:var(--text-light);font-size:0.78rem;">(${doc.reviewCount})</span>
            </span>
            <span style="color:var(--text-muted);font-size:0.85rem;">${doc.experienceYears} ${t('doctorDetailsPage.experienceYears')}</span>
          </div>
          <div class="doctor-price-box">
            <span>${t('featuredDoctors.consultationFrom')} </span>
            <strong class="doctor-price-num">${formatCurrency(doc.fees.clinic)}</strong>
          </div>
          <div class="doctor-card-actions">
            <a href="./doctor-details.html?id=${doc.id}" class="btn btn-outline btn-sm" style="flex:1;">
              ${t('featuredDoctors.viewProfile')}
            </a>
            <a href="./booking.html?doctor=${doc.id}&specialty=${doc.specialtyId}" class="btn btn-primary btn-sm" style="flex:1;">
              ${t('featuredDoctors.bookDoctor')}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // --- رسم أنواع الاستشارات في الرئيسية ---
  function renderConsultationModes() {
    const grid = document.getElementById('consultation-modes-grid');
    if (!grid) return;
    const lang = getLang();

    grid.innerHTML = CONSULTATION_TYPES.map((mode, idx) => {
      const name = lang === 'ar' ? mode.nameAr : mode.nameEn;
      const tagline = lang === 'ar' ? mode.taglineAr : mode.taglineEn;
      const badge = lang === 'ar' ? mode.badgeAr : mode.badgeEn;
      const features = lang === 'ar' ? mode.featuresAr : mode.featuresEn;
      const icon = ICONS[mode.icon] || ICONS.building;

      return `
        <div class="mode-card ${idx === 0 ? 'featured' : ''}">
          <span class="mode-badge">${badge}</span>
          <div class="mode-icon">${icon}</div>
          <h3 class="mode-title">${name}</h3>
          <p class="mode-tagline">${tagline}</p>
          <div class="mode-price-wrap">
            <span class="mode-price-num">${formatNumber(mode.priceEg)}</span>
            <span class="mode-price-currency">${lang === 'ar' ? 'ج.م' : 'EGP'}</span>
          </div>
          <ul class="mode-features-list">
            ${features.map(f => `<li class="mode-feature-item">${ICONS.check} <span>${f}</span></li>`).join('')}
          </ul>
          <a href="./booking.html?type=${mode.id}" class="btn ${idx === 0 ? 'btn-primary' : 'btn-outline-navy'} btn-block">
            ${t('consultationModes.bookThisMode')}
          </a>
        </div>
      `;
    }).join('');
  }

  // --- رسم معرض المرافق مع Lightbox ---
  function renderFacilitiesGallery() {
    const grid = document.getElementById('facilities-grid');
    if (!grid) return;
    const lang = getLang();

    grid.innerHTML = FACILITIES.map(fac => {
      const title = lang === 'ar' ? fac.titleAr : fac.titleEn;
      const desc = lang === 'ar' ? fac.descAr : fac.descEn;

      return `
        <div class="facility-card" data-fac-id="${fac.id}">
          <div class="facility-img-wrap">
            <img src="${fac.image}" alt="${title}" loading="lazy" onerror="window.handleImageError(this)">
            <div class="facility-zoom-btn">
              ${ICONS.zoom}
            </div>
          </div>
          <div class="facility-info">
            <h3 class="facility-title">${title}</h3>
            <p class="facility-desc">${desc}</p>
          </div>
        </div>
      `;
    }).join('');

    let lightbox = document.getElementById('lightbox-modal');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'lightbox-modal';
      lightbox.className = 'lightbox-modal';
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <button type="button" class="lightbox-close" id="lightbox-close-btn">${ICONS.close}</button>
          <img src="" alt="" class="lightbox-img" id="lightbox-img">
          <div class="lightbox-caption">
            <h3 class="lightbox-title" id="lightbox-title"></h3>
            <p class="lightbox-desc" id="lightbox-desc"></p>
          </div>
        </div>
      `;
      document.body.appendChild(lightbox);

      const closeBtn = document.getElementById('lightbox-close-btn');
      closeBtn.addEventListener('click', () => lightbox.classList.remove('open'));
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('open');
      });
    }

    grid.querySelectorAll('.facility-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-fac-id');
        const item = FACILITIES.find(f => f.id === id);
        if (!item) return;
        const img = document.getElementById('lightbox-img');
        const titleEl = document.getElementById('lightbox-title');
        const descEl = document.getElementById('lightbox-desc');
        img.src = item.image;
        titleEl.textContent = lang === 'ar' ? item.titleAr : item.titleEn;
        descEl.textContent = lang === 'ar' ? item.descAr : item.descEn;
        lightbox.classList.add('open');
      });
    });
  }

  // --- رسم آراء المرضى ---
  function renderTestimonials() {
    const slider = document.getElementById('testimonials-slider');
    if (!slider) return;
    const lang = getLang();

    slider.innerHTML = TESTIMONIALS.map(item => {
      const name = lang === 'ar' ? item.nameAr : item.nameEn;
      const city = lang === 'ar' ? item.cityAr : item.cityEn;
      const spec = lang === 'ar' ? item.specialtyAr : item.specialtyEn;
      const comment = lang === 'ar' ? item.commentAr : item.commentEn;
      const initials = lang === 'ar' ? item.initials : item.initialsEn;

      return `
        <div class="testimonial-card">
          <div class="testimonial-stars">
            ${ICONS.star}${ICONS.star}${ICONS.star}${ICONS.star}${ICONS.star}
          </div>
          <p class="testimonial-text">"${comment}"</p>
          <div class="testimonial-patient">
            <div class="testimonial-avatar">${initials}</div>
            <div>
              <h4 class="testimonial-name">${name}</h4>
              <span class="testimonial-meta">${city} • ${spec}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ==========================================================================
  // صفحة الأطباء: البحث والتصفية (doctors.html)
  // ==========================================================================
  function initDoctorsPage() {
    const grid = document.getElementById('doctors-directory-grid');
    if (!grid) return;

    const lang = getLang();
    const searchInput = document.getElementById('doctor-search-input');
    const specialtySelect = document.getElementById('doctor-specialty-filter');
    const typeSelect = document.getElementById('doctor-type-filter');
    const genderSelect = document.getElementById('doctor-gender-filter');
    const availableCheck = document.getElementById('doctor-available-filter');
    const sortSelect = document.getElementById('doctor-sort-filter');
    const clearBtn = document.getElementById('clear-filters-btn');
    const countEl = document.getElementById('results-count-num');
    const emptyState = document.getElementById('doctors-empty-state');

    const urlParams = new URLSearchParams(window.location.search);
    const initialSpecialty = urlParams.get('specialty') || '';
    const initialType = urlParams.get('type') || '';

    if (specialtySelect) {
      specialtySelect.innerHTML = `
        <option value="">${t('hero.allSpecialties')}</option>
        ${SPECIALTIES.map(s => `<option value="${s.id}" ${s.id === initialSpecialty ? 'selected' : ''}>${lang === 'ar' ? s.nameAr : s.nameEn}</option>`).join('')}
      `;
    }

    if (typeSelect && initialType) {
      typeSelect.value = initialType;
    }

    function filterAndRender() {
      const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
      const spec = specialtySelect ? specialtySelect.value : '';
      const type = typeSelect ? typeSelect.value : '';
      const gender = genderSelect ? genderSelect.value : '';
      const availOnly = availableCheck ? availableCheck.checked : false;
      const sortBy = sortSelect ? sortSelect.value : 'rating';

      let results = DOCTORS.filter(doc => {
        if (query) {
          const nameAr = doc.nameAr.toLowerCase();
          const nameEn = doc.nameEn.toLowerCase();
          const titleAr = doc.titleAr.toLowerCase();
          const titleEn = doc.titleEn.toLowerCase();
          if (!nameAr.includes(query) && !nameEn.includes(query) && !titleAr.includes(query) && !titleEn.includes(query)) {
            return false;
          }
        }
        if (spec && doc.specialtyId !== spec) return false;
        if (gender && doc.gender !== gender) return false;
        if (availOnly && !doc.availableToday) return false;
        return true;
      });

      if (sortBy === 'rating') {
        results.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === 'price-asc') {
        results.sort((a, b) => a.fees.clinic - b.fees.clinic);
      } else if (sortBy === 'price-desc') {
        results.sort((a, b) => b.fees.clinic - a.fees.clinic);
      }

      if (countEl) countEl.textContent = results.length;

      if (results.length === 0) {
        grid.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
      } else {
        grid.style.display = 'grid';
        if (emptyState) emptyState.style.display = 'none';
        grid.innerHTML = results.map(doc => renderDoctorCardHtml(doc, lang)).join('');
      }
    }

    [searchInput, specialtySelect, typeSelect, genderSelect, availableCheck, sortSelect].forEach(el => {
      if (el) el.addEventListener('input', filterAndRender);
      if (el) el.addEventListener('change', filterAndRender);
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        if (specialtySelect) specialtySelect.value = '';
        if (typeSelect) typeSelect.value = '';
        if (genderSelect) genderSelect.value = '';
        if (availableCheck) availableCheck.checked = false;
        if (sortSelect) sortSelect.value = 'rating';
        filterAndRender();
      });
    }

    filterAndRender();
  }

  // ==========================================================================
  // صفحة تفاصيل الطبيب (doctor-details.html)
  // ==========================================================================
  function initDoctorDetailsPage() {
    const container = document.getElementById('doctor-details-container');
    const notFoundBox = document.getElementById('doctor-not-found-box');
    if (!container) return;

    const lang = getLang();
    const urlParams = new URLSearchParams(window.location.search);
    const doctorId = urlParams.get('id');
    const doctor = DOCTORS.find(d => d.id === doctorId);

    if (!doctor) {
      container.style.display = 'none';
      if (notFoundBox) notFoundBox.style.display = 'block';
      return;
    }

    if (notFoundBox) notFoundBox.style.display = 'none';
    container.style.display = 'block';

    const spec = SPECIALTIES.find(s => s.id === doctor.specialtyId);
    const specName = spec ? (lang === 'ar' ? spec.nameAr : spec.nameEn) : '';
    const name = lang === 'ar' ? doctor.nameAr : doctor.nameEn;
    const title = lang === 'ar' ? doctor.titleAr : doctor.titleEn;
    const bio = lang === 'ar' ? doctor.bioAr : doctor.bioEn;
    const edu = lang === 'ar' ? doctor.educationAr : doctor.educationEn;
    const langs = lang === 'ar' ? doctor.languagesAr.join('، ') : doctor.languagesEn.join(', ');

    const today = new Date();
    const availableDaysList = [];
    for (let i = 1; i <= 7; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      const dayOfWeek = d.getDay();
      if (dayOfWeek === 5) continue;
      if (doctor.scheduleDays.includes(dayOfWeek)) {
        availableDaysList.push({
          dateObj: d,
          dateIso: d.toISOString().split('T')[0],
          dayName: new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-US', { weekday: 'short' }).format(d),
          dayNum: new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-US', { day: 'numeric', month: 'short' }).format(d)
        });
      }
    }

    const imgHtml = doctor.photo
      ? `<img src="${doctor.photo}" alt="${name}" class="doctor-sticky-img" onerror="window.handleImageError(this)">`
      : `<div class="doctor-avatar-fallback" style="aspect-ratio:4/5;">${lang === 'ar' ? (doctor.initials || 'د') : (doctor.initialsEn || 'Dr')}</div>`;

    container.innerHTML = `
      <div class="doctor-profile-grid">
        <div class="doctor-sticky-card">
          ${imgHtml}
          <div class="doctor-sticky-info">
            <span class="badge-tag">${specName}</span>
            <h1 class="doctor-name" style="font-size:1.45rem;margin-top:6px;">${name}</h1>
            <p class="doctor-title-sub">${title}</p>
            <div class="doctor-meta-row">
              <span class="doctor-rating">
                ${ICONS.star} <strong>${doctor.rating}</strong> (${doctor.reviewCount} ${t('doctorDetailsPage.reviews')})
              </span>
              <span>${doctor.experienceYears} ${t('doctorDetailsPage.experienceYears')}</span>
            </div>

            <div class="fees-breakdown-card">
              <h4 style="font-size:0.92rem;font-weight:800;color:var(--navy);margin-bottom:10px;">${t('doctorDetailsPage.consultationFees')}</h4>
              <div class="fee-row">
                <span>${ICONS.building} ${lang === 'ar' ? 'كشف بالعيادة' : 'In-Clinic'}</span>
                <strong>${formatCurrency(doctor.fees.clinic)}</strong>
              </div>
              <div class="fee-row">
                <span>${ICONS.video} ${lang === 'ar' ? 'استشارة فيديو' : 'Video Consult'}</span>
                <strong>${formatCurrency(doctor.fees.video)}</strong>
              </div>
              <div class="fee-row">
                <span>${ICONS.phone} ${lang === 'ar' ? 'استشارة هاتفية' : 'Phone Consult'}</span>
                <strong>${formatCurrency(doctor.fees.phone)}</strong>
              </div>
            </div>

            <div style="margin-top:20px;">
              <a href="./booking.html?doctor=${doctor.id}&specialty=${doctor.specialtyId}" class="btn btn-primary btn-block">
                ${ICONS.calendar} ${t('featuredDoctors.bookDoctor')}
              </a>
            </div>
          </div>
        </div>

        <div>
          <div class="detail-section-card">
            <h2 class="detail-card-title">${ICONS.user} ${t('doctorDetailsPage.bio')}</h2>
            <p style="font-size:1.02rem;line-height:1.8;color:var(--text);margin-bottom:16px;">${bio}</p>
            <div style="font-size:0.92rem;color:var(--text-muted);">
              <strong>${t('doctorDetailsPage.languages')}</strong> ${langs}
            </div>
          </div>

          <div class="detail-section-card">
            <h2 class="detail-card-title">${ICONS.shield} ${t('doctorDetailsPage.education')}</h2>
            <p style="font-size:1rem;line-height:1.8;color:var(--text);">${edu}</p>
          </div>

          <div class="detail-section-card">
            <h2 class="detail-card-title">${ICONS.calendar} ${t('doctorDetailsPage.scheduleTitle')}</h2>
            
            <p style="font-weight:700;color:var(--navy);margin-bottom:12px;">${t('doctorDetailsPage.selectDay')}</p>
            <div class="schedule-days-row" id="schedule-days-container">
              ${availableDaysList.map((day, i) => `
                <button type="button" class="schedule-day-btn ${i === 0 ? 'active' : ''}" data-date="${day.dateIso}">
                  <span class="day-btn-name">${day.dayName}</span>
                  <span class="day-btn-date">${day.dayNum}</span>
                </button>
              `).join('')}
            </div>

            <p style="font-weight:700;color:var(--navy);margin-bottom:12px;">${t('doctorDetailsPage.selectSlot')}</p>
            <div class="slots-grid" id="schedule-slots-container"></div>

            <div style="margin-top:24px;">
              <button type="button" class="btn btn-primary btn-block btn-lg" id="book-selected-slot-btn" disabled>
                ${ICONS.check} ${t('doctorDetailsPage.proceedToBooking')}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    let selectedDate = availableDaysList.length ? availableDaysList[0].dateIso : '';
    let selectedSlot = '';
    const slotsContainer = document.getElementById('schedule-slots-container');
    const bookSlotBtn = document.getElementById('book-selected-slot-btn');

    function renderSlotsForDate(dateIso) {
      if (!slotsContainer) return;
      selectedSlot = '';
      if (bookSlotBtn) bookSlotBtn.disabled = true;

      slotsContainer.innerHTML = doctor.timeSlots.map(slot => `
        <button type="button" class="slot-btn" data-slot="${slot}">
          ${slot}
        </button>
      `).join('');

      slotsContainer.querySelectorAll('.slot-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          slotsContainer.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          selectedSlot = btn.getAttribute('data-slot');
          if (bookSlotBtn) bookSlotBtn.disabled = false;
        });
      });
    }

    const dayBtns = container.querySelectorAll('.schedule-day-btn');
    dayBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        dayBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedDate = btn.getAttribute('data-date');
        renderSlotsForDate(selectedDate);
      });
    });

    if (selectedDate) renderSlotsForDate(selectedDate);

    if (bookSlotBtn) {
      bookSlotBtn.addEventListener('click', () => {
        if (!selectedSlot || !selectedDate) return;
        window.location.href = `./booking.html?doctor=${doctor.id}&specialty=${doctor.specialtyId}&date=${selectedDate}&time=${encodeURIComponent(selectedSlot)}`;
      });
    }
  }

  // ==========================================================================
  // معالج طلب موعد (booking.html)
  // ==========================================================================
  function initBookingPage() {
    const wizardEl = document.getElementById('booking-wizard-wrapper');
    if (!wizardEl) return;

    const lang = getLang();
    const urlParams = new URLSearchParams(window.location.search);
    const initialDocId = urlParams.get('doctor') || '';
    const initialSpecId = urlParams.get('specialty') || '';
    const initialType = urlParams.get('type') || 'clinic';
    const initialDate = urlParams.get('date') || '';
    const initialTime = urlParams.get('time') || '';

    const bookingState = {
      specialtyId: initialSpecId,
      doctorId: initialDocId,
      consultationType: initialType,
      appointmentDate: initialDate,
      appointmentTime: initialTime,
      patientName: '',
      patientPhone: '',
      patientEmail: '',
      patientAge: '',
      patientNotes: '',
      fee: 0,
      currentStep: 1
    };

    const stepsTabs = document.querySelectorAll('.wizard-step-tab');
    const step1El = document.getElementById('wizard-step-1');
    const step2El = document.getElementById('wizard-step-2');
    const step3El = document.getElementById('wizard-step-3');
    const step4El = document.getElementById('wizard-step-4');
    const successEl = document.getElementById('wizard-step-success');

    const specialtySelect = document.getElementById('booking-specialty-select');
    const doctorSelect = document.getElementById('booking-doctor-select');
    const typeCards = document.querySelectorAll('.type-radio-card');
    const toStep2Btn = document.getElementById('to-step-2-btn');

    if (specialtySelect) {
      specialtySelect.innerHTML = `
        <option value="">-- ${t('bookingPage.chooseSpecialty')} --</option>
        ${SPECIALTIES.map(s => `<option value="${s.id}">${lang === 'ar' ? s.nameAr : s.nameEn}</option>`).join('')}
      `;
      if (bookingState.specialtyId) specialtySelect.value = bookingState.specialtyId;
    }

    function populateDoctors(specId) {
      if (!doctorSelect) return;
      const filtered = specId ? DOCTORS.filter(d => d.specialtyId === specId) : DOCTORS;
      doctorSelect.innerHTML = `
        <option value="">-- ${t('bookingPage.chooseDoctor')} --</option>
        ${filtered.map(d => `<option value="${d.id}">${lang === 'ar' ? d.nameAr : d.nameEn} (${formatCurrency(d.fees.clinic)})</option>`).join('')}
      `;
      if (bookingState.doctorId && filtered.some(d => d.id === bookingState.doctorId)) {
        doctorSelect.value = bookingState.doctorId;
      }
    }

    if (specialtySelect) {
      specialtySelect.addEventListener('change', () => {
        bookingState.specialtyId = specialtySelect.value;
        populateDoctors(bookingState.specialtyId);
      });
      populateDoctors(bookingState.specialtyId);
    }

    if (doctorSelect) {
      doctorSelect.addEventListener('change', () => {
        bookingState.doctorId = doctorSelect.value;
        const doc = DOCTORS.find(d => d.id === bookingState.doctorId);
        if (doc && !bookingState.specialtyId) {
          bookingState.specialtyId = doc.specialtyId;
          if (specialtySelect) specialtySelect.value = doc.specialtyId;
        }
      });
    }

    typeCards.forEach(card => {
      const type = card.getAttribute('data-type');
      if (type === bookingState.consultationType) card.classList.add('active');

      card.addEventListener('click', () => {
        typeCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        bookingState.consultationType = type;
      });
    });

    if (toStep2Btn) {
      toStep2Btn.addEventListener('click', () => {
        bookingState.specialtyId = specialtySelect ? specialtySelect.value : '';
        bookingState.doctorId = doctorSelect ? doctorSelect.value : '';

        if (!bookingState.specialtyId || !bookingState.doctorId) {
          alert(t('bookingPage.validationErrors.selectDoctor'));
          return;
        }
        if (!bookingState.consultationType) {
          alert(t('bookingPage.validationErrors.selectType'));
          return;
        }

        goToStep(2);
        buildStep2Calendar();
      });
    }

    const toStep1Btn = document.getElementById('back-to-step-1-btn');
    const toStep3Btn = document.getElementById('to-step-3-btn');
    if (toStep1Btn) toStep1Btn.addEventListener('click', () => goToStep(1));

    function buildStep2Calendar() {
      const daysWrap = document.getElementById('booking-calendar-days');
      const slotsWrap = document.getElementById('booking-calendar-slots');
      if (!daysWrap || !slotsWrap) return;

      const doc = DOCTORS.find(d => d.id === bookingState.doctorId);
      if (!doc) return;

      const today = new Date();
      const nextDays = [];
      for (let i = 1; i <= 14; i++) {
        const d = new Date();
        d.setDate(today.getDate() + i);
        const dayOfWeek = d.getDay();
        const isFriday = dayOfWeek === 5;
        const isDocWorking = doc.scheduleDays.includes(dayOfWeek);

        nextDays.push({
          dateObj: d,
          dateIso: d.toISOString().split('T')[0],
          dayName: new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-US', { weekday: 'short' }).format(d),
          dayNum: new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-US', { day: 'numeric', month: 'short' }).format(d),
          disabled: isFriday || !isDocWorking
        });
      }

      let activeDate = bookingState.appointmentDate;
      const firstAvailable = nextDays.find(d => !d.disabled);
      if (!activeDate || nextDays.find(d => d.dateIso === activeDate && d.disabled)) {
        activeDate = firstAvailable ? firstAvailable.dateIso : '';
      }
      bookingState.appointmentDate = activeDate;

      daysWrap.innerHTML = nextDays.map(d => `
        <button type="button" class="schedule-day-btn ${d.dateIso === activeDate ? 'active' : ''}" 
                data-date="${d.dateIso}" ${d.disabled ? 'disabled style="opacity:0.35;cursor:not-allowed;"' : ''}>
          <span class="day-btn-name">${d.dayName}</span>
          <span class="day-btn-date">${d.dayNum}</span>
        </button>
      `).join('');

      function renderSlots(dateIso) {
        slotsWrap.innerHTML = doc.timeSlots.map(slot => {
          const isSelected = bookingState.appointmentTime === slot;
          return `
            <button type="button" class="slot-btn ${isSelected ? 'active' : ''}" data-slot="${slot}">
              ${slot}
            </button>
          `;
        }).join('');

        slotsWrap.querySelectorAll('.slot-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            slotsWrap.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            bookingState.appointmentTime = btn.getAttribute('data-slot');
          });
        });
      }

      daysWrap.querySelectorAll('.schedule-day-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', () => {
          daysWrap.querySelectorAll('.schedule-day-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          bookingState.appointmentDate = btn.getAttribute('data-date');
          bookingState.appointmentTime = '';
          renderSlots(bookingState.appointmentDate);
        });
      });

      if (activeDate) renderSlots(activeDate);
    }

    if (toStep3Btn) {
      toStep3Btn.addEventListener('click', () => {
        if (!bookingState.appointmentDate) {
          alert(t('bookingPage.validationErrors.selectDate'));
          return;
        }
        if (!bookingState.appointmentTime) {
          alert(t('bookingPage.validationErrors.selectSlot'));
          return;
        }
        goToStep(3);
      });
    }

    const toStep2BackBtn = document.getElementById('back-to-step-2-btn');
    const toStep4Btn = document.getElementById('to-step-4-btn');
    if (toStep2BackBtn) toStep2BackBtn.addEventListener('click', () => goToStep(2));

    if (toStep4Btn) {
      toStep4Btn.addEventListener('click', () => {
        const nameInput = document.getElementById('patient-name-input');
        const phoneInput = document.getElementById('patient-phone-input');
        const emailInput = document.getElementById('patient-email-input');
        const ageInput = document.getElementById('patient-age-input');
        const notesInput = document.getElementById('patient-notes-input');

        const name = (nameInput ? nameInput.value : '').trim();
        const phone = (phoneInput ? phoneInput.value : '').trim().replace(/\\s+/g, '');
        const email = (emailInput ? emailInput.value : '').trim();
        const age = parseInt(ageInput ? ageInput.value : '0', 10);
        const notes = notesInput ? notesInput.value.trim() : '';

        if (!name || name.length < 3) {
          alert(t('bookingPage.validationErrors.nameRequired'));
          nameInput.focus();
          return;
        }

        const egyptianPhoneRegex = /^01[0125][0-9]{8}$/;
        if (!egyptianPhoneRegex.test(phone)) {
          alert(t('bookingPage.validationErrors.phoneInvalid'));
          phoneInput.focus();
          return;
        }

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          alert(t('bookingPage.validationErrors.emailInvalid'));
          emailInput.focus();
          return;
        }

        if (isNaN(age) || age < 0 || age > 120) {
          alert(t('bookingPage.validationErrors.ageInvalid'));
          ageInput.focus();
          return;
        }

        bookingState.patientName = name;
        bookingState.patientPhone = phone;
        bookingState.patientEmail = email;
        bookingState.patientAge = age;
        bookingState.patientNotes = notes;

        goToStep(4);
        renderSummaryReview();
      });
    }

    const toStep3BackBtn = document.getElementById('back-to-step-3-btn');
    const confirmFinalBtn = document.getElementById('confirm-booking-final-btn');
    if (toStep3BackBtn) toStep3BackBtn.addEventListener('click', () => goToStep(3));

    function renderSummaryReview() {
      const doc = DOCTORS.find(d => d.id === bookingState.doctorId);
      const spec = SPECIALTIES.find(s => s.id === bookingState.specialtyId);
      const type = CONSULTATION_TYPES.find(c => c.id === bookingState.consultationType);

      const fee = doc ? doc.fees[bookingState.consultationType] || doc.fees.clinic : 350;
      bookingState.fee = fee;

      const docName = doc ? (lang === 'ar' ? doc.nameAr : doc.nameEn) : '';
      const specName = spec ? (lang === 'ar' ? spec.nameAr : spec.nameEn) : '';
      const typeName = type ? (lang === 'ar' ? type.nameAr : type.nameEn) : '';

      document.getElementById('sum-doctor').textContent = docName;
      document.getElementById('sum-specialty').textContent = specName;
      document.getElementById('sum-type').textContent = typeName;
      document.getElementById('sum-date').textContent = bookingState.appointmentDate;
      document.getElementById('sum-time').textContent = bookingState.appointmentTime;
      document.getElementById('sum-name').textContent = bookingState.patientName;
      document.getElementById('sum-phone').textContent = bookingState.patientPhone;
      document.getElementById('sum-email').textContent = bookingState.patientEmail || '-';
      document.getElementById('sum-age').textContent = `${bookingState.patientAge} ${t('bookingPage.yearsOld')}`;
      document.getElementById('sum-notes').textContent = bookingState.patientNotes || '-';
      document.getElementById('sum-fee').textContent = formatCurrency(fee);
    }

    if (confirmFinalBtn) {
      confirmFinalBtn.addEventListener('click', () => {
        confirmFinalBtn.disabled = true;
        confirmFinalBtn.textContent = lang === 'ar' ? 'جاري إرسال الطلب...' : 'Sending Request...';

        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const refCode = `NB-2026-${randomNum}`;

        const newRequest = {
          id: refCode,
          refCode: refCode,
          doctorId: bookingState.doctorId,
          specialtyId: bookingState.specialtyId,
          consultationType: bookingState.consultationType,
          date: bookingState.appointmentDate,
          timeSlot: bookingState.appointmentTime,
          patientName: bookingState.patientName,
          patientPhone: bookingState.patientPhone,
          patientEmail: bookingState.patientEmail,
          patientAge: bookingState.patientAge,
          patientNotes: bookingState.patientNotes,
          fee: bookingState.fee,
          status: 'pending',
          createdAt: new Date().toISOString()
        };

        if (CONFIG.formspreeBookingEndpoint && !CONFIG.formspreeBookingEndpoint.includes('your_form_id')) {
          try {
            fetch(CONFIG.formspreeBookingEndpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
              body: JSON.stringify(newRequest)
            }).catch(() => {});
          } catch (e) {}
        }

        showSuccessScreen(newRequest);
      });
    }

    function showSuccessScreen(booking) {
      step1El.style.display = 'none';
      step2El.style.display = 'none';
      step3El.style.display = 'none';
      step4El.style.display = 'none';
      if (successEl) successEl.style.display = 'block';

      const headerTabs = document.querySelector('.wizard-steps-header');
      if (headerTabs) headerTabs.style.display = 'none';

      const refEl = document.getElementById('success-ref-code');
      if (refEl) refEl.textContent = booking.refCode;

      const doc = DOCTORS.find(d => d.id === booking.doctorId);
      const docName = doc ? (lang === 'ar' ? doc.nameAr : doc.nameEn) : '';
      const type = CONSULTATION_TYPES.find(c => c.id === booking.consultationType);
      const typeName = type ? (lang === 'ar' ? type.nameAr : type.nameEn) : '';

      const waMsg = lang === 'ar'
        ? `مرحباً نبض للرعاية الطبية، قمت بطلب موعد برقم مرجعي ${booking.refCode}%0Aالمريض: ${booking.patientName}%0Aالطبيب: ${docName}%0Aالنوع: ${typeName}%0Aالتاريخ: ${booking.date} الساعة ${booking.timeSlot}`
        : `Hello Nabd Care, I submitted an appointment request with code ${booking.refCode}%0APatient: ${booking.patientName}%0ADoctor: ${docName}%0AMode: ${typeName}%0ADate: ${booking.date} at ${booking.timeSlot}`;

      const waBtn = document.getElementById('success-whatsapp-btn');
      if (waBtn) {
        waBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}`;
      }
    }

    function goToStep(stepNum) {
      bookingState.currentStep = stepNum;
      stepsTabs.forEach((tab, i) => {
        tab.classList.toggle('active', i + 1 === stepNum);
        tab.classList.toggle('completed', i + 1 < stepNum);
      });

      if (step1El) step1El.style.display = stepNum === 1 ? 'block' : 'none';
      if (step2El) step2El.style.display = stepNum === 2 ? 'block' : 'none';
      if (step3El) step3El.style.display = stepNum === 3 ? 'block' : 'none';
      if (step4El) step4El.style.display = stepNum === 4 ? 'block' : 'none';
      if (successEl) successEl.style.display = 'none';

      window.scrollTo({ top: wizardEl.offsetTop - 80, behavior: 'smooth' });
    }

    goToStep(1);
  }

  // ==========================================================================
  // صفحة النصائح والمدونة ومودال المقالات (blog.html)
  // ==========================================================================
  function initBlogPage() {
    const grid = document.getElementById('articles-grid');
    if (!grid) return;
    const lang = getLang();

    grid.innerHTML = ARTICLES.map(art => {
      const title = lang === 'ar' ? art.titleAr : art.titleEn;
      const excerpt = lang === 'ar' ? art.excerptAr : art.excerptEn;
      const category = lang === 'ar' ? art.categoryAr : art.categoryEn;
      const date = lang === 'ar' ? art.dateAr : art.dateEn;
      const readTime = lang === 'ar' ? art.readTimeAr : art.readTimeEn;

      return `
        <article class="article-card" data-art-id="${art.id}">
          <div class="article-img-wrap">
            <img src="${art.image}" alt="${title}" loading="lazy" onerror="window.handleImageError(this)">
            <span class="article-category-badge">${category}</span>
          </div>
          <div class="article-body">
            <div class="article-meta">
              <span>${ICONS.clock} ${readTime}</span>
              <span>•</span>
              <span>${date}</span>
            </div>
            <h3 class="article-title">${title}</h3>
            <p class="article-excerpt">${excerpt}</p>
            <button type="button" class="btn btn-outline btn-sm open-article-btn" style="margin-top:auto;">
              <span>${t('blogPage.readArticle')}</span>
              ${ICONS.arrowRight}
            </button>
          </div>
        </article>
      `;
    }).join('');

    let modal = document.getElementById('article-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'article-modal';
      modal.className = 'article-modal';
      modal.innerHTML = `
        <div class="article-modal-dialog">
          <button type="button" class="article-modal-close" id="article-modal-close-btn">${ICONS.close}</button>
          <span class="badge-tag" id="art-modal-cat"></span>
          <h2 class="section-title" id="art-modal-title" style="margin-top:8px;"></h2>
          <div class="article-meta" id="art-modal-meta" style="margin-bottom:20px;"></div>
          <div class="article-modal-body" id="art-modal-content"></div>
          <div class="article-takeaways-card" id="art-modal-takeaways"></div>
        </div>
      `;
      document.body.appendChild(modal);

      const closeBtn = document.getElementById('article-modal-close-btn');
      closeBtn.addEventListener('click', () => modal.classList.remove('open'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    }

    grid.querySelectorAll('.article-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-art-id');
        const art = ARTICLES.find(a => a.id === id);
        if (!art) return;

        const catEl = document.getElementById('art-modal-cat');
        const titleEl = document.getElementById('art-modal-title');
        const metaEl = document.getElementById('art-modal-meta');
        const contentEl = document.getElementById('art-modal-content');
        const takeawaysEl = document.getElementById('art-modal-takeaways');

        catEl.textContent = lang === 'ar' ? art.categoryAr : art.categoryEn;
        titleEl.textContent = lang === 'ar' ? art.titleAr : art.titleEn;
        metaEl.textContent = `${lang === 'ar' ? art.dateAr : art.dateEn} • ${lang === 'ar' ? art.readTimeAr : art.readTimeEn}`;

        const paragraphs = lang === 'ar' ? art.contentAr : art.contentEn;
        contentEl.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');

        const takeaways = lang === 'ar' ? art.takeawaysAr : art.takeawaysEn;
        takeawaysEl.innerHTML = `
          <h4 class="takeaways-title">${ICONS.check} ${t('blogPage.keyTakeaways')}</h4>
          <ul style="list-style:disc;padding-inline-start:20px;display:flex;flex-direction:column;gap:8px;">
            ${takeaways.map(tk => `<li>${tk}</li>`).join('')}
          </ul>
        `;

        modal.classList.add('open');
      });
    });
  }

  // ==========================================================================
  // صفحة الأسئلة الشائعة الأكورديون (faq.html)
  // ==========================================================================
  function initFaqPage() {
    const list = document.getElementById('faq-accordion-list');
    if (!list) return;
    const lang = getLang();

    list.innerHTML = FAQS.map((faq, idx) => {
      const q = lang === 'ar' ? faq.qAr : faq.qEn;
      const a = lang === 'ar' ? faq.aAr : faq.aEn;
      const cat = lang === 'ar' ? faq.categoryAr : faq.categoryEn;

      return `
        <div class="faq-item ${idx === 0 ? 'open' : ''}" data-faq-id="${faq.id}">
          <button type="button" class="faq-question-btn" aria-expanded="${idx === 0 ? 'true' : 'false'}">
            <span>
              <span style="font-size:0.75rem;font-weight:800;color:var(--teal);display:block;margin-bottom:2px;">${cat}</span>
              ${q}
            </span>
            <span class="faq-chevron">${ICONS.chevronDown}</span>
          </button>
          <div class="faq-answer" style="${idx === 0 ? 'max-height:300px;' : ''}">
            <div class="faq-answer-inner">
              <p>${a}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');

    list.querySelectorAll('.faq-item').forEach(item => {
      const btn = item.querySelector('.faq-question-btn');
      const answer = item.querySelector('.faq-answer');

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        list.querySelectorAll('.faq-item').forEach(other => {
          other.classList.remove('open');
          const ans = other.querySelector('.faq-answer');
          if (ans) ans.style.maxHeight = null;
          const b = other.querySelector('.faq-question-btn');
          if (b) b.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  // ==========================================================================
  // صفحة اتصل بنا (contact.html)
  // ==========================================================================
  function initContactPage() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    const lang = getLang();

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const name = form.querySelector('[name="name"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();

      if (!name || name.length < 3) {
        alert(t('bookingPage.validationErrors.nameRequired'));
        return;
      }
      if (!phone) {
        alert(t('bookingPage.validationErrors.phoneInvalid'));
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = t('contactPage.formSending');
      }

      const payload = { name, phone, email, message, date: new Date().toISOString() };

      try {
        if (CONFIG.formspreeContactEndpoint && !CONFIG.formspreeContactEndpoint.includes('your_form_id')) {
          await fetch(CONFIG.formspreeContactEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
          });
        }
      } catch (err) {}

      alert(t('contactPage.formSuccess'));
      form.reset();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = t('contactPage.formSubmit');
      }
    });
  }

  // ==========================================================================
  // صفحة التخصصات الكاملة (specialties.html)
  // ==========================================================================
  function renderAllSpecialtiesPage() {
    const container = document.getElementById('all-specialties-container');
    if (!container) return;
    const lang = getLang();

    container.innerHTML = SPECIALTIES.map(spec => {
      const name = lang === 'ar' ? spec.nameAr : spec.nameEn;
      const longDesc = lang === 'ar' ? spec.longDescAr : spec.longDescEn;
      const conditions = lang === 'ar' ? spec.conditionsAr : spec.conditionsEn;
      const services = lang === 'ar' ? spec.servicesAr : spec.servicesEn;
      const icon = ICONS[spec.icon] || ICONS.internal;

      return `
        <div class="detail-section-card" id="spec-${spec.id}" style="margin-bottom:36px;">
          <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;flex-wrap:wrap;">
            <div class="specialty-icon-box" style="margin-bottom:0;">
              ${icon}
            </div>
            <div>
              <span class="badge-tag" style="margin-bottom:4px;">${spec.doctorCount} ${t('specialtiesSection.doctorsCount')}</span>
              <h2 style="font-size:1.55rem;font-weight:800;color:var(--navy);">${name}</h2>
            </div>
          </div>
          <p style="font-size:1.02rem;line-height:1.8;color:var(--text);margin-bottom:24px;">${longDesc}</p>
          
          <div class="specialty-detail-columns">
            <div style="background-color:var(--light);padding:20px;border-radius:var(--radius-md);border:1px solid var(--border-light);">
              <h4 style="font-weight:800;color:var(--navy);margin-bottom:12px;">${lang === 'ar' ? 'الحالات الشائعة التي نعالجها:' : 'Common Conditions Treated:'}</h4>
              <ul style="display:flex;flex-direction:column;gap:8px;font-size:0.92rem;color:var(--text);">
                ${conditions.map(c => `<li>• ${c}</li>`).join('')}
              </ul>
            </div>
            <div style="background-color:var(--mint-light);padding:20px;border-radius:var(--radius-md);border:1px solid rgba(14,138,138,0.2);">
              <h4 style="font-weight:800;color:var(--teal-dark);margin-bottom:12px;">${lang === 'ar' ? 'الخدمات والفحوصات المتاحة:' : 'Clinical Services & Diagnostic Tests:'}</h4>
              <ul style="display:flex;flex-direction:column;gap:8px;font-size:0.92rem;color:var(--text);">
                ${services.map(s => `<li>${ICONS.check} ${s}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:20px;">
            <a href="./doctors.html?specialty=${spec.id}" class="btn btn-outline">
              ${t('specialtiesSection.viewDoctors')}
            </a>
            <a href="./booking.html?specialty=${spec.id}" class="btn btn-primary">
              ${ICONS.calendar} ${t('common.bookNow')}
            </a>
          </div>
        </div>
      `;
    }).join('');
  }

  function reRenderActivePage() {
    renderFeaturedSpecialties();
    renderFeaturedDoctors();
    renderConsultationModes();
    renderFacilitiesGallery();
    renderTestimonials();
    initQuickBookingBar();
    initDoctorsPage();
    initDoctorDetailsPage();
    initBookingPage();
    initBlogPage();
    initFaqPage();
    renderAllSpecialtiesPage();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getLang();
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    renderHeader();
    renderFooter();
    applyLanguage(currentLang);

    initHeroSlider();
    initCountUp();
  });

})();
