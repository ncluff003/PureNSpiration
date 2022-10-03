import * as Utility from './../Utility';
import * as Foundation from './About-Foundation';
import * as Interests from './About-Interests';
import * as Skills from './About-Skills';

export const watch = async () => {
  console.log(`Watching...`);
  const links = document.querySelectorAll('.navigation-header__container__ring__navigation__link');
  const buttons = document.querySelectorAll('.button--cta');
  console.log(buttons);
  const contactButton = buttons[1];
  const workButton = buttons[2];

  contactButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    links[4].click();
  });

  workButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    links[4].click();
  });

  const leftDoor = document.querySelector('.about-flex-container__information-container__left-door');
  const rightDoor = document.querySelector('.about-flex-container__information-container__right-door');
  const doorOpener = document.querySelector('.button--about-doors');

  doorOpener.addEventListener('click', (e) => {
    e.preventDefault();
    [leftDoor, rightDoor].forEach((door) => Utility.toggleClasses(door, [`door-open`]));
  });
};
