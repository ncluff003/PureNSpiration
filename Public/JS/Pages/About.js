import * as Utility from './../Utility';
import * as Foundation from './About-Foundation';
import * as Interests from './About-Interests';
import * as Skills from './About-Skills';

export const watchAbout = async () => {
  console.log(`Watching...`);
  const connectButton = document.querySelector('.navigation-connection-button');
  if (connectButton) {
    const connectButtonIcon = connectButton.firstChild;
    const connectNavigation = document.querySelector('.connect--navigation');
    connectButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      connectButtonIcon.classList.contains('fa-angle-left')
        ? Utility.replaceClassName(connectButtonIcon, `fa-angle-left`, `fa-angle-right`)
        : Utility.replaceClassName(connectButtonIcon, `fa-angle-right`, `fa-angle-left`);
      connectNavigation.classList.contains(`pseudo-after-full-width`)
        ? Utility.replaceClassName(connectNavigation, `pseudo-after-full-width`, `pseudo-after-zero-width`)
        : Utility.replaceClassName(connectNavigation, `pseudo-after-zero-width`, `pseudo-after-full-width`);
    });
  }

  Foundation.watchFoundation();
  Interests.watchInterests();
  let chart = await Skills.watchSkills();

  if (window.location.href === `http://127.0.0.1:3333/about/skills`) {
    console.log(chart, chart.config);
    const timeToggle = document.querySelector('.time-toggle');
    const grid = document.querySelector('.grid');
    timeToggle.addEventListener('click', (e) => {
      if (grid.classList.contains('day')) {
        chart.config.options.scales.x.ticks.color = `#00b358`;
        // chart.config.options.scales.y.ticks.color = `#ff3d00`;
        chart.config.options.scales.y.ticks.color = `#FFD700`;
        chart.update();
      } else {
        chart.config.options.scales.x.ticks.color = `#FFD700`;
        chart.config.options.scales.y.ticks.color = `#00b358`;
        console.log(chart);
        chart.update();
      }
    });
  }
};
