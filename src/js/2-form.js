'use strict'

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_DATA_KEY = 'feedback-form-state';
 let formObject = {};

try {
  const storageValue = JSON.parse(localStorage.getItem(STORAGE_DATA_KEY));
  if (storageValue) {
    for (let key in storageValue) {
     console.log(feedbackForm.elements[key].value = storageValue[key]); 
    }
  }
} catch (error) {
  console.error('PARSE ERROR');
};


feedbackForm.addEventListener('input', event => {
  formObject[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(formObject));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log(formObject);
  localStorage.removeItem(STORAGE_DATA_KEY);
  feedbackForm.reset();
});