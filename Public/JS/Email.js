import axios from 'axios';
import qs from 'qs';
import { app } from './App';

export const emailMe = async (firstName, lastName, email, subject, message) => {
  try {
    // SEND THE EMAL
    const response = await axios({
      method: `POST`,
      url: `/contact`,
      data: qs.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        message: message,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
