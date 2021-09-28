import axios from 'axios';
import qs from 'qs';
import { app } from './App';

export const emailMe = async (firstName, lastName, organization, position, email, subject, message) => {
  try {
    // SEND THE EMAL
    const response = await axios({
      method: `POST`,
      url: `/contact`,
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
      const formResponse = document.querySelector(`.form-response`);
      formResponse.classList.remove(`form-response--error`);
      formResponse.classList.remove(`r__form-response--error`);
      formResponse.classList.add(`form-response--success`);
      formResponse.classList.add(`r__form-response--success`);
      formResponse.textContent = '';
      app._selectStamp(2);
      return (formResponse.textContent = response.data.message);
    }
  } catch (error) {
    console.log(error, error.response);
    if (error.response.data.status === `Internal Error` || error.response.data.status === `Error`) {
      const formResponse = document.querySelector(`.form-response`);
      formResponse.classList.remove(`form-response--success`);
      formResponse.classList.remove(`r__form-response--success`);
      formResponse.classList.add(`form-response--error`);
      formResponse.classList.add(`r__form-response--error`);
      formResponse.textContent = '';
      app._selectStamp(1);
      return (formResponse.textContent = error.response.data.message);
    }
  }
};
