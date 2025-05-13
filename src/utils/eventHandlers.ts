
document.addEventListener('DOMContentLoaded', () => {
  // Handle newsletter form submission
  const newsletterForms = document.querySelectorAll('#newsletter-form');
  
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
      
      if (emailInput && emailInput.value) {
        // Normally would send to a backend service
        console.log(`Newsletter subscription for: ${emailInput.value}`);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        
        // Reset form
        emailInput.value = '';
      }
    });
  });
});

export {};
