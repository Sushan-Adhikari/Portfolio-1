const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');

function pageTransition() {
  // Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    });
  }

  // Sections Active class
  allsections.addEventListener('click', (e) => {
    const id = e.target.dataset.id; // select the dataid of whatever is clicked
    if (id) {
      // remove selected from the button
      sectBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });

  // Toggle Theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
  });
}

pageTransition();

// Add the EmailJS form submission code outside of pageTransition()

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const messageContainer = document.getElementById('formMessage');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Clear previous messages
      messageContainer.textContent = '';
      messageContainer.classList.remove('success', 'error', 'show');
  
      // Collect the form data
      const formData = {
        from_name: document.querySelector('input[name="name"]').value,
        email_id: document.querySelector('input[name="email"]').value,
        subject_mail: document.querySelector('input[name="subject"]').value,
        message: document.querySelector('textarea[name="message"]').value,
      };
  
      // Use EmailJS to send the form data via email
      emailjs
        .send('service_5aezc4f', 'template_cedjp6g', formData)
        .then(function (response) {
          // Success: Display a success message and clear the form
          messageContainer.textContent = 'Your message has been sent successfully!';
          messageContainer.classList.add('success', 'show');
          form.reset(); // Clear form fields
  
          // Automatically hide the message after 5 seconds
          setTimeout(function () {
            messageContainer.classList.remove('show');
          }, 8000); // 8 seconds delay
        })
        .catch(function (error) {
          // Error: Display an error message
          messageContainer.textContent = 'Failed to send your message. Please try again later.';
          messageContainer.classList.add('error', 'show');
  
          // Automatically hide the message after 5 seconds
          setTimeout(function () {
            messageContainer.classList.remove('show');
          }, 8000); // 8 seconds delay
        });
    });
  });
  
  
