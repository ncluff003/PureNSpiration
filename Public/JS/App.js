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
import * as Contact from './Pages/Contact';

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
      Contact.watchContactForm();
      this._watchMobileNavigation();
      // this._watchToAdaptGrid();
      // API.fetchSkills();
    }

    adjustLinkContainer() {
      const linkContainer = document.querySelector('.blog-link-container');
      if (linkContainer) {
        console.log(linkContainer);
        let width = linkContainer.getBoundingClientRect().width;
        let height = linkContainer.getBoundingClientRect().height;
        console.log(height);
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

    _watchMobileNavigation() {
      const mobileNavButton = document.querySelector('.r__button--mobile-navigation');
      const mobileNavButtonIcon = document.querySelector('.r__button--mobile-navigation__icon');
      const mobileNavigation = document.querySelector('.r__navigation-container');

      if (mobileNavButton && mobileNavigation) {
        mobileNavButton.addEventListener('click', (e) => {
          e.preventDefault();
          mobileNavButton.classList.toggle('r__navigation-open');
          mobileNavButtonIcon.classList.toggle('r__navigation-open__icon');
          mobileNavigation.classList.toggle('r__navigation-container__open');
        });
      }
    }

    _listenForQueryChanges(query, element, removedClasses, addedClasses) {
      console.log(query);
      console.log(`I am listening to ${query.media}`);
      if (query.matches) {
        removedClasses.forEach((name) => {
          grid.classList.remove(name);
          grid.classList.remove(`r__${name}`);
        });
        Utility.addClasses(element, addedClasses);
      }
    }

    // _watchToAdaptGrid() {
    //   const classNames = [`gridTV`, `gridDesktop`, `gridMobileLand`, `gridMobilePort`, `gridTabLand`, `gridTabPort`];
    //   const grid = document.querySelector('.grid');
    //   console.log(window);

    //   // TV QUERY
    //   let tvQuery = window.matchMedia(`(min-width: 2500px)`);

    //   // DESKTOP QUERY
    //   let desktopQuery = window.matchMedia(`(min-width: 1401px) and (min-height: 1051px)`);

    //   // LARGE QUERIES
    //   let largeTabLandQuery = window.matchMedia(`(max-width: 1400px) and (max-height: 1050px)`);
    //   let largeTabPortQuery = window.matchMedia(`(max-width: 1050px) and (max-height: 1400px)`);
    //   let largeMobileLandQuery = window.matchMedia(`(max-width: 930px) and (max-height: 425px)`);
    //   let largeMobilePortQuery = window.matchMedia(`(max-width: 425px) and (max-height: 930px)`);

    //   // SMALL QUERIES
    //   let smallTabLandQuery = window.matchMedia(`(max-width: 1050px) and (max-height: 800px)`);
    //   let smallTabPortQuery = window.matchMedia(`(max-width: 800px) and (max-height: 1050px)`);
    //   let smallMobileLandQuery = window.matchMedia(`(max-width: 800px) and (max-height: 375px)`);
    //   let smallMobilePortQuery = window.matchMedia(`(max-width: 375px) and (max-height: 800px)`);

    //   const screen = {
    //     smallMobilePort: [window.matchMedia(`(max-width: 375px) and (max-height: 800px)`), [`gridMobilePort`, `r__gridMobilePort`]],
    //     smallMobileLand: [window.matchMedia(`(max-width: 800px) and (max-height: 375px)`), [`gridMobileLand`, `r__gridMobileLand`]],
    //     largeMobilePort: [window.matchMedia(`(max-width: 425px) and (max-height: 930px)`), [`gridMobilePort`, `r__gridMobilePort`]],
    //     largeMobileLand: [window.matchMedia(`(max-width: 930px) and (max-height: 425px)`), [`gridMobileLand`, `r__gridMobileLand`]],
    //     smallTabPort: [window.matchMedia(`(max-width: 800px) and (max-height: 1050px)`), [`gridTabPort`, `r__gridTabPort`]],
    //     smallTabLand: [window.matchMedia(`(max-width: 1050px) and (max-height: 800px)`), [`gridTabLand`, `r__gridTabLand`]],
    //     largeTabPort: [window.matchMedia(`(max-width: 1050px) and (max-height: 1400px)`), [`gridTabPort`, `r__gridTabPort`]],
    //     largeTabLand: [window.matchMedia(`(max-width: 1400px) and (max-height: 1050px)`), [`gridTabLand`, `r__gridTabLand`]],
    //     desktopQuery: [window.matchMedia(`(min-width: 1401px) and (min-height: 1051px)`), [`gridDesktop`, `r__gridDesktop`]],
    //     tvQuery: [window.matchMedia(`(min-width: 2500px)`), [`gridTV`, `r__gridTV`]],
    //   };

    //   for (let [scr, mq] of Object.entries(screen)) {
    //     if (mq)
    //       mq[0].addEventListener('change', (e) => {
    //         console.log(mq[0], mq[1]);
    //         if (e.matches) {
    //           this._listenForQueryChanges(mq[0], grid, classNames, mq[1]);
    //         }
    //       });
    //   }
    //   // LISTENERS FOR QUERIES
    //   // smallMobilePortQuery.addEventListener(
    //   //   'change',
    //   //   this._listenForQueryChanges(smallMobilePortQuery, grid, classNames, [`gridMobilePort`, `r__gridMobilePort`]),
    //   // );
    //   // smallMobileLandQuery.addEventListener(
    //   //   'change',
    //   //   this._listenForQueryChanges(smallMobileLandQuery, grid, classNames, [`gridMobileLand`, `r__gridMobileLand`]),
    //   // );
    //   // smallTabPortQuery.addEventListener('change', this._listenForQueryChanges(smallTabPortQuery, grid, classNames, [`gridTabPort`, `r__gridTabPort`]));
    //   // smallTabLandQuery.addEventListener('change', this._listenForQueryChanges(smallTabLandQuery, grid, classNames, [`gridTabLand`, `r__gridTabLand`]));
    //   // largeMobilePortQuery.addEventListener(
    //   //   'change',
    //   //   this._listenForQueryChanges(largeMobilePortQuery, grid, classNames, [`gridMobilePort`, `r__gridMobilePort`]),
    //   // );
    //   // largeMobileLandQuery.addEventListener(
    //   //   'change',
    //   //   this._listenForQueryChanges(largeMobileLandQuery, grid, classNames, [`gridMobileLand`, `r__gridMobileLand`]),
    //   // );
    //   // largeTabPortQuery.addEventListener('change', this._listenForQueryChanges(largeTabPortQuery, grid, classNames, [`gridTabPort`, `r__gridTabPort`]));
    //   // largeTabLandQuery.addEventListener('change', this._listenForQueryChanges(largeTabLandQuery, grid, classNames, [`gridTabLand`, `r__gridTabLand`]));

    //   // tvQuery.addEventListener('change', (e) => {
    //   //   console.log(e.matches, e);
    //   //   if (e.matches) {
    //   //     classNames.forEach((name) => {
    //   //       grid.classList.remove(name);
    //   //       grid.classList.remove(`r__${name}`);
    //   //     });
    //   //     Utility.addClasses(grid, [`gridTV`, `r__gridTV`]);
    //   //   }
    //   // });

    //   // desktopQuery.addEventListener('change', (e) => {
    //   //   console.log(e.matches, e);
    //   //   if (e.matches) {
    //   //     classNames.forEach((name) => {
    //   //       grid.classList.remove(name);
    //   //       grid.classList.remove(`r__${name}`);
    //   //     });

    //   //     Utility.addClasses(grid, [`gridDesktop`, `r__gridDesktop`]);
    //   //   }
    //   // });

    //   // smallMobilePortQuery.addEventListener(
    //   //   'change',
    //   //   this._listenForQueryChanges(smallMobilePortQuery, grid, classNames, [`gridMobilePort`, `r__gridMobilePort`]),
    //   // );
    //   // smallMobileLandQuery.addEventListener(
    //   //   'change',
    //   //   this._listenForQueryChanges(smallMobileLandQuery, grid, classNames, [`gridMobileLand`, `r__gridMobileLand`]),
    //   // );
    //   // smallTabPortQuery.addEventListener('change', this._listenForQueryChanges(smallTabPortQuery, grid, classNames, [`gridTabPort`, `r__gridTabPort`]));
    //   // smallTabLandQuery.addEventListener('change', this._listenForQueryChanges(smallTabLandQuery, grid, classNames, [`gridTabLand`, `r__gridTabLand`]));
    //   // largeMobilePortQuery.addEventListener(
    //   //   'change',
    //   //   this._listenForQueryChanges(largeMobilePortQuery, grid, classNames, [`gridMobilePort`, `r__gridMobilePort`]),
    //   // );
    //   // largeMobileLandQuery.addEventListener(
    //   //   'change',
    //   //   this._listenForQueryChanges(largeMobileLandQuery, grid, classNames, [`gridMobileLand`, `r__gridMobileLand`]),
    //   // );
    //   // largeTabPortQuery.addEventListener('change', this._listenForQueryChanges(largeTabPortQuery, grid, classNames, [`gridTabPort`, `r__gridTabPort`]));
    //   // largeTabLandQuery.addEventListener('change', this._listenForQueryChanges(largeTabLandQuery, grid, classNames, [`gridTabLand`, `r__gridTabLand`]));
    //   // desktopQuery.addEventListener('change', this._listenForQueryChanges(desktopQuery, grid, classNames, [`gridDesktop`, `r__gridDesktop`]));
    //   // tvQuery.addEventListener('change', this._listenForQueryChanges(tvQuery, grid, classNames, [`gridTV`, `r__gridTV`]));
    // }
  }
  ///////////////////////////////////////////////
  // APP
  const grid = document.querySelector('.grid');
  const timeToggle = document.querySelector('.time-toggle');
  const sunIcon = document.querySelector('.time-toggle__switch__icon--sun');
  const moonIcon = document.querySelector('.time-toggle__switch__icon--moon');
  const app = new App();
})();
