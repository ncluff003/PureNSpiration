import axios from 'axios';
import qs from 'qs';

export const emailMe = async (firstName, lastName, organization, position, email, subject, message) => {
  document.querySelector(`.contact-form-message-container--error`).textContent = '';
  document.querySelector(`.contact-form-message-container--success`).textContent = '';
  try {
    // SEND THE EMAL
    const response = await axios({
      method: `POST`,
      url: `/`,
      data: qs.stringify({
        firstName: firstName,
        lastName: lastName,
        organization: organization,
        position: position,
        email: email,
        subject: subject,
        message: message,
      }),
    });
    if (response.data.status === `Success`) {
      document.querySelector(`.contact-form-message-container--error`).textContent = '';
      document.querySelector(`.contact-form-message-container--success`).textContent = '';
      document.querySelector(`.contact-form-message-container--success`).textContent = response.data.message;
    }
  } catch (error) {
    document.querySelector(`.contact-form-message-container--success`).textContent = '';
    document.querySelector(`.contact-form-message-container--error`).textContent = '';
    document.querySelector(`.contact-form-message-container--error`).textContent = error.response.data.message;
  }
};
