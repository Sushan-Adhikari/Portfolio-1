// =================================================================
// SPECTACULAR PORTFOLIO JAVASCRIPT
// Ultra-modern, performance-optimized with unique features
// =================================================================

document.addEventListener('DOMContentLoaded', function() {
  
  // =================================================================
  // PERFORMANCE UTILITIES
  // =================================================================
  
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // =================================================================
  // LOADING SCREEN MANAGEMENT
  // =================================================================
  
  // class LoadingScreen {
  //   constructor() {
  //     this.loadingScreen = document.getElementById('loadingScreen');
  //     this.init();
  //   }

  //   init() {
  //     setTimeout(() => this.hide(), 2000);
  //   }

  //   hide() {
  //     if (this.loadingScreen) {
  //       this.loadingScreen.classList.add('hidden');
  //       setTimeout(() => {
  //         this.loadingScreen.style.display = 'none';
  //       }, 500);
  //     }
  //   }
  // }

  // =================================================================
  // THEME MANAGEMENT
  // =================================================================
  
  class ThemeManager {
    constructor() {
      this.themeToggle = document.getElementById('themeToggle');
      this.body = document.body;
      this.currentTheme = localStorage.getItem('theme') || 'light';
      this.init();
    }

    init() {
      this.setTheme(this.currentTheme);
      this.bindEvents();
    }

    bindEvents() {
      console.log('DEBUG: ThemeManager - value of this.themeToggle before addEventListener:', this.themeToggle);
      if (this.themeToggle) {
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
      }
    }

    setTheme(theme) {
      this.currentTheme = theme;
      this.body.setAttribute('data-theme', theme);
      
      if (theme === 'light') {
        this.body.classList.add('light-mode');
        if (this.themeToggle) {
          this.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
      } else {
        this.body.classList.remove('light-mode');
        if (this.themeToggle) {
          this.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
      }
      
      localStorage.setItem('theme', theme);
    }

    toggleTheme() {
      const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      this.setTheme(newTheme);
    }
  }

  // =================================================================
  // NAVIGATION MANAGEMENT
  // =================================================================
  
  class NavigationManager {
    constructor() {
      this.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
      this.sections = document.querySelectorAll('.section');
      this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
      this.mobileNav = document.getElementById('mobileNav');
      this.mobileNavOverlay = document.getElementById('mobileNavOverlay');
      this.mobileNavClose = document.getElementById('mobileNavClose');
      this.desktopNav = document.querySelector('.desktop-nav');
      this.init();
    }

    init() {
      this.bindEvents();
      this.updateActiveLink();
    }

    bindEvents() {
      // Navigation clicks
      this.navLinks.forEach(link => {
        link.addEventListener('click', (e) => this.handleNavClick(e));
      });

      // Mobile menu controls
      if (this.mobileMenuBtn) {
        this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
      }
      
      if (this.mobileNavClose) {
        this.mobileNavClose.addEventListener('click', () => this.closeMobileMenu());
      }
      
      if (this.mobileNavOverlay) {
        this.mobileNavOverlay.addEventListener('click', () => this.closeMobileMenu());
      }

      // Scroll events
      window.addEventListener('scroll', throttle(() => {
        this.updateActiveLink();
        this.handleNavbarBackground();
      }, 100));

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.closeMobileMenu();
      });
    }

    handleNavClick(e) {
      e.preventDefault();
      
      const targetId = e.currentTarget.getAttribute('data-id') || 
                      e.currentTarget.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        this.scrollToSection(targetSection);
        this.closeMobileMenu();
      }
    }

    scrollToSection(section) {
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    updateActiveLink() {
      let currentSection = '';
      
      this.sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.pageYOffset + 200;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      this.navLinks.forEach(link => {
        link.classList.remove('active');
        const linkTarget = link.getAttribute('data-id') || 
                          link.getAttribute('href').substring(1);
        
        if (linkTarget === currentSection) {
          link.classList.add('active');
        }
      });
    }

    handleNavbarBackground() {
      if (this.desktopNav) {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (window.scrollY > 50) {
          this.desktopNav.style.background = isDark 
            ? 'rgba(24, 24, 27, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
        } else {
          this.desktopNav.style.background = isDark 
            ? 'rgba(24, 24, 27, 0.9)' 
            : 'rgba(255, 255, 255, 0.9)';
        }
      }
    }

    toggleMobileMenu() {
      if (this.mobileNav && this.mobileNavOverlay) {
        const isOpen = this.mobileNav.classList.contains('show');
        if (isOpen) {
          this.closeMobileMenu();
        } else {
          this.openMobileMenu();
        }
      }
    }

    openMobileMenu() {
      this.mobileMenuBtn?.classList.add('active');
      this.mobileNav?.classList.add('show');
      this.mobileNavOverlay?.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    closeMobileMenu() {
      this.mobileMenuBtn?.classList.remove('active');
      this.mobileNav?.classList.remove('show');
      this.mobileNavOverlay?.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  // =================================================================
  // TYPEWRITER EFFECT
  // =================================================================
  
  class TypewriterEffect {
    constructor(element, texts, options = {}) {
      this.element = element;
      this.texts = texts;
      this.options = {
        typeSpeed: options.typeSpeed || 100,
        deleteSpeed: options.deleteSpeed || 50,
        pauseTime: options.pauseTime || 2000,
        ...options
      };
      
      this.currentTextIndex = 0;
      this.currentCharIndex = 0;
      this.isDeleting = false;
      this.init();
    }

    init() {
      if (this.element && this.texts.length > 0) {
        this.type();
      }
    }

    type() {
      const currentText = this.texts[this.currentTextIndex];
      
      if (this.isDeleting) {
        this.currentCharIndex--;
      } else {
        this.currentCharIndex++;
      }

      this.element.textContent = currentText.substring(0, this.currentCharIndex);

      let nextDelay = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;

      if (!this.isDeleting && this.currentCharIndex === currentText.length) {
        nextDelay = this.options.pauseTime;
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      }

      setTimeout(() => this.type(), nextDelay);
    }
  }

  // =================================================================
  // TESTIMONIALS SLIDER
  // =================================================================
  
  class TestimonialsSlider {
    constructor() {
      this.testimonials = document.querySelectorAll('.testimonial-card');
      this.navBtns = document.querySelectorAll('.testimonial-nav-btn');
      this.currentSlide = 0;
      this.autoPlayInterval = null;
      this.init();
    }

    init() {
      if (this.testimonials.length > 0) {
        this.showSlide(0);
        this.bindEvents();
        this.startAutoPlay();
      }
    }

    bindEvents() {
      this.navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          this.showSlide(index);
          this.stopAutoPlay();
          this.startAutoPlay();
        });
      });

      // Pause auto-play on hover
      const slider = document.querySelector('.testimonials-slider');
      if (slider) {
        slider.addEventListener('mouseenter', () => this.stopAutoPlay());
        slider.addEventListener('mouseleave', () => this.startAutoPlay());
      }
    }

    showSlide(index) {
      // Hide all testimonials
      this.testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
      });

      // Remove active class from all nav buttons
      this.navBtns.forEach(btn => {
        btn.classList.remove('active');
      });

      // Show current testimonial and activate nav button
      if (this.testimonials[index]) {
        this.testimonials[index].classList.add('active');
      }

      if (this.navBtns[index]) {
        this.navBtns[index].classList.add('active');
      }

      this.currentSlide = index;
    }

    nextSlide() {
      const nextIndex = (this.currentSlide + 1) % this.testimonials.length;
      this.showSlide(nextIndex);
    }

    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }

    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    }
  }

  // =================================================================
  // SCROLL ANIMATIONS
  // =================================================================
  
  class ScrollAnimations {
    constructor() {
      this.animatedElements = document.querySelectorAll('[data-aos]');
      this.observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      this.init();
    }

    init() {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('aos-animate');
            }
          });
        }, this.observerOptions);

        this.animatedElements.forEach(element => {
          this.observer.observe(element);
        });
      } else {
        // Fallback for older browsers
        this.animatedElements.forEach(element => {
          element.classList.add('aos-animate');
        });
      }
    }
  }

  // =================================================================
  // BACK TO TOP BUTTON
  // =================================================================
  
  class BackToTopButton {
    constructor() {
      this.button = document.getElementById('backToTop');
      this.init();
    }

    init() {
      if (this.button) {
        this.bindEvents();
      }
    }

    bindEvents() {
      this.button.addEventListener('click', () => this.scrollToTop());
      
      window.addEventListener('scroll', throttle(() => {
        this.toggleVisibility();
      }, 100));
    }

    toggleVisibility() {
      if (window.pageYOffset > 300) {
        this.button.classList.add('show');
      } else {
        this.button.classList.remove('show');
      }
    }

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  // =================================================================
  // CONTACT FORM
  // =================================================================
  
  class ContactForm {
    constructor() {
      this.form = document.getElementById('contactForm');
      this.messageDiv = document.getElementById('formMessage');
      this.submitBtn = this.form?.querySelector('button[type="submit"]');
      this.init();
    }

    init() {
      if (this.form) {
        this.bindEvents();
      }
    }

    bindEvents() {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
      e.preventDefault();
      
      if (!this.validateForm()) {
        return;
      }

      this.setLoading(true);
      this.showMessage('Sending message...', 'info');

      try {
        if (typeof emailjs !== 'undefined') {
          await emailjs.sendForm('service_5aezc4f', 'template_cedjp6g', this.form);
          this.showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
          this.form.reset();
        } else {
          throw new Error('EmailJS not available');
        }
      } catch (error) {
        console.error('Email send failed:', error);
        this.showMessage('Failed to send message. Please try again or contact me directly.', 'error');
      } finally {
        this.setLoading(false);
        setTimeout(() => this.hideMessage(), 5000);
      }
    }

    validateForm() {
      const inputs = this.form.querySelectorAll('input[required], textarea[required]');
      let isValid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          this.showFieldError(input, 'This field is required');
          isValid = false;
        } else if (input.type === 'email' && !this.isValidEmail(input.value)) {
          this.showFieldError(input, 'Please enter a valid email');
          isValid = false;
        } else {
          this.clearFieldError(input);
        }
      });

      return isValid;
    }

    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showFieldError(input, message) {
      input.style.borderColor = 'var(--accent-pink)';
      // Could add error message display here
    }

    clearFieldError(input) {
      input.style.borderColor = '';
    }

    setLoading(loading) {
      if (this.submitBtn) {
        this.submitBtn.disabled = loading;
        this.submitBtn.innerHTML = loading 
          ? '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>'
          : '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
      }
    }

    showMessage(text, type) {
      if (this.messageDiv) {
        this.messageDiv.textContent = text;
        this.messageDiv.className = `form-message show ${type}`;
      }
    }

    hideMessage() {
      if (this.messageDiv) {
        this.messageDiv.classList.remove('show');
      }
    }
  }

  // =================================================================
  // INITIALIZATION
  // =================================================================
  
  // Initialize all components
  // new LoadingScreen();
  new ThemeManager();
  new NavigationManager();
  new ScrollAnimations();
  new BackToTopButton();
  new ContactForm();
  new TestimonialsSlider();

  // Initialize typewriter effect
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    new TypewriterEffect(typewriterElement, [
      'AI & Data Engineer',
      'Machine Learning Expert',
      'Full Stack Developer',
      'Cloud Architect',
      'Research Enthusiast',
      'Tech Entrepreneur'
    ]);
  }

  // Performance monitoring
  window.addEventListener('load', () => {
    if (performance.navigation && performance.navigation.loadEventEnd) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`Portfolio loaded in ${loadTime}ms`);
    }
  });

  // Add smooth parallax effect to hero section
  window.addEventListener('scroll', throttle(() => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.3;
      heroSection.style.transform = `translateY(${parallax}px)`;
    }
  }, 16));

  console.log('🚀 Spectacular Portfolio Initialized Successfully!');
});