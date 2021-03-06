import * as Utility from './../Utility';
import * as API from './../API-Calls';

const flowLeft = (interests, index) => {
  interests.forEach((interest, i) => {
    interest.style.transform = `translate(${i * 250 + index * 250}%, ${-50}%)`;
  });

  // SET UP LIKE THIS IF LARGE TABLET IN LANDSCAPE
  let largeTabLandQuery = window.matchMedia(`(max-width: 1400px) and (max-height: 1050px)`);
  let largeTabPortQuery = window.matchMedia(`(max-width: 1050px) and (max-height: 1400px)`);
  let smallTabLandQuery = window.matchMedia(`(max-width: 1050px) and (max-height: 800px)`);
  if (largeTabLandQuery.matches || largeTabPortQuery.matches) {
    interests.forEach((interest, i) => {
      interest.style.transform = `translate(${-10 + i * 250 + index * 250}%, ${-50}%)`;
    });
  }
  if (smallTabLandQuery.matches) {
    interests.forEach((interest, i) => {
      interest.style.transform = `translate(${-15 + i * 250 + index * 250}%, ${-50}%)`;
    });
  }
};

const flowRight = (interests, index) => {
  interests.forEach((interest, i) => {
    interest.style.transform = `translate(${i * 250 + index * 250}%, ${-50}%)`;
  });

  // SET UP LIKE THIS IF LARGE TABLET IN LANDSCAPE
  let largeTabLandQuery = window.matchMedia(`(max-width: 1400px) and (max-height: 1050px)`);
  let largeTabPortQuery = window.matchMedia(`(max-width: 1050px) and (max-height: 1400px)`);
  let smallTabLandQuery = window.matchMedia(`(max-width: 1050px) and (max-height: 800px)`);
  if (largeTabLandQuery.matches || largeTabPortQuery.matches) {
    interests.forEach((interest, i) => {
      interest.style.transform = `translate(${-10 + i * 250 + index * 250}%, ${-50}%)`;
    });
  }
  if (smallTabLandQuery.matches) {
    interests.forEach((interest, i) => {
      interest.style.transform = `translate(${-15 + i * 250 + index * 250}%, ${-50}%)`;
    });
  }
};

const watchFlowButtons = (left, right, interests, index) => {
  left.addEventListener('click', (e) => {
    e.preventDefault();
    index--;
    if (index * -1 === interests.length) index = interests.length * -1 + 1;
    flowLeft(interests, index);
  });
  right.addEventListener('click', (e) => {
    e.preventDefault();
    index++;
    if (index >= 0) index = 0;
    flowRight(interests, index);
  });
};

const setupInterestSlider = (interests) => {
  interests.forEach((interest, i) => {
    interest.style.transform = `translate(${i * 250}%, ${-50}%)`;
  });

  let largeTabLandQuery = window.matchMedia(`(max-width: 1400px) and (max-height: 1050px)`);
  let largeTabPortQuery = window.matchMedia(`(max-width: 1050px) and (max-height: 1400px)`);
  let smallTabLandQuery = window.matchMedia(`(max-width: 1050px) and (max-height: 800px)`);
  if (largeTabLandQuery.matches || largeTabPortQuery.matches) {
    interests.forEach((interest, i) => {
      interest.style.transform = `translate(${i * 250 - 10}%, ${-50}%)`;
    });
  }
  if (smallTabLandQuery.matches) {
    interests.forEach((interest, i) => {
      interest.style.transform = `translate(${i * 250 - 15}%, ${-50}%)`;
    });
  }
};

export const watchInterestPipe = () => {
  const testContent = document.querySelector('.grid');
  let isNight = false;
  testContent.classList.contains('night') ? (isNight = true) : (isNight = false);
  console.log(isNight);
  const cylinderImage = document.querySelector('.cylinder-wall-image');
  isNight === true ? (cylinderImage.src = `/DIST/CSS/Images/Cut-Out-Cylinder3.svg`) : (cylinderImage.src = `/DIST/CSS/Images/Cut-Out-Cylinder2.svg`);
};

const checkTimeOfDayForInterests = () => {
  const testContent = document.querySelector('.grid');
  let isNight = false;
  testContent.classList.contains('night') ? (isNight = true) : (isNight = false);
  console.log(isNight);
  const cylinderImage = document.querySelector('.cylinder-wall-image');
  isNight === true ? (cylinderImage.src = `/DIST/CSS/Images/Cut-Out-Cylinder3.svg`) : (cylinderImage.src = `/DIST/CSS/Images/Cut-Out-Cylinder2.svg`);
};

export const watchInterests = async () => {
  if (window.location.href === `http://127.0.0.1:3333/about/interests`) {
    console.log(`Interesting...`);
    const myInterests = await API.fetchInterests();
    console.log(myInterests);
    checkTimeOfDayForInterests();
    const iconPageTitle = document.querySelector('.icon-container__text');
    iconPageTitle.textContent = myInterests.data.interests.title;
    const interestsQuote = document.querySelector('.interests-container__quote-container__quote');
    const interestsQuoteAuthor = document.querySelector('.interests-container__quote-container__quote__author');
    interestsQuote.textContent = myInterests.data.interests.interestsText.text;
    interestsQuoteAuthor.textContent = myInterests.data.interests.interestsText.author;
    const interests = document.querySelectorAll('.interest-icon-container');
    const flowLeftButton = document.querySelector('.button-flow-left');
    const flowRightButton = document.querySelector('.button-flow-right');
    let interestIndex = 0;
    setupInterestSlider(interests);
    watchFlowButtons(flowLeftButton, flowRightButton, interests, interestIndex);
  }
};
