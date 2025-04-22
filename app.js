document.addEventListener('DOMContentLoaded', () => {
  // Navigation handling
  function setActivePage(pageId) {
      // Update navigation links
      document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${pageId}`) {
              link.classList.add('active');
          }
      });

      // Show/hide pages
      document.querySelectorAll('.page').forEach(page => {
          page.classList.remove('active');
          if (page.id === pageId) {
              page.classList.add('active');
          }
      });
  }

  // Handle navigation clicks
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const pageId = link.getAttribute('href').substring(1);
          setActivePage(pageId);
          window.location.hash = pageId;
      });
  });

  // Handle initial page load
  function loadInitialPage() {
      const pageId = window.location.hash.substring(1) || 'home';
      setActivePage(pageId);
  }

  loadInitialPage();
  window.addEventListener('hashchange', loadInitialPage);

  // Form validation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          const formData = new FormData(contactForm);
          const entries = Object.fromEntries(formData.entries());
          
          if (validateForm(entries)) {
              // Simulate form submission
              showSuccessMessage();
              contactForm.reset();
          }
      });
  }

  function validateForm(data) {
      if (!data.name || !data.email || !data.message) {
          alert('Please fill in all fields');
          return false;
      }

      if (!validateEmail(data.email)) {
          alert('Please enter a valid email address');
          return false;
      }

      return true;
  }

  function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showSuccessMessage() {
      alert('Thank you for your message! We will respond shortly.');
  }

  // CTA button click
  document.querySelector('.hero-cta')?.addEventListener('click', () => {
      window.location.hash = 'contact';
      setActivePage('contact');
  });
});