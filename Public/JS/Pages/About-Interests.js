import * as Utility from './../Utility';
import * as API from './../API-Calls';

const buildInterests = (interest) => {
  const container = document.querySelector('.interest-current');
  console.log(interest);
  // svg.icon(class=`icon-PureNSpiration_Logo--night`)
  // use(xlink:href=`/DIST/CSS/symbol-defs.svg#icon-PureNSpiration_Logo--night`)
  if (interest.vendor === `icomoon`) {
    const SVG = document.createElement('svg');
    SVG.classList.add(`icon`);
    SVG.classList.add(`${interest.icon}`);
    const USE = document.createElement('use');
    USE.setAttribute(`xlink:href`, `/DIST/CSS/symbol-defs.svg#${interest.icon}`);
    Utility.insertElement(`beforeend`, SVG, USE);
    Utility.insertElement(`beforeend`, container, SVG);
  }
  if (interest.vendor === `fontAwesome`) {
    const i = document.createElement('i');
    Utility.addClasses(i, [`fas`, `fa-${interest.icon}`, `interest`, `r__interest`]);
    Utility.insertElement(`beforeend`, container, i);
    console.log(i);
  }
};

export const watchInterests = async () => {
  if (window.location.href === `http://127.0.0.1:3333/about/interests`) {
    console.log(`Interesting...`);
    const myInterests = await API.fetchInterests();
    console.log(myInterests);
    const iconPageTitle = document.querySelector('.icon-container__text');
    iconPageTitle.textContent = myInterests.data.interests.title;
    const interestsQuotes = document.querySelectorAll('.interests-container__quote-container__quote');
    interestsQuotes[0].textContent = myInterests.data.interests.interestsText.text;
    interestsQuotes[1].textContent = myInterests.data.interests.interestsText.author;
    const interests = myInterests.data.interests.interests;

    // interests.forEach((interest) => {
    //   buildInterests(interest);
    // });
  }
};
