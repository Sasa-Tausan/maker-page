'use strict';

const inputEl = document.querySelector('input');
const errorEl = document.querySelector('#error');
const submitBtnEl = document.querySelector('#submit-btn');

const showError = (message) => {
  errorEl.innerHTML = message;
  errorEl.classList.add('error-msg-active');
  inputEl.classList.add('input-error');
};

const clearError = () => {
  errorEl.innerHTML = '';
  errorEl.classList.remove('error-msg-active');
  inputEl.classList.remove('input-error');
};

const validateEmail = (email) => {
  if (!email) {
    showError('Oops! Please add your email');
    return false;
  }

  if (!email.includes('@')) {
    showError("Oops! That doesn't look like an email address");
    return false;
  }

  return true;
};

const submitForm = (e) => {
  e.preventDefault();
  const email = inputEl.value;

  clearError();

  if (validateEmail(email)) {
    alert('You will be notified');
    inputEl.value = '';
  }
};

document.addEventListener('input', clearError);
submitBtnEl.addEventListener('click', submitForm);
