import * as Email from './../Email';

export const watchContactForm = () => {
  console.log(`Contacting...`);
  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const sendMessageButton = document.querySelector('.button--send-message');

  sendMessageButton.addEventListener('click', async (e) => {
    e.preventDefault();
    await Email.emailMe(firstName, lastName, email, subject, message);
  });

  const messageContainer = document.querySelector('.form-input--message');
  const characterCounter = document.querySelector('.character-count');
  messageContainer.addEventListener('keyup', (e) => {
    e.preventDefault();
    characterCounter.textContent = `${5000 - messageContainer.value.length} Characters Left`;
    console.log(messageContainer.value.length);
  });
};
