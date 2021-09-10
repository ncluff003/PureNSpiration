////////////////////////////////////////////////
// IMPORTED VALUES
import { Paragraph } from './Paragraph.js';
import { Skill } from './skillCard.js';
import { Project } from './projectCard.js';
import { emailMe } from './Email';

///////////////////////////////////////////////
// PARAGRAPH VARIABLES
let intervalName, intervalName2;

//////////////////////////////////////////
// -- INTRODUCTION PARAGRAPH VARIABLES -- //
const introCursor = document.querySelector(`.typing-text--cursor`);
const typingTextContent = document.getElementsByClassName(`typing-text--introduction`)[0];
const introButtons = [...document.querySelectorAll(`.introduction-button`)];
const introClasses = [`introduction-button--hiddenLeft`, `introduction-button--hiddenDown`, `introduction-button--hiddenRight`];
const statements = [
  `Hello, my name is Nathan Cluff.`,
  `I am a web developer who loves`,
  `bringing good design and challenging`,
  `projects to life through clean,`,
  `simple, cutting edge technology.`,
];

////////////////////////////////////
// -- ABOUT PARAGRAPH VARIABLES -- //
const aboutCursor = document.querySelector(`.about-typing-text--cursor`);
const aboutTypingTextContent = document.getElementsByClassName(`about-typing-text`)[0];

const missionStatement = [
  `As a passionate and`,
  `self-taught developer,`,
  `my mission is simple.`,
  `To improve the growth`,
  `and profitability of`,
  `your organization while`,
  `simultaneously expanding`,
  `my growing skillset.`,
  `Thank you so much`,
  `for your time and`,
  `consideration. 🙂`,
];
///////////////////////////////////////////////
// PARAGRAPH OBJECTS
const paragraph1 = new Paragraph({
  story: statements,
  container: typingTextContent,
  currentStatement: 0,
  currentCharacter: 0,
  cursor: introCursor,
  interval: intervalName,
});
const paragraph2 = new Paragraph({
  story: missionStatement,
  container: aboutTypingTextContent,
  currentStatement: 0,
  currentCharacter: 0,
  cursor: aboutCursor,
  interval: intervalName2,
});

///////////////////////////////////////////////
// SKILL VARIABLES
const showcase = document.querySelectorAll(`.showcase-grid`);

//////////////////
//  -- SKILLS --  //
const html5 = new Skill({ title: `HTML5`, image: `<i class='fab fa-html5'></i>`, domElement: showcase[0] });
const css3 = new Skill({ title: `CSS3`, image: `<i class='fab fa-css3-alt'></i>`, domElement: showcase[0] });
const javascript = new Skill({ title: `JavaScript`, image: `<i class='fab fa-js-square'></i>`, domElement: showcase[0] });
const nodeJS = new Skill({ title: `Node.js`, image: `<i class='fab fa-node-js'></i>`, domElement: showcase[0] });
const scss = new Skill({ title: `SCSS`, image: `<i class='fab fa-sass'></i>`, domElement: showcase[0] });
const less = new Skill({ title: `Less`, image: `<i class='fab fa-less'></i>`, domElement: showcase[0] });
const vue = new Skill({ title: `Vue.js`, image: `<i class='fab fa-vuejs'></i>`, domElement: showcase[0] });
const git = new Skill({ title: `Git`, image: `<i class='fab fa-git-square'></i>`, domElement: showcase[0] });
const github = new Skill({ title: `Github`, image: `<i class='fab fa-github-square'></i>`, domElement: showcase[0] });
const express = new Skill({ title: `Express`, image: `<img src="./../DIST/CSS/Images/expressjs-logo.svg">`, domElement: showcase[0] });
const axios = new Skill({ title: `Axios`, image: `<img src="./../DIST/CSS/Images/axios-logo.svg">`, domElement: showcase[0] });
const mongodb = new Skill({ title: `MongoDB`, image: `<img src="./../DIST/CSS/Images/MongoDB_Logo_White_RGB.svg">`, domElement: showcase[0] });
const mongoose = new Skill({ title: `Mongoose`, image: `<p>Mongoose</p>`, domElement: showcase[0] });
const jwt = new Skill({ title: `JWT`, image: `<img src="./../DIST/CSS/Images/JWT.png">`, domElement: showcase[0] });
const pug = new Skill({ title: `Pug`, image: `<img src="./../DIST/CSS/Images/pug-logo-remade.svg">`, domElement: showcase[0] });

///////////////////////////////////////
//  -- SKILL ARRAY & CARD CREATION --  //
const skills = [html5, css3, scss, less, javascript, vue, pug, nodeJS, express, axios, mongodb, mongoose, jwt, git, github];
skills.forEach((s, i) => {
  s._produceSkillCard(`${s.image}`, `${s.title}`, s.domElement);
});

//////////////////////////////////
//  -- PROJECTS INTRODUCTIONS --  //

const purenspirationDescription = `<p>This is my personal creative playground.  As of right now, it has the foundational technologies of HTML5, CSS3, & JavaScript setting a strong foundation for its function & design.</p>
<br>
<p>The aim for the design was to be easier to use, while also easy on the eyes.  The most advanced features use technologies such as, SCSS, PugJS, JavaScript, & ExpressJS amongst others.</p>`;

const kingRichardDescription = `The goal is for this to be a budget built to be flexible for any kind of person.  From the simplest of budgets, to the most detail-intensive and powerful.  All so the users can get the most value out of their money, and be able to reach their financial dreams.`;

/////////////////////
//  -- PROJECTS --  //
const purenspiration = new Project({
  title: `Pure N Spiration`,
  image: `<img src="/CSS/Images/Computer_Desktop_Image.svg">`,
  backgroundColor: `#FFD700`,
  textColor: `#333333`,
  description: purenspirationDescription,
  link: `#`,
  repository: `https://github.com/ncluff003/PureNSpiration`,
  domElement: showcase[1],
});

const kingrichard = new Project({
  title: `King Richard`,
  image: `<img src="/CSS/Images/KingRichard-Logo--COVER.svg">`,
  backgroundColor: `#822aba`,
  textColor: `#FEFEFE`,
  description: kingRichardDescription,
  link: `../../../KingRichard-Budget/Public/DIST/index.html`,
  repository: `https://github.com/ncluff003/KingRichard-Budget`,
  domElement: showcase[1],
});

//////////////////////////////////////////
//  -- PROJECT ARRAY & CARD CREATION --  //
const projects = [purenspiration, kingrichard];
projects.forEach((p, i) => {
  p._produceProjectCard(`${p.image}`, `${p.title}`, `${p.backgroundColor}`, `${p.textColor}`, `${p.description}`, `${p.link}`, `${p.repository}`, p.domElement);
});

///////////////////////////////////////////////
// APP CLASS
class App {
  constructor() {
    /////////////////////////////////////////
    //  Site Setup
    projectCards.forEach((p) => {
      if (p.innerText.startsWith('King Richard')) p.classList.add(`project-card-work-in-progress`);
    });
    this._hideGrids(allGrids);
    this._observeNav();
    this._hideButtons();
    this._watchNav(nav, 0.5, 1);
    paragraph1._startTyping();
    this._revealButton();
    this._createDots();
    this._watchDots(0);
    this._activateDot(0);
    index = 0;
    index2 = 0;
    index3 = 0;
    this._watchCards(showcase[0], skillCards, index);
    this._setUpCards(skillCards, index);
    this._createCardButtonNavigation(showcase[0]);
    this._watchCardButtons(skillCards, showcase[0]);
    this._watchCards(showcase[1], projectCards, index2);
    this._setUpCards(projectCards, index);
    this._createCardButtonNavigation(showcase[1]);
    this._watchCardButtons(projectCards, showcase[1]);
    this._watchCards(aboutMeContainer, slideOptions, index3);
    this._setUpCards(slideOptions, index3);
    this._createCardButtonNavigation(aboutMeContainer);
    this._watchCardButtons(slideOptions, aboutMeContainer);
  }

  _goToCard(cardType, index, prevCards, nextCards) {
    if (cardType === skillCards || cardType === projectCards) {
      let prevCardsReverse = prevCards.reverse();

      prevCardsReverse.forEach((card, i) => {
        i === 0
          ? (card.style.transform = `translate(${(300 + (i + 1) * 15) * -1}% , ${-8}%)`)
          : i > 0
          ? (card.style.transform = `translate(${(200 + (i + 1) * 115) * -1}% , ${-8}%)`)
          : '';
      });
      cardType.forEach((card, i) => {
        i - index === 0
          ? (card.style.transform = `translate(${0}% , ${-8}%)`)
          : i - index === 1 || i - index > 1
          ? (card.style.transform = `translate(${100 * (i - index) + 200 + (nextCards.indexOf(card) + 1) * 15}% , ${-8}%)`)
          : '';
      });
    }
    if (cardType === slideOptions) {
      this._goToSlide(index);
      this._activateDot(index);
    }
  }
  _prevCard(cardType, index) {
    if (cardType === slideOptions) {
      return this._goToCard(cardType, index), index;
    }
    const frontDoorCards = cardType.slice(index + 1, cardType.length);
    const backDoorCards = cardType.slice(0, index);
    this._goToCard(cardType, index, backDoorCards, frontDoorCards);
    return index;
  }
  _nextCard(cardType, index) {
    if (cardType === slideOptions) {
      return this._goToCard(cardType, index), index;
    }
    const frontDoorCards = cardType.slice(index + 1, cardType.length);
    const backDoorCards = cardType.slice(0, index);
    this._goToCard(cardType, index, backDoorCards, frontDoorCards);
    return index;
  }
  _watchCards(cardContainer, cardType, index) {
    document.addEventListener(`keyup`, (e) => {
      if (e.key === `ArrowLeft`) {
        if (cardContainer.getBoundingClientRect().top <= 523 && cardContainer.getBoundingClientRect().bottom >= 686) {
          index <= 0 && cardContainer === showcase[0] ? (index = cardType.length - 1) : index--;
          index <= -1 ? (index = cardType.length - 1) : index >= cardType.length ? (index = 0) : index;
          cardType === skillCards ? this._prevCard(cardType, index) : cardType === projectCards ? this._prevCard(cardType, index) : '';
          cardType === projectCards ? projects[projects.length - 1]._getProjectCount(index, projectCards) : e.key;
        }
      }
      if (e.key === `ArrowRight`) {
        if (cardContainer.getBoundingClientRect().top <= 523 && cardContainer.getBoundingClientRect().bottom >= 686) {
          index >= cardType.length - 1 ? (index = 0) : index++;
          index <= -1 ? (index = cardType.length - 1) : index >= cardType.length ? (index = 0) : index;
          cardType === skillCards ? this._nextCard(cardType, index) : cardType === projectCards ? this._nextCard(cardType, index) : '';
          cardType === projectCards ? projects[projects.length - 1]._getProjectCount(index, projectCards) : e.key;
        }
      }
    });
    return index;
  }
  _setUpCards(cardType, index) {
    if (cardType === projectCards) {
      projects[projects.length - 1]._getProjectCount(index, projectCards);
    }
    cardType.forEach((card, i) => {
      i - index === 0
        ? (card.style.transform = `translate(${0}% , ${-8}%)`)
        : i - index === 1 || i - index > 1
        ? (card.style.transform = `translate(${100 * (i - index) + 200 + i * 15}% , ${-8}%)`)
        : (card.style.transform = `translate(${(100 * (i + index) + 200 + index * 15) * -1}% , ${-8}%)`);
    });
  }
  _watchCardButtons(cardType, cardContainer) {
    cardContainer.addEventListener(`click`, (e) => {
      e.preventDefault();
      const clickedButton = e.target.closest(`.button`);

      if (!clickedButton) return;

      cardType === skillCards && clickedButton.classList.contains(`card-button-left`)
        ? index--
        : cardType === skillCards && clickedButton.classList.contains(`card-button-right`)
        ? index++
        : (index = index);

      cardType === projectCards && clickedButton.classList.contains(`card-button-left`)
        ? index2--
        : cardType === projectCards && clickedButton.classList.contains(`card-button-right`)
        ? index2++
        : index2;

      cardType === slideOptions && clickedButton.classList.contains(`card-button-left`)
        ? index3--
        : cardType === slideOptions && clickedButton.classList.contains(`card-button-right`)
        ? index3++
        : index3;

      index <= -1 ? (index = cardType.length - 1) : index >= cardType.length ? (index = 0) : index;
      index2 <= -1 ? (index2 = cardType.length - 1) : index2 >= cardType.length ? (index2 = 0) : index2;
      index3 <= -1 ? (index3 = cardType.length - 1) : index3 >= cardType.length ? (index3 = 0) : index3;

      cardType === skillCards && clickedButton.classList.contains(`card-button-left`)
        ? this._prevCard(cardType, index)
        : cardType === skillCards && clickedButton.classList.contains(`card-button-right`)
        ? this._nextCard(cardType, index)
        : index;

      if (cardType === projectCards && clickedButton.classList.contains(`card-button-left`)) {
        this._prevCard(cardType, index2);
        purenspiration._getProjectCount(index2, projectCards);
      }
      if (cardType === projectCards && clickedButton.classList.contains(`card-button-right`)) {
        this._nextCard(cardType, index2);
        purenspiration._getProjectCount(index2, projectCards);
      }

      cardType === slideOptions && clickedButton.classList.contains(`card-button-left`)
        ? this._prevCard(cardType, index3)
        : cardType === slideOptions && clickedButton.classList.contains(`card-button-right`)
        ? this._nextCard(cardType, index3)
        : index3;
    });
  }
  _createCardButtonNavigation(cardContainer) {
    const buttonLeft = document.createElement('button');
    const buttonRight = document.createElement(`button`);
    buttonLeft.classList.add(`button`, `card-button-left`);
    buttonRight.classList.add(`button`, `card-button-right`);
    buttonLeft.insertAdjacentHTML(`beforeend`, `<i class="fas fa-arrow-left"></img>`);
    buttonRight.insertAdjacentHTML(`beforeend`, `<i class="fas fa-arrow-right"></i>`);
    cardContainer.insertAdjacentElement(`afterbegin`, buttonLeft);
    cardContainer.insertAdjacentElement(`beforeend`, buttonRight);
  }
  _createDots() {
    slideOptions.forEach((_, i) => {
      console.log(slideOptions);
      optionNavContainer.insertAdjacentHTML(`beforeend`, `<button class="about-me-container__option-navigation__dot" data-sliderOption="${i}"></button>`);
    });
  }
  _activateDot(slide) {
    document.querySelectorAll(`.about-me-container__option-navigation__dot`).forEach((dot) => {
      dot.classList.remove(`about-me-container__option-navigation__dot--active`);
    });

    document
      .querySelector(`.about-me-container__option-navigation__dot[data-sliderOption="${slide}"]`)
      .classList.add(`about-me-container__option-navigation__dot--active`);
  }
  _goToSlide(slide) {
    console.log(slide);
    slideOptions.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }
  _watchDots(optionIndex) {
    optionNavContainer.addEventListener(`click`, (e) => {
      if (e.target.classList.contains(`about-me-container__option-navigation__dot`)) {
        const slide = e.target.dataset.slideroption;
        this._goToSlide(slide);
        this._activateDot(slide);
      }
    });

    let index = optionIndex;
    document.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowLeft') {
        if (aboutMeContainer.getBoundingClientRect().top <= 523 && aboutMeContainer.getBoundingClientRect().bottom >= 686) index--;
        console.log(index);
        if (index < 0) index = slideOptions.length - 1;
        console.log(`You want to go left on my about section.`);
        const slide = index;
        this._goToSlide(slide);
        this._activateDot(slide);
      }

      if (e.key === 'ArrowRight') {
        if (aboutMeContainer.getBoundingClientRect().top <= 523 && aboutMeContainer.getBoundingClientRect().bottom >= 686) index++;
        if (index === slideOptions.length) index = 0;
        console.log(index);
        console.log(`You want to go right on my about section.`);
        const slide = index;
        this._goToSlide(slide);
        this._activateDot(slide);
      }
    });
  }
  _handleHover(e) {
    if (e.target.classList.contains('navigation__links--linkItem__link')) {
      const hovered = e.target;
      const siblings = hovered.closest(`.navigation`).querySelectorAll('.navigation__links--linkItem__link');
      siblings.forEach((el) => {
        if (el !== hovered) {
          el.style.opacity = this;
        }
      });
    }
  }
  _watchNav(navigation, opacity1, opacity2) {
    // Used Bind Method To Pass An "Argument" Into A Handler Function
    navigation.addEventListener('mouseover', this._handleHover.bind(opacity1));
    navigation.addEventListener('mouseout', this._handleHover.bind(opacity2));
  }
  _stickyNav(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      nav.classList.add('navigation--sticky');
      for (const link of links) {
        link.classList.add(`navigation__links--linkItem__link--sticky`);
      }
    } else {
      nav.classList.remove('navigation--sticky');
      for (const link of links) {
        link.classList.remove(`navigation__links--linkItem__link--sticky`);
      }
    }
  }
  _observeNav() {
    const observer = new IntersectionObserver(this._stickyNav, observerOptions);
    observer.observe(introduction);
  }
  _revealButton() {
    const revealButtonInterval = setInterval(() => {
      if (paragraph1.story === statements && paragraph1.currentStatement === 0) {
        introButtons[paragraph1.currentStatement - 0].classList.remove(introClasses[paragraph1.currentStatement - 0]);
      }
      if (paragraph1.story === statements && paragraph1.currentStatement === 2) {
        introButtons[paragraph1.currentStatement - 1].classList.remove(introClasses[paragraph1.currentStatement - 1]);
      }
      if (paragraph1.story === statements && paragraph1.currentStatement === 4) {
        introButtons[paragraph1.currentStatement - 2].classList.remove(introClasses[paragraph1.currentStatement - 2]);
        setTimeout(() => {
          clearInterval(revealButtonInterval);
        }, 1000);
      }
    }, 2000);
  }
  _hideButtons() {
    // Hiding Introduction Buttons To Start
    for (let [index, button] of introButtons.entries()) {
      button.classList.add(`${introClasses[index]}`);
    }
  }
  _revealSection(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('grid-container--hidden');
    if (entry.target === allGrids[1]) {
      paragraph2._startTyping();
    }
    if (entry.target === allGrids[4]) {
      if (contactForm) {
        contactForm.addEventListener(`submit`, (e) => {
          e.preventDefault();
          const firstName = document.querySelector(`.first-name`).value;
          const lastName = document.querySelector(`.last-name`).value;
          const organization = document.querySelector(`.organization-name`).value;
          const position = document.querySelector(`.position-name`).value;
          const email = document.querySelector(`.email`).value;
          const subject = document.querySelector(`.subject`).value;
          const message = document.querySelector(`.message`).value;
          emailMe(firstName, lastName, organization, position, email, subject, message);
        });
      }
    }
    observer.unobserve(entry.target);
  }
  _hideGrids(grids) {
    for (const grid of grids) {
      if (grid === grids[0]) {
        continue;
      }
      const sectionObserver = new IntersectionObserver(this._revealSection, revealSectionOptions);
      sectionObserver.observe(grid);
      grid.classList.add(`grid-container--hidden`);
    }
  }
}
///////////////////////////////////////////////
// APP VARIABLES
let index, index2, index3;
const allGrids = [...document.querySelectorAll(`.grid-container`)];
const nav = document.querySelector(`.navigation`);
const links = [...document.querySelectorAll(`.navigation__links--linkItem__link`)];
const navHeight = nav.getBoundingClientRect().height;
const introduction = document.getElementsByClassName(`grid-container`)[0];
const aboutMeContainer = document.querySelector(`.about-me-container__option-slider`);
const slideOptions = document.querySelectorAll(`.about-me-container__option-slider--option`);
const optionNavContainer = document.querySelector(`.about-me-container__option-navigation`);
const skillCards = [...document.querySelectorAll(`.skill-card`)];
const projectCards = [...document.querySelectorAll(`.project-card`)];
const contactForm = document.querySelector(`.contact-form`);
const revealSectionOptions = {
  root: null,
  threshold: 0.35,
};
const observerOptions = {
  root: null, // null wil make the viewport the root.
  threshold: 0, // threshold of the root element which the function will be called.
  rootMargin: `-${navHeight + 360}px`,
};
///////////////////////////////////////////////
// APP
const app = new App();
