import * as Uitlity from './../Utility';
import * as API from './../API-Calls';

export const watchFoundation = async () => {
  if (window.location.href === `http://127.0.0.1:3333/about/foundation`) {
    let foundation = await API.fetchFoundation();
    const foundationInformationTitle = document.querySelector('.foundation-container__information__header__title');
    foundationInformationTitle.textContent = foundation.data.foundation.about[0].title;
    const foundationInformationSubTitle = document.querySelector('.foundation-container__information__header__sub-title');
    foundationInformationSubTitle.textContent = foundation.data.foundation.headline;
    const foundationParagraphs = document.querySelectorAll('.foundation-container__information__paragraph-container__paragraph');
    foundationParagraphs.forEach((paragraph, i) => {
      paragraph.textContent = foundation.data.foundation.about[0].foundationalRoles[i].text;
    });
    const foundationLink = document.querySelector('.foundation-container__information__link');
    foundationLink.href = foundation.data.foundation.profileLinks.Github;
    foundationLink.target = `_blank`;
    console.log(foundation);
  }
};
