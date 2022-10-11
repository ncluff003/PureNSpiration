import * as Email from './../Email';
import * as Utility from './../Utility';

export const watchContactForm = () => {
  console.log(`Contacting...`);
  const contactMeSection = document.querySelector('.contact-container');
  if (contactMeSection) {
    const sendMessageButton = document.querySelector('.button--send');

    sendMessageButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const firstName = document.getElementById('fname').value;
      const lastName = document.getElementById('lname').value;
      const email = document.getElementById('emailAddress').value;
      const subject = document.getElementById('emailSubject').value;
      const message = document.getElementById('emailMessage').value;
      // console.log(firstName, lastName, email, subject, message);
      await Email.emailMe(firstName, lastName, email, subject, message);
    });

    const messageContainer = document.querySelector('.form__input--message');
    const characterCounter = document.querySelector('.form__character-count');
    messageContainer.addEventListener('keyup', (e) => {
      e.preventDefault();
      characterCounter.textContent = `${5000 - messageContainer.value.length} Characters Left`;
      console.log(messageContainer.value.length);
    });

    const contactTabs = document.querySelectorAll('.dual-tab-container__tab-container__tab');
    const contactHeader = document.querySelector('.contact-header');
    contactTabs.forEach((tab, i) => {
      tab.addEventListener(`click`, (e) => {
        e.preventDefault();
        console.log(`Hello`);
        contactHeader.textContent = tab.textContent;
        if (i === 0) {
          Utility.replaceClassName(document.querySelector('.calendar'), `open`, `closed`);
          Utility.replaceClassName(document.querySelector('.contact-container'), `closed`, `open`);
        }
        if (i === 1) {
          Utility.replaceClassName(document.querySelector('.calendar'), `closed`, `open`);
          Utility.replaceClassName(document.querySelector('.contact-container'), `open`, `closed`);
        }
      });
    });
  }
};
