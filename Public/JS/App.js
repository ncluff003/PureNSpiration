////////////////////////////////////////////////
// IMPORTED VALUES
// import { Paragraph } from './Paragraph.js';
// import { Skill } from './skillCard.js';
// import { Project } from './projectCard.js';
import { emailMe } from './Email';
import { myCalendar } from './Calendar.js';

///////////////////////////////////////////////
// APP CLASS
class App {
  constructor() {
    this._checkCurrentPage();
    this._watchMobileNavigation();
    this._watchNavigation(0.5, 1);
  }

  _checkCurrentPage() {
    if (window.location.pathname.includes(`about`)) {
      this._createDots(),
        this._goToSlide(0),
        this._activateDot(0),
        this._watchDots(0),
        this._createCardButtonNavigation(aboutSlider),
        this._watchAboutButtons(aboutButtonLeft, aboutButtonRight);
    }
    if (window.location.pathname.includes('contact')) {
      this._selectStamp(0);
      this._calculateCharactersLeft();
      this._watchForMail();
    }
  }

  _watchMobileNavigation() {
    menu.addEventListener(`click`, (e) => {
      e.preventDefault();
      mobileNavigation.style.display = `flex`;
      mobileNavigation.style.height = `100vh`;
      mobileNavigation.style.width = `100vw`;
      mobileNavigation.style.backgroundColor = `rgba(0, 71, 171, 0.8)`;
      mobileNavigation.style.opacity = 1;
      setTimeout(() => {
        mobileNavigationLinks.style.opacity = 1;
      }, 500);
      menu.style.opacity = 0;
      menuClose.style.display = 'flex';
    });

    menuClose.addEventListener(`click`, (e) => {
      mobileNavigation.style.height = 0;
      mobileNavigation.style.width = 0;
      mobileNavigationLinks.style.opacity = 0;
      menuClose.style.display = 'none';
      menu.style.opacity = 1;
      mobileNavigation.style.backgroundColor = 'transparent';
      setTimeout(() => {
        mobileNavigation.style.opacity = 0;
      }, 250);
    });
  }

  _watchNavigation() {
    navigationLinks.forEach((n, i) => {
      n.addEventListener('mouseover', (e) => {
        e.preventDefault();
        navigationLinks[i].style.opacity = 1;
        navigationLinks.forEach((l, i) => {
          if (n !== l) l.style.opacity = 0.5;
        });
      });
      n.addEventListener('mouseout', (e) => {
        e.preventDefault();
        navigationLinks[i].style.opacity = 0.75;
        navigationLinks.forEach((l, i) => {
          if (n !== l) l.style.opacity = 0.75;
        });
      });
    });
  }

  _watchForMail() {
    if (contactForm) {
      submitButton.addEventListener(`click`, (e) => {
        e.preventDefault();
        const firstName = document.getElementById(`first-name`).value;
        const lastName = document.getElementById(`last-name`).value;
        const organizationName = document.getElementById(`organization-name`).value;
        const organizationPosition = document.getElementById(`organization-position`).value;
        const email = document.getElementById(`email`).value;
        const subject = document.getElementById(`subject`).value;
        const yourMessage = message.value;
        emailMe(firstName, lastName, organizationName, organizationPosition, email, subject, yourMessage);
      });
    }
  }

  _calculateCharactersLeft() {
    message.addEventListener(`keyup`, (e) => {
      e.preventDefault();
      messageCounter.textContent = `( ${maxMessage - message.value.length} Characters Left )`;
    });
  }

  _selectStamp(stampIndex) {
    stamps.forEach((s) => {
      s.classList.remove(`r__stamp--active`);
      s.classList.remove(`stamp--active`);
    });
    stamps[stampIndex].classList.add(`stamp--active`);
    stamps[stampIndex].classList.add(`r__stamp--active`);
  }

  _createCardButtonNavigation(cardContainer) {
    const buttonLeft = document.createElement('button');
    const buttonRight = document.createElement(`button`);
    buttonLeft.classList.add(`button`, `card-button-left`, `r__card-button-left`);
    buttonRight.classList.add(`button`, `card-button-right`, `r__card-button-right`);
    buttonLeft.insertAdjacentHTML(`beforeend`, `<i class="fas fa-arrow-left"></img>`);
    buttonRight.insertAdjacentHTML(`beforeend`, `<i class="fas fa-arrow-right"></i>`);
    cardContainer.insertAdjacentElement(`afterbegin`, buttonLeft);
    cardContainer.insertAdjacentElement(`beforeend`, buttonRight);
  }

  _createDots() {
    statements.forEach((_, i) => {
      aboutViewportNav.insertAdjacentHTML(
        `beforeend`,
        `<button class="about-me-statement-slider-navigation__dot r__about-me-statement-slider-navigation__dot" data-sliderOption="${i}"></button>`,
      );
    });
  }
  _activateDot(slide) {
    document.querySelectorAll(`.about-me-statement-slider-navigation__dot`).forEach((dot) => {
      dot.classList.remove(`about-me-statement-slider-navigation__dot--active`);
    });
    document.querySelectorAll(`.r__about-me-statement-slider-navigation__dot`).forEach((dot) => {
      dot.classList.remove(`r__about-me-statement-slider-navigation__dot--active`);
    });

    document
      .querySelector(`.about-me-statement-slider-navigation__dot[data-sliderOption="${slide}"]`)
      .classList.add(`about-me-statement-slider-navigation__dot--active`);
    document
      .querySelector(`.r__about-me-statement-slider-navigation__dot[data-sliderOption="${slide}"]`)
      .classList.add(`r__about-me-statement-slider-navigation__dot--active`);
  }
  _goToSlide(slide) {
    statements.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }

  _watchAboutButtons(buttonLeft, buttonRight) {
    buttonLeft[0].addEventListener(`click`, (e) => {
      index--;
      if (index < 0) index = statements.length - 1;
      this._goToSlide(index);
      this._activateDot(index);
    });

    buttonRight[0].addEventListener(`click`, (e) => {
      index++;
      if (index === statements.length) index = 0;
      this._goToSlide(index);
      this._activateDot(index);
    });
  }
  _watchDots(optionIndex) {
    aboutViewportNav.addEventListener(`click`, (e) => {
      if (e.target.classList.contains(`about-me-statement-slider-navigation__dot`)) {
        const slide = e.target.dataset.slideroption;
        this._goToSlide(slide);
        this._activateDot(slide);
      }
    });

    index = optionIndex;
    document.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowLeft') {
        index--;
        if (index < 0) index = statements.length - 1;
        const slide = index;
        this._goToSlide(slide);
        this._activateDot(slide);
      }

      if (e.key === 'ArrowRight') {
        index++;
        if (index === statements.length) index = 0;
        const slide = index;
        this._goToSlide(slide);
        this._activateDot(slide);
      }
    });
    return index;
  }
}
///////////////////////////////////////////////
// APP VARIABLES

const mobileNavigation = document.querySelector(`.r__navigation-mobile`);
const mobileNavigationLinks = document.querySelector(`.r__navigation-mobile__links`);
const navigationLinks = [...document.querySelectorAll(`.navigation__links__link-item__link`)];
const menu = document.querySelector(`.r__navigation-menu-button`);
const menuClose = document.querySelector(`.r__navigation-mobile-close`);

const aboutSlider = document.querySelector(`.about-me-statement-slider`);
const aboutViewportNav = document.querySelector(`.about-me-statement-slider-navigation`);
const statements = [...document.querySelectorAll(`.about-me-statement`)];
const aboutButtonLeft = document.getElementsByClassName(`card-button-left`);
const aboutButtonRight = document.getElementsByClassName(`card-button-right`);
let index;

const stamps = [...document.querySelectorAll(`.stamp`)];
const contactForm = document.querySelector(`.form-container__contact-form`);
const message = document.getElementById(`message`);
const messageCounter = document.querySelector(`.form-container__contact-form__message-containers__message-counter`);
const maxMessage = 1000;
const submitButton = document.querySelector(`.form-container__contact-form__submit-containers__submit-container--submit`);
///////////////////////////////////////////////
// APP
export const app = new App();
