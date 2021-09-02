import axios from 'axios';
import qs from 'qs';
import { showMessage } from './Message';

// This function needs to be imported into my App.  My only thing to work around is the fact that my contact button simply likely won't exist right away because of the fact that I have the section hidden until they have seen it.
export const emailMe = async (firstName, lastName, organization, position, email, subject, message) => {
  try {
    console.log(firstName, lastName, organization, position, email, subject, message);
    const response = await axios({
      method: `POST`,
      url: `http://127.0.0.1:3333/v1/email`,
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
    console.log(response.config.data, response.config, response.data.status);
    if (response.data.status === `Success`) {
      document.querySelector(`.contact-form-message-container--success`).textContent = response.data.message;
    }
  } catch (error) {
    // Right here, I want to actually have an error handler for the front-end imported here so I can handle the error message that shows in the form error message area if there is something.
    console.log(response.data.status);
    console.log(error);
  }
};
