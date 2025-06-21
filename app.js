

document.addEventListener('DOMContentLoaded', function () {
  // --- ELEMENT SELECTORS ---
  const allSections = document.querySelectorAll('.section');
  const desktopControls = document.querySelectorAll('.control');
  const themeBtn = document.querySelector('.theme-btn');
  
  // --- DYNAMICALLY CREATE & INSERT MOBILE MENU ---
  const mobileMenuHTML = `
    <div class="hamburger-menu" id="hamburgerMenu">
      <div class="hamburger-icon"><span></span><span></span><span></span></div>
    </div>
    <div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
    <div class="mobile-nav" id="mobileNav">
      ${[...desktopControls].map(control => `
        <div class="mobile-nav-item" data-id="${control.dataset.id}">
          <i class="${control.querySelector('i').className}"></i>
          <span>${control.title}</span>
        </div>
      `).join('')}
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', mobileMenuHTML);
  
  // --- MOBILE MENU ELEMENT SELECTORS ---
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

  // --- HELPER: THROTTLE FUNCTION ---
  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // --- MOBILE MENU FUNCTIONALITY ---
  function toggleMobileMenu() {
    hamburgerMenu.classList.toggle('open');
    mobileNav.classList.toggle('show');
    mobileNavOverlay.classList.toggle('show');
    document.body.style.overflow = mobileNav.classList.contains('show') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    hamburgerMenu.classList.remove('open');
    mobileNav.classList.remove('show');
    mobileNavOverlay.classList.remove('show');
    document.body.style.overflow = '';
  }
  
  hamburgerMenu.addEventListener('click', toggleMobileMenu);
  mobileNavOverlay.addEventListener('click', closeMobileMenu);

  // --- SMOOTH SCROLL & ACTIVE STATE LOGIC ---
  function handleNavClick(event) {
    const targetId = event.currentTarget.dataset.id;
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // If it's a mobile nav item, close the menu
      if (event.currentTarget.classList.contains('mobile-nav-item')) {
        closeMobileMenu();
      }
    }
  }

  desktopControls.forEach(btn => btn.addEventListener('click', handleNavClick));
  mobileNavItems.forEach(item => item.addEventListener('click', handleNavClick));
  
  // --- SCROLL-BASED ACTIVE STATE UPDATE ---
  const updateActiveNavOnScroll = throttle(() => {
    let currentSectionId = '';
    
    allSections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSectionId = section.id;
      }
    });

    // Update Desktop Controls
    desktopControls.forEach(btn => {
      btn.classList.remove('active-btn');
      if (btn.dataset.id === currentSectionId) {
        btn.classList.add('active-btn');
      }
    });

    // Update Mobile Nav Items
    mobileNavItems.forEach(item => {
      item.classList.remove('active');
      if (item.dataset.id === currentSectionId) {
        item.classList.add('active');
      }
    });
  }, 150);

  window.addEventListener('scroll', updateActiveNavOnScroll);

  // --- THEME TOGGLE ---
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });

  // --- EMAILJS FORM SUBMISSION ---
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm && formMessage) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      formMessage.textContent = 'Sending...';
      formMessage.className = 'form-message show';

      emailjs.sendForm('service_5aezc4f', 'template_cedjp6g', this)
        .then(() => {
          formMessage.textContent = 'Message sent successfully!';
          formMessage.classList.add('success');
          contactForm.reset();
        }, (error) => {
          formMessage.textContent = 'Failed to send. Please try again.';
          formMessage.classList.add('error');
          console.log('FAILED...', error);
        })
        .finally(() => {
          setTimeout(() => {
            formMessage.classList.remove('show');
          }, 5000);
        });
    });
  }

  // Initial call to set active state on load
  updateActiveNavOnScroll();
});

