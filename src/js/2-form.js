'use strict'

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_DATA_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', event => {
    const formData = new formData(feedbackForm);
    const formObject = {};
    formData.forEach(value, key => {
        formObject[key] = value.trim();   
    });
    localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(formObject));
})

feedbackForm.addEventListener('submit', event => {
    event.preventDefault();
    localStorage.removeItem(STORAGE_DATA_KEY);
    feedbackForm.reset();
    console.log(initialFormData);
})

try {
    const initialFormData = JSON.parse(localStorage.getItem(STORAGE_DATA_KEY));
    Array.from(feedbackForm.elements).forEach(element => {
        const storageValue = initialFormData[element.name];
        if (initialFormData) {
            if (initialFormData === null) return;
            else {
                element.value = storageValue;
            }
        }
    });
} catch (e) {
    console.error('PARSE ERROR')
}