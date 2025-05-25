// script.js
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', function(e) {
  e.preventDefault();

  if (!orderForm.checkValidity()) {
    // Highlight invalid fields
    [...orderForm.elements].forEach(el => {
      if (!el.checkValidity()) {
        el.style.borderColor = '#d64a4a'; // red border for invalid
      } else {
        el.style.borderColor = ''; // reset valid
      }
    });
    alert('Please fill in all required fields correctly.');
    return;
  }

  alert('Thank you for your order! We will contact you soon.');
  orderForm.reset();

  // Reset borders after submission
  [...orderForm.elements].forEach(el => el.style.borderColor = '');
});
