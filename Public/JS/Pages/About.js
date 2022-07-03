import * as Utility from './../Utility';
import * as Foundation from './About-Foundation';

export const watchAbout = () => {
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
};
