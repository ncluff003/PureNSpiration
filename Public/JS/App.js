////////////////////////////////////////////////
// IMPORTED VALUES
// import { myCalendar } from './Calendar.js';
import * as Projects from './Projects';
import * as Utility from './Utility';
import * as API from './API-Calls';
import * as About from './Pages/About';
import * as Interests from './Pages/About-Interests';
import * as Skills from './Pages/About-Skills';
import * as Blog from './Pages/Blog';
import * as Project from './Pages/Project';

///////////////////////////////////////////////
// APP CLASS
(function () {
  class App {
    constructor() {
      this.adjustLinkContainer();
      this.watchToggle();
      this._fetchLatestBlogPost();
      this._fetchLatestProject();
      About.watchAbout();
      Project.watchProjectPage();
      Blog.watchBlog();
      // API.fetchSkills();
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
      timeToggle.addEventListener('click', async (e) => {
        e.preventDefault();
        grid.classList.toggle('day');
        grid.classList.toggle('night');
        sunIcon.classList.contains('closed') ? Utility.replaceClassName(sunIcon, `closed`, `open`) : Utility.replaceClassName(sunIcon, `open`, `closed`);
        moonIcon.classList.contains('closed') ? Utility.replaceClassName(moonIcon, `closed`, `open`) : Utility.replaceClassName(moonIcon, `open`, `closed`);
        if (window.location.href === `http://127.0.0.1:3333/about/interests`) {
          Interests.watchInterestPipe();
        }
      });
    }

    async _fetchLatestBlogPost() {
      if (!window.location.href.startsWith(`http://127.0.0.1:3333/blog/posts/`)) {
        let post = await API.fetchLatestPost();
        Blog.renderBlogPost(post);
      }
    }

    async _fetchLatestProject() {
      let project = await API.fetchLatestProject();
      Project.renderLatestProject(project);
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
