'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');
  const emailInput = feedbackForm.querySelector('input[name="email"]');
  const messageInput = feedbackForm.querySelector('textarea[name="message"]');
  const STORAGE_DATA_KEY = 'feedback-form-state';

  const storageValue = JSON.parse(localStorage.getItem(STORAGE_DATA_KEY)) || {};
  emailInput.value = storageValue.email || '';
  messageInput.value = storageValue.message || '';

  feedbackForm.addEventListener('input', (event) => {
    if (event.target.name === 'email' || event.target.name === 'message') {
      const currentValue = {
        email: emailInput.value.trim(),  
        message: messageInput.value.trim(),  
      };
      localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(currentValue));
    }
  });

  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const currentValue = {
      email: emailInput.value.trim(),  
      message: messageInput.value.trim(), 
    };
    localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(currentValue));

    if (!currentValue.email || !currentValue.message) {
      alert('Please fill in both email and message fields');
     
    }

    const formData = {
      email: currentValue.email,
      message: currentValue.message,
    };
    console.log(formData);

    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem(STORAGE_DATA_KEY);
  feedbackForm.reset();
  });
});
