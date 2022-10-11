import * as Utility from './../Utility';
import * as Foundation from './About-Foundation';
import * as Interests from './About-Interests';
import * as Skills from './About-Skills';

export const watch = async () => {
  console.log(`Watching...`);
  const links = document.querySelectorAll('.navigation-header__container__ring__navigation__link');
  const buttons = document.querySelectorAll('.button--cta');
  const contactButton = buttons[1];
  const workButton = buttons[2];
  const contactButtonTwo = buttons[4];

  if (contactButton) {
    contactButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      links[4].click();
    });
  }

  if (workButton) {
    workButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      links[4].click();
    });
  }

  if (contactButtonTwo) {
    contactButtonTwo.addEventListener(`click`, (e) => {
      e.preventDefault();
      links[4].click();
    });
  }

  const leftDoor = document.querySelector('.about-flex-container__information-container__left-door');
  const rightDoor = document.querySelector('.about-flex-container__information-container__right-door');
  const doorOpener = document.querySelector('.button--about-doors');

  if (doorOpener) {
    doorOpener.addEventListener('click', (e) => {
      e.preventDefault();
      [leftDoor, rightDoor].forEach((door) => Utility.toggleClasses(door, [`door-open`]));
      Utility.toggleClasses(doorOpener, [`closed`, `open`]);
    });
  }

  const infoContainer = document.querySelector('.about-flex-container__information-container');
  const slides = document.querySelectorAll('.about-flex-container__information-container__slide');
  const slideButtonContainer = document.querySelector('.about-flex-container__information-container__button-container');
  let slideIndex = 0;
  slides.forEach((slide, i) => {
    const button = document.createElement('button');
    slide.dataset.slide = i;
    button.dataset.slide = i;
    Utility.addClasses(button, [
      `about-flex-container__information-container__button-container__button`,
      `r__about-flex-container__information-container__button-container__button`,
    ]);
    Utility.insertElement(`beforeend`, slideButtonContainer, button);
    if (i === 0) {
      Utility.addClasses(button, [`about-flex-container__information-container__button-container__button--active`]);
    }
    slide.style.transform = `translate(${100 * i}%, ${0}%)`;
  });
  const slideButtons = document.querySelectorAll('.about-flex-container__information-container__button-container__button');
  slideButtons.forEach((button, i) => {
    button.addEventListener(`click`, (e) => {
      e.preventDefault();
      slideIndex = Number(button.dataset.slide);
      slides.forEach((slide, i) => {
        slide.style.transform = `translate(${100 * i + Number(button.dataset.slide) * -100}%, ${0}%)`;
      });
      slideButtons.forEach((button) => Utility.removeClasses(button, [`about-flex-container__information-container__button-container__button--active`]));
      Utility.addClasses(button, [`about-flex-container__information-container__button-container__button--active`]);
    });
  });

  const slideContainers = document.querySelectorAll('.about-flex-container__information-container__slide__container');
  const innerSlides = document.querySelectorAll('.about-flex-container__information-container__slide__container__inner-slide');
  const skillSlideNavContainer = document.querySelector('.about-flex-container__information-container__slide__container__button-nav-container');

  const skillSlideContainer = slideContainers[1];
  innerSlides.forEach((slide, i) => {
    const button = document.createElement('button');
    Utility.addClasses(button, [
      `about-flex-container__information-container__slide__container__button-nav-container__button`,
      `r__about-flex-container__information-container__slide__container__button-nav-container__button`,
    ]);
    if (i === 0) {
      Utility.addClasses(button, [`about-flex-container__information-container__slide__container__button-nav-container__button--active`]);
    }
    Utility.insertElement(`beforeend`, skillSlideNavContainer, button);
    slide.dataset['inner_slide'] = i;
    button.dataset['inner_slide'] = i;
    slide.style.transform = `translate(${0}%, ${100 * i}%)`;
  });

  const innerSlideButtons = document.querySelectorAll('.about-flex-container__information-container__slide__container__button-nav-container__button');
  innerSlideButtons.forEach((button, i) => {
    button.addEventListener(`click`, (e) => {
      e.preventDefault();
      innerSlides.forEach((slide, i) => {
        slide.style.transform = `translate(${0}%, ${100 * i + Number(button.dataset['inner_slide']) * -100}%)`;
      });
      innerSlideButtons.forEach((button) =>
        Utility.removeClasses(button, [`about-flex-container__information-container__slide__container__button-nav-container__button--active`]),
      );
      Utility.addClasses(button, [`about-flex-container__information-container__slide__container__button-nav-container__button--active`]);
    });
  });
};
