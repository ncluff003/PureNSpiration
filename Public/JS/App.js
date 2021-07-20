////////////////////////////////////////////////
// IMPORTED VALUES
import { Story } from "./Story.js";
import { Card, cardShell, childElement } from "./Card.js";
///////////////////////////////////////////////
// PARAGRAPH CLASS -- STORY CHILD
class Paragraph extends Story {
  constructor ( options ) {
    const superOpts = { ...options };
    super ( superOpts );
  }
  _startErasing () {
    this.interval = setInterval( () => {
      this._erase (this.container, this.story, this.cursor);
    }, 50);
  }
  _startTyping () {
    this.interval = setInterval(() => {
      this._type(this.container, this.story, this.cursor);
    }, 100);
  }
}
///////////////////////////////////////////////
// SKILL CLASS -- CARD CHILD
class Skill extends Card {
  constructor ( options ) {
    const superOpts = { ...options };
    super ( superOpts );
  }
  _produceSkillCard ( skillImage, skillTitle ) {
    this._createCardOuterShell('div', 'skill-card'); // Create The Card.
    cardShell.classList.add(`column_1-1`, `row_1-1`);
    this._createCardElement('div', 'skill-image-container') // Create Create The Image Container
    ._insertHTML(childElement, 'beforeend', skillImage) // Insert Image Into Image Container.
    ._attachElement(cardShell, childElement, 'beforeend') // Attach Image Container To The Card.
    ._createCardElement('div', 'skill-title-container') // Create The Title Container
    ._insertHTML(childElement, 'beforeend', skillTitle) // Insert The Title Into Its Container
    ._attachElement(cardShell, childElement, 'beforeend') // Attach Title Container To The Card
    ._attachElement(showcase[0], cardShell, 'beforeend'); // Attach The Card To The DOM Element.
  }
}
///////////////////////////////////////////////
// PROJECT CLASS -- CARD CHILD
class Project extends Card {
  constructor ( options ) {
    const superOpts = { ...options };
    super ( superOpts );
    this.backgroundColor = options.backgroundColor;
    this.textColor = options.textColor;
    this.description = options.description;
    this.link = options.link;
    this.repository = options.repository;
  }
  _selectProjectColors (element, projectBGColor, projectTextColor) {
    element.style.backgroundColor = projectBGColor;
    element.style.color = projectTextColor;
    return element, this;
  }
  _createProjectLinkContainer(parentingElement, projectLink1, projectLink2){
    this._createCardElement('div', 'project-card-content-link-container')
    ._attachElement(parentingElement, childElement, 'beforeend');
    let childEl = childElement;
    this._createCardElement('a', 'project-card-content-link-container--link')
    ._insertHTML(childElement, 'beforeend', 'View Code', projectLink2)
    ._attachElement(childEl, childElement, 'beforeend')
    ._createCardElement('a', 'project-card-content-link-container--link')
    ._insertHTML(childElement, 'beforeend', `Go To Site`, projectLink1)
    ._attachElement(childEl, childElement, 'beforeend');
    return this;
  }
  _createProjectContent(parentElement, projectDescription, projectLink1, projectLink2) {
    this._createCardElement('div', 'project-card-content');
    let childEl = childElement;
    this._attachElement(parentElement, childEl, 'beforeend')
    ._createCardElement('div', 'project-card-content-description-container')
    ._attachElement(childEl, childElement, 'beforeend')
    ._insertHTML(childElement, 'beforeend', projectDescription)
    ._createProjectLinkContainer(childEl, projectLink1, projectLink2);
    return this;
  }
  _createProjectCover(parentElement, projectImage, projectTitle, projectBGColor, projectTextColor) {
    cardShell.classList.add(`column_1-1`, `row_1-1`);
    this._createCardElement('div', 'project-card-cover')
    ._attachElement(parentElement, childElement, `beforeend`);
    let childEl = childElement;
    this._createCardElement('div', 'project-card-cover-image-container')
    ._attachElement(childEl, childElement, 'beforeend')
    ._insertHTML(childElement, 'beforeend', projectImage)
    ._createCardElement('div', 'project-card-cover-title-container')
    ._insertHTML(childElement, 'beforeend', projectTitle)
    ._selectProjectColors(childElement, projectBGColor, projectTextColor)
    ._attachElement(childEl, childElement, 'beforeend')
    ._attachElement(showcase[1], parentElement, 'beforeend');
    return parentElement, childElement, this;
  }
  _getProjectCount (index) {
    let projectCount = document.getElementsByClassName('project-count')[0];
    projectCount.textContent = `${index + 1} / ${projectCards.length}`;
  }
  _produceProjectCard ( projectImage, projectTitle, projectBGColor, projectTextColor, projectDescription, projectLink1, projectLink2 ) {
    this._createCardOuterShell('div', 'project-card')
    ._createProjectCover(cardShell, projectImage, projectTitle, projectBGColor, projectTextColor)
    ._createProjectContent(cardShell, projectDescription, projectLink1, projectLink2);
  }
}
///////////////////////////////////////////////
// PARAGRAPH VARIABLES

// -- INTRODUCTION PARAGRAPH VARIABLES -- //
const statements = [
  `Hello! Let me introduce myself.`, 
  `My name is Nathan Cluff.`, 
  `I am a Front-End Developer,`, 
  `who is aspiring to become proficient`, 
  `in both Front & Back-End Development.`, 
  `To navigate this page, you can`, 
  `Scroll with the mouse, keyboard, & finger.`,
  `Thank you for visiting my site.`
];
const introCursor = document.querySelector(`.typing-text--cursor`);
const typingTextContent = document.getElementsByClassName(`typing-text--introduction`)[0];
const introButtons = [...document.querySelectorAll(`.introduction-button`)];
const introClasses = [ `introduction-button--hiddenLeft`, `introduction-button--hiddenDown`, `introduction-button--hiddenRight` ];
// -- ABOUT PARAGRAPH VARIABLES -- //
const missionStatement = [
  `This is my Mission Statement.`,
  `To improve the growth and`,
  `profitability of your organization`,
  `simultaneously with my skillset.`
];
const aboutCursor = document.querySelector(`.about-typing-text--cursor`);
const aboutTypingTextContent = document.getElementsByClassName(`about-typing-text`)[0];
// -- DUAL PARAGRAPH VARIABLES -- //
let intervalName, intervalName2;
///////////////////////////////////////////////
// PARAGRAPH OBJECTS
const paragraph1 = new Paragraph (
   { 
     story: statements, 
     container: typingTextContent, 
     currentStatement: 0, 
     currentCharacter: 0, 
     cursor: introCursor, 
     interval: intervalName 
  } 
);
const paragraph2 = new Paragraph ( 
  { 
    story: missionStatement, 
    container: aboutTypingTextContent, 
    currentStatement: 0, 
    currentCharacter: 0, 
    cursor: aboutCursor, 
    interval: intervalName2 
  } 
);
const showcase = document.querySelectorAll(`.showcase-grid`);
//////////////////
//  -- SKILLS --  //
const html5 = new Skill( { title: `HTML5`, image: `<i class='fab fa-html5'></i>`} );
const css3 = new Skill( { title: `CSS3`, image: `<i class='fab fa-css3-alt'></i>` } );
const javascript = new Skill( { title: `JavaScript`, image: `<i class='fab fa-js-square'></i>` } );
const nodeJS = new Skill( { title: `Node.js`, image: `<i class='fab fa-node-js'></i>` } );
const scss = new Skill( { title: `SCSS`, image: `<i class='fab fa-sass'></i>` } );
const less = new Skill( { title: `Less`, image: `<i class='fab fa-less'></i>` } );
const vue = new Skill( { title: `Vue.js`, image: `<i class='fab fa-vuejs'></i>` } );
const git = new Skill( { title: `Git`, image: `<i class='fab fa-git-square'></i>` } );
const github = new Skill( { title: `Github`, image: `<i class='fab fa-github-square'></i>` } );
const skills = [html5, css3, javascript, nodeJS, scss, less, vue, git, github];
skills.forEach((s, i) => {
  s._produceSkillCard(
    `${s.image}`,
    `${s.title}`,
  );
});
//////////////////
// PROJECTS
const purenspiration = new Project ( {title: `Pure N Spiration`, image: `<img src="/CSS/Images/Computer_Desktop_Image.svg">`, backgroundColor: `#FFD700`, textColor: `#333333`, description: `This is my project`, link: `#`, repository: `https://github.com/ncluff003/PureNSpiration`} );

const projects = [purenspiration];
projects.forEach((p, i) => {
  p._produceProjectCard(
    `${p.image}`,
    `${p.title}`, 
    `${p.backgroundColor}`, 
    `${p.textColor}`,
    `${p.description}`,
    `${p.link}`,
    `${p.repository}`,
  );
});
///////////////////////////////////////////////
// APP CLASS
class App {
  constructor () {
    /////////////////////////////////////////
    //  Site Setup
    this._hideGrids(allGrids);
    this._observeNav();
    this._hideButtons();
    this._watchNav(nav, 0.5, 1);
    paragraph1._startTyping();
    this._revealButton(0);
    this._createDots();
    this._watchDots();
    this._activateDot(0);
    index = 0;
    index2 = 0;
    this._watchCards(showcase[0], skillCards, index);
    this._setUpCards(skillCards, index);
    this._createCardButtonNavigation(showcase[0]);
    this._watchCardButtons(skillCards, showcase[0]);
    this._watchCards(showcase[1], projectCards, index2);
    this._setUpCards(projectCards, index);
    this._createCardButtonNavigation(showcase[1]);
    this._watchCardButtons(projectCards, showcase[1]);
  }
  _goToCard (cardType, index, prevCards, nextCards) {
    let prevCardsReverse = prevCards.reverse();

    prevCardsReverse.forEach ((card, i) => {
      i === 0 ? card.style.transform = `translate(${((300 + ((i + 1) * 15)) * -1 )}% , ${-8}%)` : 
      i > 0 ? card.style.transform = `translate(${((200 + ((i + 1) * 115)) * -1 )}% , ${-8}%)` : 
      '';
    });

    cardType.forEach((card, i) => {
      i - index === 0 ? card.style.transform = `translate(${0}% , ${-8}%)` : 
      i - index === 1  || i - index > 1 ? card.style.transform = `translate(${((100 * ( i - index ) + 200) + ( ( nextCards.indexOf(card) + 1 ) * 15 ))}% , ${-8}%)` : 
      '';
    });
  }
  _prevCard (cardType, index) {
    const frontDoorCards = cardType.slice(index + 1, (cardType.length));
    const backDoorCards = cardType.slice(0, index);
    this._goToCard(cardType, index, backDoorCards, frontDoorCards);
    return index;
  }
  _nextCard (cardType, index) {
    const frontDoorCards = cardType.slice(index + 1, (cardType.length));
    const backDoorCards = cardType.slice(0, index);
    this._goToCard(cardType, index, backDoorCards, frontDoorCards);       
    return index;
  }
  _watchCards (cardContainer, cardType, index) {
    document.addEventListener(`keyup`, (e) => {
      if (e.key === `ArrowLeft`) {
        if ( cardContainer.getBoundingClientRect().top <= 523 && cardContainer.getBoundingClientRect().bottom >= 686 ) {
          index <= 0 && cardContainer === showcase[0] ? index = cardType.length - 1 : index--;
          index <= -1 ? index = cardType.length - 1 : index >= cardType.length ? index = 0 : index;
          cardType === skillCards ? this._prevCard(cardType, index) : cardType === projectCards ? this._prevCard(cardType, index) : '';
          cardType === projectCards ? projects[projects.length -1]._getProjectCount(index) : e.key;
          console.log(index);
        }
      }
      if (e.key === `ArrowRight`) {
        if ( cardContainer.getBoundingClientRect().top <= 523 && cardContainer.getBoundingClientRect().bottom >= 686 ){
        index >= cardType.length - 1 ? index = 0 : index++;
        index <= -1 ? index = cardType.length - 1 : index >= cardType.length ? index = 0 : index;
        cardType === skillCards ? this._nextCard(cardType, index) : cardType === projectCards ? this._nextCard(cardType, index) : '';
        cardType === projectCards ? projects[projects.length -1]._getProjectCount(index) : e.key;
        console.log(index);
        }
      }
    });
    return index;
  }
  _setUpCards (cardType, index) {
    
    if (cardType === projectCards) {
      projects[projects.length - 1]._getProjectCount(index);
    }
    cardType.forEach((card, i) => {
      i - index === 0 ? card.style.transform = `translate(${0}% , ${-8}%)` : 
      i - index === 1 || i - index > 1 ? card.style.transform = `translate(${((100 * ( i - index ) + 200) + (i * 15))}% , ${-8}%)` : 
      card.style.transform = `translate(${((100 * ( i + index ) + 200) + (index * 15)) * -1 }% , ${-8}%)`;
    });
  }
  _watchCardButtons (cardType, cardContainer) {
    cardContainer.addEventListener(`click`, (e) => {
      e.preventDefault();
      const clickedButton = e.target.closest(`.button`);
      
      if (!clickedButton) return;

      cardType === skillCards && clickedButton.classList.contains(`card-button-left`) ? index-- : 
      cardType === skillCards && clickedButton.classList.contains(`card-button-right`) ? index++ : 
      index = index;

      cardType === projectCards && clickedButton.classList.contains(`card-button-left`) ? index2-- : 
      cardType === projectCards && clickedButton.classList.contains(`card-button-right`) ? index2++ : 
      index2;

      index <= -1 ? index = cardType.length - 1 : index >= cardType.length ? index = 0 : index;
      index2 <= -1 ? index2 = cardType.length - 1 : index2 >= cardType.length ? index2 = 0 : index2;

      cardType === skillCards && clickedButton.classList.contains(`card-button-left`) ? this._prevCard(cardType, index) : 
      cardType === skillCards && clickedButton.classList.contains(`card-button-right`) ? this._nextCard(cardType, index) : 
      index;

      if (cardType === projectCards && clickedButton.classList.contains(`card-button-left`)){
        this._prevCard(cardType, index2);
        purenspiration._getProjectCount(index2);
      }
      if (cardType === projectCards && clickedButton.classList.contains(`card-button-right`)){
        this._nextCard(cardType, index2);
        purenspiration._getProjectCount(index2);
      }
    });
  }
  _createCardButtonNavigation (cardContainer) {
    const buttonLeft = document.createElement('button');
    const buttonRight = document.createElement(`button`);
    buttonLeft.classList.add(`button`, `card-button-left`);
    buttonRight.classList.add(`button`, `card-button-right`);
    buttonLeft.insertAdjacentHTML(`beforeend`, `<i class="fas fa-arrow-left"></img>`);
    buttonRight.insertAdjacentHTML(`beforeend`, `<i class="fas fa-arrow-right"></i>`);
    cardContainer.insertAdjacentElement(`afterbegin`, buttonLeft);
    cardContainer.insertAdjacentElement(`beforeend`, buttonRight);
  }
  _createDots () {
    slideOptions.forEach((_, i) => {
      optionNavContainer.insertAdjacentHTML(`beforeend`, `<button class="about-me-container__option-navigation__dot" data-sliderOption="${i}"></button>`);
    });
  }
  _activateDot (slide) {
    document.querySelectorAll(`.about-me-container__option-navigation__dot`).forEach( (dot) => {
      dot.classList.remove(`about-me-container__option-navigation__dot--active`);
    });
    
    document.querySelector(`.about-me-container__option-navigation__dot[data-sliderOption="${slide}"]`).classList.add(`about-me-container__option-navigation__dot--active`);
  }
  _goToSlide (slide) {
    slideOptions.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }
  _watchDots () {
    optionNavContainer.addEventListener(`click`, (e) => {
      if (e.target.classList.contains(`about-me-container__option-navigation__dot`)){
        const slide = e.target.dataset.slideroption;
        this._goToSlide(slide);
        this._activateDot(slide);
      }
    });
  }
  _handleHover (e) {
    if(e.target.classList.contains('navigation__links--linkItem__link')) {
      const hovered = e.target;
      const siblings = hovered.closest(`.navigation`).querySelectorAll('.navigation__links--linkItem__link');
      siblings.forEach(el => {
        if(el !== hovered) {
          el.style.opacity = this;
        }
      });
    } 
  }
  _watchNav (navigation, opacity1, opacity2) {
  // Used Bind Method To Pass An "Argument" Into A Handler Function
    navigation.addEventListener('mouseover', this._handleHover.bind(opacity1));
    navigation.addEventListener('mouseout', this._handleHover.bind(opacity2));
  }
  _stickyNav (entries) {
    const [entry] = entries;
    if(!entry.isIntersecting) {
      nav.classList.add('navigation--sticky');
      for(const link of links) {
        link.classList.add(`navigation__links--linkItem__link--sticky`);
      }
    }
    else {
      nav.classList.remove('navigation--sticky');
      for(const link of links) {
        link.classList.remove(`navigation__links--linkItem__link--sticky`);
      }
    }
  }
  _observeNav () {
    const observer = new IntersectionObserver ( this._stickyNav, observerOptions );
    observer.observe(introduction);
  }
  _revealButton () {
    const revealButtonInterval = setInterval(() => {
      if ( paragraph1.story === statements && paragraph1.currentStatement === 1 ) {
        console.log(paragraph1.currentStatement);
        introButtons[ paragraph1.currentStatement -1 ].classList.remove( introClasses[ paragraph1.currentStatement -1 ]);
      }
      if ( paragraph1.story === statements && paragraph1.currentStatement === 4 ) {
        console.log(paragraph1.currentStatement);
        introButtons[ paragraph1.currentStatement -3 ].classList.remove( introClasses[ paragraph1.currentStatement -3 ]);
      }
      if ( paragraph1.story === statements && paragraph1.currentStatement === 7 ) {
        console.log(paragraph1.currentStatement);
        introButtons[ paragraph1.currentStatement -5 ].classList.remove( introClasses[ paragraph1.currentStatement -5 ]);
        setTimeout(() => {
          clearInterval(revealButtonInterval);
          console.log(`Interval Cleared!`);
        }, 1000);
      }
    }, 2900);
  }
  _hideButtons () {
    // Hiding Introduction Buttons To Start
    for (let [index, button] of introButtons.entries()) {
      button.classList.add(`${introClasses[index]}`);
    }
  }
  _revealSection (entries, observer) {
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('grid-container--hidden');
    if (entry.target === allGrids[1]){
      paragraph2._startTyping();
    }
    observer.unobserve(entry.target);
  }
  _hideGrids (grids) {
    for(const grid of grids) {
      if(grid === grids[0]) {
        continue;
      }
      const sectionObserver = new IntersectionObserver ( this._revealSection, revealSectionOptions );
      sectionObserver.observe(grid);
      grid.classList.add(`grid-container--hidden`);
    }
  }
}
///////////////////////////////////////////////
// APP VARIABLES
let index, index2;
const allGrids = [...document.querySelectorAll(`.grid-container`)];
const nav = document.querySelector(`.navigation`);
const links = [...document.querySelectorAll(`.navigation__links--linkItem__link`)];
const navHeight = nav.getBoundingClientRect().height;
const introduction = document.getElementsByClassName(`grid-container`)[0];
const slideOptions = document.querySelectorAll(`.about-me-container__option-slider--option`);
const optionNavContainer = document.querySelector(`.about-me-container__option-navigation`);
const skillCards = [...document.querySelectorAll(`.skill-card`)];
const projectCards = [...document.querySelectorAll(`.project-card`)];
const revealSectionOptions = {
  root: null,
  threshold: 0.35,
};
const observerOptions = {
  root: null, // null wil make the viewport the root.
  threshold: 0,  // threshold of the root element which the function will be called.
  rootMargin: `-${navHeight + 360}px`
};
///////////////////////////////////////////////
// APP
const app = new App ();