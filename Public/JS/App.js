////////////////////////////////////////////////
// IMPORTED VALUES
// import { Paragraph } from './Paragraph.js';
// import { Skill } from './skillCard.js';
// import { Project } from './projectCard.js';
// import { emailMe } from './Email';
// import { myCalendar } from './Calendar.js';
import * as Utility from './Utility';
import * as API from './API-Calls';
import * as Blog from './Blog';

///////////////////////////////////////////////
// APP CLASS
(function () {
  class App {
    constructor() {
      this.adjustLinkContainer();
      this.watchToggle();
      this._fetchLatestBlogPost();
    }

    adjustLinkContainer() {
      const linkContainer = document.querySelector('.blog-link-container');
      if (linkContainer) {
        let width = linkContainer.getBoundingClientRect().width;
        let height = linkContainer.getBoundingClientRect().height;
        console.log(Utility.multiplyTwo(5, 10));
        linkContainer.style.width = `${width + Utility.multiplyTwo(10, 10)}px`;
        linkContainer.style.height = `${height + Utility.multiplyTwo(2, 10)}px`;
      }
    }

    watchToggle() {
      timeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        grid.classList.toggle('day');
        grid.classList.toggle('night');
        sunIcon.classList.contains('closed') ? Utility.replaceClassName(sunIcon, `closed`, `open`) : Utility.replaceClassName(sunIcon, `open`, `closed`);
        moonIcon.classList.contains('closed') ? Utility.replaceClassName(moonIcon, `closed`, `open`) : Utility.replaceClassName(moonIcon, `open`, `closed`);
      });
    }

    async _fetchLatestBlogPost() {
      let post = await API.fetchLatestPost();
      Blog.renderBlogPost(post);
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
