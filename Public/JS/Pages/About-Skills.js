import * as API from './../API-Calls';

export const watchSkills = async () => {
  if (window.location.href === `http://127.0.0.1:3333/about/skills`) {
    console.log(`Skills`);
    const mySkills = await API.fetchSkills();
    console.log(mySkills);
    const iconTitle = document.querySelector('.icon-container__text');
    iconTitle.textContent = mySkills.title;
  }
};
