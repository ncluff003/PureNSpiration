import * as Utility from './../Utility';

export const watch = () => {
  const navigationButton = document.querySelector('.button--navigation');
  const navigationHeader = document.querySelector('.navigation-header');
  const navigationCloseIcon = document.querySelector('.navigation-close-icon');

  navigationButton.addEventListener('click', (e) => {
    Utility.toggleClass(navigationHeader, `navigation-header--open`);
  });

  navigationCloseIcon.addEventListener('click', (e) => {
    Utility.toggleClass(navigationHeader, `navigation-header--open`);
  });

  const links = document.querySelectorAll('.navigation-header__container__ring__navigation__link');
  const navigationRing = document.querySelector('.navigation-header__container__ring');

  const pentagon = document.querySelector('.pentagon');

  links.forEach((link, i) => {
    link.addEventListener(`click`, (e) => {
      e.preventDefault();
      if (link.textContent === `Home`) {
        console.log(link.textContent);
        Utility.removeClasses(navigationRing, [`rotate-zero`, `rotate-seventy-two`, `rotate-one-forty-four`, `rotate-two-sixteen`, `rotate-two-eighty-eight`]);
        Utility.removeClasses(pentagon, [`rotate-zero`, `rotate-seventy-two`, `rotate-one-forty-four`, `rotate-two-sixteen`, `rotate-two-eighty-eight`]);
        links.forEach((link) => Utility.removeClasses(link, [`clicked`]));
        Utility.addClasses(navigationRing, [`rotate-zero`]);
        Utility.addClasses(pentagon, [`rotate-zero`]);
        Utility.toggleClasses(link, [`clicked`]);
      } else if (link.textContent === `About`) {
        Utility.removeClasses(navigationRing, [`rotate-zero`, `rotate-seventy-two`, `rotate-one-forty-four`, `rotate-two-sixteen`, `rotate-two-eighty-eight`]);
        Utility.removeClasses(pentagon, [`rotate-zero`, `rotate-seventy-two`, `rotate-one-forty-four`, `rotate-two-sixteen`, `rotate-two-eighty-eight`]);
        Utility.addClasses(navigationRing, [`rotate-seventy-two`]);
        Utility.addClasses(pentagon, [`rotate-seventy-two`]);
        links.forEach((link) => Utility.removeClasses(link, [`clicked`]));
        Utility.toggleClasses(link, [`clicked`]);
      } else if (link.textContent === `Portfolio`) {
        Utility.removeClasses(navigationRing, [`rotate-zero`, `rotate-seventy-two`, `rotate-one-forty-four`, `rotate-two-sixteen`, `rotate-two-eighty-eight`]);
        Utility.removeClasses(pentagon, [`rotate-zero`, `rotate-seventy-two`, `rotate-one-forty-four`, `rotate-two-sixteen`, `rotate-two-eighty-eight`]);
        Utility.addClasses(navigationRing, [`rotate-one-forty-four`]);
        Utility.addClasses(pentagon, [`rotate-one-forty-four`]);
        links.forEach((link) => Utility.removeClasses(link, [`clicked`]));
        Utility.toggleClasses(link, [`clicked`]);
      } else if (link.textContent === `Resume`) {
        Utility.removeClasses(navigationRing, [`rotate-zero`, `rotate-seventy-two`, `rotate-one-forty-four`, `rotate-two-sixteen`, `rotate-two-eighty-eight`]);
        Utility.removeClasses(pentagon, [`rotate-zero`, `rotate-seventy-two`, `rotate-one-forty-four`, `rotate-two-sixteen`, `rotate-two-eighty-eight`]);
        Utility.addClasses(navigationRing, [`rotate-two-sixteen`]);
        Utility.addClasses(pentagon, [`rotate-two-sixteen`]);
        links.forEach((link) => Utility.removeClasses(link, [`clicked`]));
        Utility.toggleClasses(link, [`clicked`]);
      } else if (link.textContent === `Contact`) {
        Utility.removeClasses(navigationRing, [`rotate-zero`, `rotate-seventy-two`, `rotate-one-forty-four`, `rotate-two-sixteen`, `rotate-two-eighty-eight`]);
        Utility.removeClasses(pentagon, [`rotate-zero`, `rotate-seventy-two`, `rotate-one-forty-four`, `rotate-two-sixteen`, `rotate-two-eighty-eight`]);
        Utility.addClasses(navigationRing, [`rotate-two-eighty-eight`]);
        Utility.addClasses(pentagon, [`rotate-two-eighty-eight`]);
        links.forEach((link) => Utility.removeClasses(link, [`clicked`]));
        Utility.toggleClasses(link, [`clicked`]);
      }
    });
  });

  const buttons = document.querySelectorAll('.button--cta');
  const homeCTA = buttons[0];
  homeCTA.addEventListener(`click`, (e) => {
    links[2].click();
  });
};