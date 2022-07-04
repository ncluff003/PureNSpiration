import * as Utility from './../Utility';
import * as API from './../API-Calls';

const flowLeft = (interests, index) => {
  interests.forEach((interest, i) => {
    interest.style.transform = `translate(${i * 250 + index * 250}%, ${-50}%)`;
  });
  console.log(index);
};

const flowRight = (interests, index) => {
  interests.forEach((interest, i) => {
    interest.style.transform = `translate(${i * 250 + index * 250}%, ${-50}%)`;
  });
  console.log(index);
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
