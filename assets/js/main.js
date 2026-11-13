/**
 * PRAGYAN OLYMPIAD ACADEMY — INTERACTIVE MASTER SCRIPT
 * Handles Sticky Nav, Mega Menu, Mobile Drawer, Accordions, Tab Switchers,
 * Sample Quizzes, Practice Test Engine, Calendar, and Form Validations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. THEME & RTL MANAGEMENT (100% Working, Persisted in localStorage)
  const root = document.documentElement;

  const moonIconSvg = '<svg class="theme-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  const sunIconSvg = '<svg class="theme-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

  function syncThemeUi() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.innerHTML = isDark ? sunIconSvg : moonIconSvg;
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      btn.setAttribute('title', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    });
  }

  function syncRtlUi() {
    const isRtl = root.getAttribute('dir') === 'rtl';
    document.querySelectorAll('.rtl-toggle').forEach(btn => {
      if (isRtl) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        btn.setAttribute('title', 'Switch to Left-to-Right (LTR)');
      } else {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('title', 'Switch to Right-to-Left (RTL)');
      }
    });
  }

  syncThemeUi();
  syncRtlUi();

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('pragyan_theme', next); } catch (err) {}
      syncThemeUi();
    });
  });

  document.querySelectorAll('.rtl-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = root.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
      const next = current === 'rtl' ? 'ltr' : 'rtl';
      root.setAttribute('dir', next);
      try { localStorage.setItem('pragyan_dir', next); } catch (err) {}
      syncRtlUi();
    });
  });

  // 1. STICKY HEADER & SCROLL BEHAVIOR
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    });
  }

  // 1.1 DROP TO TOP (SCROLL TO TOP) BUTTON WITH HOVER EFFECT
  let backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) {
    backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTopBtn';
    backToTopBtn.className = 'back-to-top-btn';
    backToTopBtn.setAttribute('type', 'button');
    backToTopBtn.setAttribute('aria-label', 'Scroll to top');
    backToTopBtn.setAttribute('title', 'Drop to top');
    backToTopBtn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `;
    document.body.appendChild(backToTopBtn);
  }

  function handleBackToTopScroll() {
    if (window.scrollY > 250) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', handleBackToTopScroll, { passive: true });
  handleBackToTopScroll();

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 2. MEGA MENU TOGGLE (DESKTOP)
  const megaItems = document.querySelectorAll('.has-mega');
  megaItems.forEach(item => {
    const trigger = item.querySelector('.mega-trigger');
    if (!trigger) return;

    // Click support
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = item.classList.contains('is-open');
      megaItems.forEach(i => i.classList.remove('is-open'));
      if (!isOpen) {
        item.classList.add('is-open');
      }
    });

    // Hover support
    item.addEventListener('mouseenter', () => item.classList.add('is-open'));
    item.addEventListener('mouseleave', () => item.classList.remove('is-open'));
  });

  // Close mega menu on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-mega')) {
      megaItems.forEach(i => i.classList.remove('is-open'));
    }
  });

  // 3. MOBILE DRAWER NAVIGATION
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerBackdrop = document.querySelector('.mobile-drawer-backdrop');
  const drawerClose = document.querySelector('.drawer-close');

  const openDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.add('is-open');
    if (drawerBackdrop) drawerBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.remove('is-open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // Mobile submenu accordion
  const drawerSubmenuTriggers = document.querySelectorAll('.drawer-submenu-trigger');
  drawerSubmenuTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSubmenu = btn.nextElementSibling;
      if (targetSubmenu && targetSubmenu.classList.contains('drawer-submenu')) {
        targetSubmenu.classList.toggle('is-open');
        const icon = btn.querySelector('.drawer-chevron');
        if (icon) {
          icon.style.transform = targetSubmenu.classList.contains('is-open') ? 'rotate(180deg)' : '';
        }
      }
    });
  });

  // 4. ACCORDION (FAQs, Curriculums, Frameworks)
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      // Optional single-open pattern:
      const parent = item.closest('.accordion');
      if (parent && parent.dataset.single === 'true') {
        parent.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('is-open'));
      }
      if (!isOpen) {
        item.classList.add('is-open');
      } else {
        item.classList.remove('is-open');
      }
    });
  });

  // 5. TESTIMONIAL SWITCHER (Home Page 1)
  const testimonialTabs = document.querySelectorAll('.testimonial-tab');
  const spotlightQuote = document.getElementById('spotlightQuote');
  const spotlightAuthor = document.getElementById('spotlightAuthor');
  const spotlightMeta = document.getElementById('spotlightMeta');

  if (testimonialTabs.length && spotlightQuote) {
    testimonialTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        testimonialTabs.forEach(t => t.classList.remove('is-active'));
        tab.classList.add('is-active');

        const quote = tab.dataset.quote;
        const author = tab.dataset.author;
        const meta = tab.dataset.meta;

        spotlightQuote.style.opacity = '0';
        setTimeout(() => {
          if (quote) spotlightQuote.textContent = quote;
          if (author) spotlightAuthor.textContent = author;
          if (spotlightMeta && meta) spotlightMeta.textContent = meta;
          spotlightQuote.style.opacity = '1';
        }, 160);
      });
    });
  }

  // 6. HOME PAGE 2 PROGRESS STAGE TABS
  const stageBtns = document.querySelectorAll('.progress-stage-btn');
  const stageHeading = document.getElementById('stageHeading');
  const stageText = document.getElementById('stageText');
  const stageMetric = document.getElementById('stageMetric');

  if (stageBtns.length && stageHeading) {
    stageBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        stageBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        if (stageHeading && btn.dataset.heading) stageHeading.textContent = btn.dataset.heading;
        if (stageText && btn.dataset.text) stageText.textContent = btn.dataset.text;
        if (stageMetric && btn.dataset.metric) stageMetric.textContent = btn.dataset.metric;
      });
    });
  }

  // 7. GRADE-WISE INTERACTIVE SELECTOR (grades.html)
  const gradePills = document.querySelectorAll('.grade-pill-btn');
  const stageCards = document.querySelectorAll('.grade-stage-panel');

  if (gradePills.length && stageCards.length) {
    gradePills.forEach(pill => {
      pill.addEventListener('click', () => {
        gradePills.forEach(p => p.classList.remove('is-active'));
        pill.classList.add('is-active');

        const selectedStage = pill.dataset.stage;
        stageCards.forEach(panel => {
          if (panel.id === selectedStage) {
            panel.style.display = 'block';
            panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          } else {
            panel.style.display = 'none';
          }
        });
      });
    });
  }

  // 8. INTERACTIVE QUIZ CARDS (Subject detail pages)
  const quizBoxes = document.querySelectorAll('.sample-quiz-box');
  quizBoxes.forEach(box => {
    const buttons = box.querySelectorAll('.quiz-opt-btn');
    const feedback = box.querySelector('.quiz-feedback');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => {
          b.classList.remove('is-correct', 'is-wrong');
          b.disabled = true;
        });

        const isCorrect = btn.dataset.correct === 'true';
        if (isCorrect) {
          btn.classList.add('is-correct');
          if (feedback) {
            feedback.innerHTML = `<strong>Correct!</strong> ${feedback.dataset.explanation || 'Excellent reasoning. The mathematical identity or scientific principle applies directly here.'}`;
            feedback.className = 'quiz-feedback is-visible form-status is-success';
          }
        } else {
          btn.classList.add('is-wrong');
          // Highlight correct one
          buttons.forEach(b => {
            if (b.dataset.correct === 'true') b.classList.add('is-correct');
          });
          if (feedback) {
            feedback.innerHTML = `<strong>Incorrect.</strong> ${feedback.dataset.explanation || 'Notice how the problem requires breaking down the core Olympiad pattern step-by-step.'}`;
            feedback.className = 'quiz-feedback is-visible form-status is-error';
          }
        }
      });
    });
  });

  // 9. STUDY RESOURCES FILTERING (resources.html)
  const resourceFilterBtns = document.querySelectorAll('.resource-filter-btn');
  const resourceCards = document.querySelectorAll('.resource-item-card');

  if (resourceFilterBtns.length && resourceCards.length) {
    resourceFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        resourceFilterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const subject = btn.dataset.subject;
        resourceCards.forEach(card => {
          if (subject === 'all' || card.dataset.subject === subject) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 10. CLIENT-SIDE FORM VALIDATION (contact.html, login.html, register.html)
  const validatedForms = document.querySelectorAll('form[data-validate="true"]');
  validatedForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      const statusBox = form.querySelector('.form-status');

      // Clear previous error states
      form.querySelectorAll('.form-control').forEach(input => {
        input.classList.remove('is-invalid');
        const errSpan = form.querySelector(`#err-${input.name}`);
        if (errSpan) errSpan.textContent = '';
      });

      // Required field check
      form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('is-invalid');
          const errSpan = form.querySelector(`#err-${field.name}`);
          if (errSpan) errSpan.textContent = 'This field is required.';
        } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          isValid = false;
          field.classList.add('is-invalid');
          const errSpan = form.querySelector(`#err-${field.name}`);
          if (errSpan) errSpan.textContent = 'Enter a valid email address.';
        } else if (field.name === 'mobile' && !/^\d{10}$/.test(field.value.replace(/[^0-9]/g, ''))) {
          isValid = false;
          field.classList.add('is-invalid');
          const errSpan = form.querySelector(`#err-${field.name}`);
          if (errSpan) errSpan.textContent = 'Enter a 10-digit mobile number.';
        }
      });

      // Password matching on registration
      const pass = form.querySelector('input[name="password"]');
      const confirmPass = form.querySelector('input[name="confirmPassword"]');
      if (pass && confirmPass && pass.value !== confirmPass.value) {
        isValid = false;
        confirmPass.classList.add('is-invalid');
        const errSpan = form.querySelector('#err-confirmPassword');
        if (errSpan) errSpan.textContent = 'Passwords do not match.';
      }

      if (isValid) {
        if (statusBox) {
          statusBox.className = 'form-status is-success';
          const successMsg = form.dataset.successMsg || 'Your submission has been recorded successfully. Our academic counseling team will contact you shortly.';
          statusBox.textContent = successMsg;
        }

        // Redirect simulation for login/register
        if (form.id === 'loginForm') {
          setTimeout(() => {
            window.location.href = 'dashboard.html';
          }, 800);
        } else if (form.id === 'registerForm') {
          setTimeout(() => {
            window.location.href = 'dashboard.html';
          }, 1000);
        } else {
          form.reset();
        }
      } else {
        if (statusBox) {
          statusBox.className = 'form-status is-error';
          statusBox.textContent = 'Please fill out all required fields properly.';
        }
      }
    });
  });

  // Password visibility toggle
  const passToggles = document.querySelectorAll('.password-toggle');
  passToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const input = toggle.parentElement.querySelector('input');
      if (input) {
        if (input.type === 'password') {
          input.type = 'text';
          toggle.textContent = 'Hide';
        } else {
          input.type = 'password';
          toggle.textContent = 'Show';
        }
      }
    });
  });

  // 11. PRACTICE TEST ENGINE (practice-tests.html)
  const examContainer = document.getElementById('practiceExamApp');
  if (examContainer) {
    initPracticeExamApp();
  }

  // 12. INTERACTIVE CALENDAR (schedule.html)
  const scheduleCalendar = document.getElementById('scheduleCalendarApp');
  if (scheduleCalendar) {
    initScheduleCalendar();
  }

  // 13. DASHBOARD FILTERING (dashboard.html & performance.html)
  const dashboardSubjectFilter = document.getElementById('dashboardSubjectFilter');
  if (dashboardSubjectFilter) {
    dashboardSubjectFilter.addEventListener('change', (e) => {
      const val = e.target.value;
      const perfCards = document.querySelectorAll('.subject-kpi-card');
      perfCards.forEach(c => {
        if (val === 'all' || c.dataset.subject === val) {
          c.style.display = 'block';
        } else {
          c.style.display = 'none';
        }
      });
    });
  }

  // Mobile portal sidebar toggle
  const portalToggle = document.querySelector('.portal-sidebar-toggle');
  const portalSidebar = document.querySelector('.portal-sidebar');
  if (portalToggle && portalSidebar) {
    portalToggle.addEventListener('click', () => {
      portalSidebar.classList.toggle('is-open');
    });
  }

  // Dashboard In-Page Tab Switching (Exposed globally on window)
  window.switchDashboardTab = function(targetTabId) {
    if (!targetTabId) return;
    const cleanId = String(targetTabId).replace('#', '').replace('tab-', '').trim();
    const targetSection = document.getElementById('tab-' + cleanId);
    if (!targetSection) return;

    const portalNavLinks = document.querySelectorAll('.portal-nav-link[data-tab]');
    const portalTabContents = document.querySelectorAll('.portal-tab-content');
    const sidebar = document.querySelector('.portal-sidebar');

    // Update active nav link
    portalNavLinks.forEach(link => {
      if (link.getAttribute('data-tab') === cleanId) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });

    // Update tab visibility
    portalTabContents.forEach(section => {
      section.classList.remove('is-active');
    });
    targetSection.classList.add('is-active');

    // Close mobile sidebar if open
    if (sidebar) {
      sidebar.classList.remove('is-open');
    }

    try {
      if (history.pushState) {
        history.pushState(null, null, '#' + cleanId);
      } else {
        location.hash = cleanId;
      }
    } catch (err) {}

    // Smooth scroll to top of portal main content
    const mainEl = document.querySelector('.portal-main');
    if (mainEl && window.innerWidth <= 991) {
      mainEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const portalNavLinks = document.querySelectorAll('.portal-nav-link[data-tab]');
  if (portalNavLinks.length > 0) {
    portalNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.getAttribute('data-tab');
        window.switchDashboardTab(tab);
      });
    });

    // Support any in-page buttons that trigger a tab switch (e.g. data-tab-target="practice-tests")
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-tab-target]');
      if (btn) {
        e.preventDefault();
        const target = btn.getAttribute('data-tab-target');
        window.switchDashboardTab(target);
      }
    });

    // Check URL hash on initial load
    const initialHash = window.location.hash.replace('#', '').replace('tab-', '');
    if (initialHash && document.getElementById('tab-' + initialHash)) {
      window.switchDashboardTab(initialHash);
    }
  }

  // Modern 3D Coverflow Card Slider (Home 2 Classroom Section)
  initClassroomSlider();
});

/**
 * Modern 3D Coverflow Card Slider Controller
 */
function initClassroomSlider() {
  const stage = document.getElementById('classroomCardSlider');
  if (!stage) return;
  const cards = Array.from(stage.querySelectorAll('.slider-card'));
  const dots = Array.from(document.querySelectorAll('#classroomSliderDots .slider-dot'));
  const prevBtn = document.querySelector('.slider-prev-btn');
  const nextBtn = document.querySelector('.slider-next-btn');
  if (!cards.length) return;

  let activeIndex = 0;
  const total = cards.length;

  function updateSlider() {
    const isMobile = window.innerWidth < 768;

    cards.forEach((card, i) => {
      let offset = i - activeIndex;
      // Circular wrap around for smooth infinite coverflow
      if (offset < -Math.floor(total / 2)) offset += total;
      if (offset > Math.floor(total / 2)) offset -= total;

      card.classList.remove('active', 'card-left-1', 'card-left-2', 'card-right-1', 'card-right-2');

      if (offset === 0) {
        card.classList.add('active');
        card.style.transform = 'translateX(0) scale(1.06) rotateY(0deg)';
        card.style.zIndex = '12';
        card.style.opacity = '1';
        card.style.filter = 'brightness(1)';
        card.style.border = '5px solid #FFFFFF';
        card.style.boxShadow = '0 20px 48px rgba(0, 0, 0, 0.24)';
        card.style.pointerEvents = 'auto';
      } else if (offset === -1) {
        card.classList.add('card-left-1');
        const tx = isMobile ? '-42%' : '-56%';
        card.style.transform = `translateX(${tx}) scale(0.88) rotateY(15deg)`;
        card.style.zIndex = '7';
        card.style.opacity = isMobile ? '0.6' : '0.86';
        card.style.filter = 'brightness(0.92)';
        card.style.border = '3px solid rgba(255, 255, 255, 0.85)';
        card.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.16)';
        card.style.pointerEvents = 'auto';
      } else if (offset === 1) {
        card.classList.add('card-right-1');
        const tx = isMobile ? '42%' : '56%';
        card.style.transform = `translateX(${tx}) scale(0.88) rotateY(-15deg)`;
        card.style.zIndex = '7';
        card.style.opacity = isMobile ? '0.6' : '0.86';
        card.style.filter = 'brightness(0.92)';
        card.style.border = '3px solid rgba(255, 255, 255, 0.85)';
        card.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.16)';
        card.style.pointerEvents = 'auto';
      } else if (offset === -2) {
        card.classList.add('card-left-2');
        card.style.transform = 'translateX(-95%) scale(0.72) rotateY(25deg)';
        card.style.zIndex = '2';
        card.style.opacity = isMobile ? '0' : '0.55';
        card.style.filter = 'brightness(0.75)';
        card.style.border = '2px solid rgba(255, 255, 255, 0.6)';
        card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
        card.style.pointerEvents = isMobile ? 'none' : 'auto';
      } else if (offset === 2) {
        card.classList.add('card-right-2');
        card.style.transform = 'translateX(95%) scale(0.72) rotateY(-25deg)';
        card.style.zIndex = '2';
        card.style.opacity = isMobile ? '0' : '0.55';
        card.style.filter = 'brightness(0.75)';
        card.style.border = '2px solid rgba(255, 255, 255, 0.6)';
        card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
        card.style.pointerEvents = isMobile ? 'none' : 'auto';
      } else {
        card.style.transform = 'translateX(0) scale(0.5)';
        card.style.zIndex = '0';
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
      }
    });

    // Sync dots
    dots.forEach((dot, idx) => {
      dot.classList.toggle('is-active', idx === activeIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % total;
      updateSlider();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + total) % total;
      updateSlider();
    });
  }

  cards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      if (activeIndex !== idx) {
        activeIndex = idx;
        updateSlider();
      }
    });
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      activeIndex = idx;
      updateSlider();
    });
  });

  // Touch Swipe support
  let touchStartX = 0;
  stage.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  stage.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        activeIndex = (activeIndex - 1 + total) % total;
      } else {
        activeIndex = (activeIndex + 1) % total;
      }
      updateSlider();
    }
  }, { passive: true });

  window.addEventListener('resize', updateSlider);
  updateSlider();
}

/**
 * Full Practice Test Engine for practice-tests.html
 */
function initPracticeExamApp() {
  const questions = [
    {
      id: 1,
      subject: 'Mathematics',
      question: 'In a triangle ABC, the bisector of angle A meets BC at D. If AB = 8 cm, AC = 12 cm, and BC = 10 cm, find the length of segment BD.',
      options: ['4.0 cm', '4.5 cm', '5.0 cm', '6.0 cm'],
      correct: 0,
      explanation: 'By the Angle Bisector Theorem, BD/DC = AB/AC = 8/12 = 2/3. Since BD + DC = 10, BD = (2/5) * 10 = 4.0 cm.'
    },
    {
      id: 2,
      subject: 'Mathematics',
      question: 'What is the remainder when 3^(2024) + 5 is divided by 8?',
      options: ['2', '4', '6', '7'],
      correct: 2,
      explanation: '3^2 = 9 ≡ 1 (mod 8). Hence (3^2)^1012 = 3^2024 ≡ 1^1012 ≡ 1 (mod 8). Adding 5 gives 1 + 5 = 6 (mod 8).'
    },
    {
      id: 3,
      subject: 'Science',
      question: 'A body is projected vertically upwards with velocity u. It passes through a certain point P at height h after t1 and t2 seconds respectively. The total time of flight is:',
      options: ['t1 + t2', 't2 - t1', 'sqrt(t1 * t2)', '2 * (t1 + t2)'],
      correct: 0,
      explanation: 'The height equation is h = ut - 0.5gt^2, i.e., 0.5gt^2 - ut + h = 0. The sum of the roots is t1 + t2 = u / (0.5g) = 2u/g, which equals the total time of flight T.'
    },
    {
      id: 4,
      subject: 'Logical Reasoning',
      question: 'Find the missing number in the series: 3, 11, 38, 102, 227, ?',
      options: ['443', '425', '412', '458'],
      correct: 0,
      explanation: 'Differences: 11 - 3 = 8 (2^3), 38 - 11 = 27 (3^3), 102 - 38 = 64 (4^3), 227 - 102 = 125 (5^3). Next difference is 6^3 = 216. 227 + 216 = 443.'
    },
    {
      id: 5,
      subject: 'English',
      question: 'Select the word that is nearest in meaning to "PERSPICACIOUS":',
      options: ['Astute and perceptive', 'Reluctant to speak', 'Excessively generous', 'Fragile in structure'],
      correct: 0,
      explanation: '"Perspicacious" means having a ready insight into and understanding of things; astute and keenly perceptive.'
    },
    {
      id: 6,
      subject: 'Science',
      question: 'Which of the following compounds exhibits both ionic and covalent bonding?',
      options: ['Ammonium Chloride (NH4Cl)', 'Methane (CH4)', 'Sodium Chloride (NaCl)', 'Carbon Tetrachloride (CCl4)'],
      correct: 0,
      explanation: 'In NH4Cl, covalent and coordinate bonds exist within the ammonium ion (NH4+), while electrostatic ionic attraction binds NH4+ and Cl-.'
    }
  ];

  let currentIndex = 0;
  const userAnswers = {};
  const markedForReview = new Set();
  let timeRemaining = 1200; // 20 minutes in seconds

  const timerDisplay = document.getElementById('examTimer');
  const qSubject = document.getElementById('examQSubject');
  const qIndexText = document.getElementById('examQIndex');
  const qText = document.getElementById('examQText');
  const optionsContainer = document.getElementById('examOptionsList');
  const paletteContainer = document.getElementById('examPalette');
  const btnPrev = document.getElementById('examPrev');
  const btnNext = document.getElementById('examNext');
  const btnReview = document.getElementById('examReview');
  const btnSubmit = document.getElementById('examSubmit');
  const resultModal = document.getElementById('examResultModal');

  // Render question palette
  function renderPalette() {
    if (!paletteContainer) return;
    paletteContainer.innerHTML = '';
    questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'q-num-btn';
      btn.textContent = idx + 1;
      if (idx === currentIndex) btn.classList.add('is-current');
      if (userAnswers[idx] !== undefined) btn.classList.add('is-answered');
      if (markedForReview.has(idx)) btn.classList.add('is-review');

      btn.addEventListener('click', () => {
        currentIndex = idx;
        loadQuestion(currentIndex);
      });
      paletteContainer.appendChild(btn);
    });
  }

  // Load single question
  function loadQuestion(idx) {
    const q = questions[idx];
    if (!q) return;

    if (qSubject) qSubject.textContent = q.subject;
    if (qIndexText) qIndexText.textContent = `Question ${idx + 1} of ${questions.length}`;
    if (qText) qText.textContent = q.question;

    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      q.options.forEach((opt, optIdx) => {
        const label = document.createElement('label');
        label.className = 'exam-option-label';
        if (userAnswers[idx] === optIdx) label.classList.add('is-selected');

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `exam_opt_${idx}`;
        radio.value = optIdx;
        radio.checked = userAnswers[idx] === optIdx;

        radio.addEventListener('change', () => {
          userAnswers[idx] = optIdx;
          renderPalette();
          loadQuestion(idx);
        });

        label.appendChild(radio);
        const textSpan = document.createElement('span');
        textSpan.textContent = `(${String.fromCharCode(65 + optIdx)})  ${opt}`;
        label.appendChild(textSpan);

        optionsContainer.appendChild(label);
      });
    }

    if (btnPrev) btnPrev.disabled = idx === 0;
    if (btnNext) {
      if (idx === questions.length - 1) {
        btnNext.textContent = 'Review All';
      } else {
        btnNext.textContent = 'Next Question →';
      }
    }

    renderPalette();
  }

  // Prev / Next actions
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        loadQuestion(currentIndex);
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion(currentIndex);
      } else {
        renderPalette();
      }
    });
  }

  // Mark for review
  if (btnReview) {
    btnReview.addEventListener('click', () => {
      if (markedForReview.has(currentIndex)) {
        markedForReview.delete(currentIndex);
      } else {
        markedForReview.add(currentIndex);
      }
      renderPalette();
    });
  }

  // Timer countdown
  const timerInterval = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      submitExam();
      return;
    }
    timeRemaining--;
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    if (timerDisplay) {
      timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  }, 1000);

  // Submit test and calculate score
  function submitExam() {
    clearInterval(timerInterval);
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    questions.forEach((q, idx) => {
      if (userAnswers[idx] === undefined) {
        unansweredCount++;
      } else if (userAnswers[idx] === q.correct) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    const total = questions.length;
    const scorePct = Math.round((correctCount / total) * 100);
    const timeSpent = 1200 - timeRemaining;
    const spentMins = Math.floor(timeSpent / 60);
    const spentSecs = timeSpent % 60;

    // Populate result modal
    const resScore = document.getElementById('resScorePct');
    const resCorrect = document.getElementById('resCorrect');
    const resIncorrect = document.getElementById('resIncorrect');
    const resUnanswered = document.getElementById('resUnanswered');
    const resTime = document.getElementById('resTimeSpent');
    const resList = document.getElementById('resDetailedAnalysis');

    if (resScore) resScore.textContent = `${scorePct}%`;
    if (resCorrect) resCorrect.textContent = correctCount;
    if (resIncorrect) resIncorrect.textContent = incorrectCount;
    if (resUnanswered) resUnanswered.textContent = unansweredCount;
    if (resTime) resTime.textContent = `${spentMins}m ${spentSecs}s`;

    if (resList) {
      resList.innerHTML = '';
      questions.forEach((q, idx) => {
        const item = document.createElement('div');
        item.style.padding = '12px 14px';
        item.style.marginBottom = '8px';
        item.style.borderRadius = '6px';
        item.style.border = '1px solid #ECECEC';

        const isCorr = userAnswers[idx] === q.correct;
        const userChoice = userAnswers[idx] !== undefined ? `(${String.fromCharCode(65 + userAnswers[idx])})` : 'Unanswered';
        const correctChoice = `(${String.fromCharCode(65 + q.correct)})`;

        item.style.backgroundColor = isCorr ? 'rgba(31,138,76,0.06)' : 'rgba(201,59,43,0.06)';
        item.innerHTML = `
          <div style="font-size:0.88rem; font-weight:700; margin-bottom:4px;">Q${idx + 1}: ${q.question}</div>
          <div style="font-size:0.82rem; color: #525252;">Your answer: <strong>${userChoice}</strong> | Correct: <strong style="color:var(--success);">${correctChoice}</strong></div>
          <div style="font-size:0.79rem; margin-top:4px; color:#242424;"><em>Analysis:</em> ${q.explanation}</div>
        `;
        resList.appendChild(item);
      });
    }

    if (resultModal) {
      resultModal.classList.add('is-open');
    }
  }

  if (btnSubmit) {
    btnSubmit.addEventListener('click', () => {
      if (confirm('Are you ready to submit your Practice Mock Test for scoring?')) {
        submitExam();
      }
    });
  }

  // Close modal
  const closeModalBtn = document.getElementById('closeResultModal');
  if (closeModalBtn && resultModal) {
    closeModalBtn.addEventListener('click', () => {
      resultModal.classList.remove('is-open');
    });
  }

  // Initial load
  loadQuestion(0);
}

/**
 * Schedule Calendar for schedule.html
 */
function initScheduleCalendar() {
  const scheduleEvents = {
    '2026-11-14': [{ title: 'Math Olympiad Sprint', type: 'class', time: '10:00 AM' }],
    '2026-11-15': [{ title: 'Physics Vectors Mock', type: 'exam', time: '02:00 PM' }],
    '2026-11-18': [{ title: 'Reasoning Doubt Clinic', type: 'class', time: '05:00 PM' }],
    '2026-11-20': [{ title: 'All-India Mock IMO #4', type: 'exam', time: '09:00 AM' }],
    '2026-11-22': [{ title: 'Science Lab Practice', type: 'class', time: '11:00 AM' }],
    '2026-11-25': [{ title: 'English Reading Analysis', type: 'class', time: '04:00 PM' }],
    '2026-11-28': [{ title: 'Diagnostic Assessment', type: 'exam', time: '10:00 AM' }]
  };

  const calBody = document.getElementById('calGridBody');
  const calTitle = document.getElementById('calMonthTitle');
  const eventDetailsBox = document.getElementById('selectedDayEvents');

  if (!calBody) return;

  const currentYear = 2026;
  const currentMonth = 10; // November (0-indexed 10)
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  if (calTitle) calTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  const daysInMonth = 30; // November
  const firstDayIndex = 0; // Nov 1 2026 is Sunday

  calBody.innerHTML = '';

  // Render 30 days
  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = `2026-11-${day.toString().padStart(2, '0')}`;
    const cell = document.createElement('div');
    cell.className = 'cal-cell';
    if (day === 12) cell.classList.add('is-selected'); // Today

    const numSpan = document.createElement('span');
    numSpan.style.fontWeight = '700';
    numSpan.textContent = day;
    cell.appendChild(numSpan);

    const events = scheduleEvents[dateKey];
    if (events && events.length) {
      events.forEach(ev => {
        const dot = document.createElement('span');
        dot.className = `cal-event-dot ${ev.type === 'exam' ? 'exam' : ''}`;
        dot.textContent = ev.title;
        cell.appendChild(dot);
      });
    }

    cell.addEventListener('click', () => {
      document.querySelectorAll('.cal-cell').forEach(c => c.classList.remove('is-selected'));
      cell.classList.add('is-selected');

      if (eventDetailsBox) {
        if (events && events.length) {
          eventDetailsBox.innerHTML = `
            <div style="font-family:var(--font-display); font-weight:800; font-size:1.05rem; margin-bottom:10px;">
              Events on November ${day}, 2026
            </div>
            ${events.map(ev => `
              <div style="padding:10px 14px; border-radius:6px; background-color:var(--bg-soft); border-left:3px solid ${ev.type === 'exam' ? 'var(--orange-deep)' : 'var(--black)'}; margin-bottom:8px;">
                <div style="font-weight:700;">${ev.title}</div>
                <div style="font-size:0.8rem; color:var(--text-muted);">${ev.time} | Mode: Offline Interactive Hall</div>
              </div>
            `).join('')}
          `;
        } else {
          eventDetailsBox.innerHTML = `
            <div style="font-family:var(--font-display); font-weight:800; font-size:1.05rem; margin-bottom:10px;">
              November ${day}, 2026
            </div>
            <p style="font-size:0.88rem; color:var(--text-muted);">No scheduled tests or mandatory workshops on this date. Recommended: self-paced practice worksheets.</p>
          `;
        }
      }
    });

    calBody.appendChild(cell);
  }
}

