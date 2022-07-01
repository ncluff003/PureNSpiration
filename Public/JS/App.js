////////////////////////////////////////////////
// IMPORTED VALUES
// import { Paragraph } from './Paragraph.js';
// import { Skill } from './skillCard.js';
// import { Project } from './projectCard.js';
// import { emailMe } from './Email';
// import { myCalendar } from './Calendar.js';

///////////////////////////////////////////////
// APP CLASS
(function () {
  class App {
    constructor() {
      this.watchToggle();
    }

    watchToggle() {
      timeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        grid.classList.toggle('day');
        grid.classList.toggle('night');
        if (sunIcon.classList.contains('closed')) {
          sunIcon.classList.remove('closed');
          sunIcon.classList.add('open');
        } else {
          sunIcon.classList.add('closed');
          sunIcon.classList.remove('open');
        }
        if (moonIcon.classList.contains('closed')) {
          moonIcon.classList.remove('closed');
          moonIcon.classList.add('open');
        } else {
          moonIcon.classList.add('closed');
          moonIcon.classList.remove('open');
        }
      });
    }
  }
  ///////////////////////////////////////////////
  // APP
  const grid = document.querySelector('.grid');
  const timeToggle = document.querySelector('.time-toggle');
  const sunIcon = document.querySelector('.time-toggle__switch__icon--sun');
  const moonIcon = document.querySelector('.time-toggle__switch__icon--moon');
  const app = new App();
})();
