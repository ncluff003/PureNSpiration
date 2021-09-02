export const showMessage = (type, message, statusCode) => {
  const errorContainer = document.querySelector(`.contact-form-message-container--${type}`);
  errorContainer.textContent = `${statusCode} -- ${message}`;
};

// The Two Containers For Messages
// contact-form-message-container--success
// contact-form-message-container--error
