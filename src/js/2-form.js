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

    if (!currentValue.email) {
      alert('Please fill in email field');
      return;
    } 
    if (!currentValue.message) {
      alert('Please fill in message field');
      return;
    }
    console.log(currentValue);
    localStorage.removeItem(STORAGE_DATA_KEY);
  feedbackForm.reset();
  });
});
