import * as Utility from './../Utility';

export const watch = () => {
  const projectContainer = document.querySelector('.flex-container--projects');
  const projects = document.querySelectorAll('.project-container');
  const projectNavigationContainer = document.createElement(`aside`);
  Utility.addClasses(projectNavigationContainer, [`flex-container--projects__project-navigation`, `r__flex-container--projects__project-navigation`]);
  const projectUpArrow = document.createElement('i');
  const projectDownArrow = document.createElement('i');
  Utility.addClasses(projectUpArrow, [`fas`, `fa-angle-up`, `up`, `r__up`]);
  Utility.addClasses(projectDownArrow, [`fas`, `fa-angle-down`, `down`, `r__down`]);

  Utility.insertElements(`beforeend`, projectNavigationContainer, [projectUpArrow, projectDownArrow]);

  projects.forEach((project, i) => {
    project.style.transform = `translate(${0}%, ${100 * i}%)`;
    const button = document.createElement('button');
    button.dataset.project = i;
    Utility.addClasses(button, [`flex-container--projects__project-navigation__button`, `r__flex-container--projects__project-navigation__button`]);
    Utility.insertElement(`beforebegin`, projectDownArrow, button);
    button.addEventListener(`click`, (e) => {
      e.preventDefault();
      projects.forEach((project, i) => {
        project.style.transform = `translate(${0}%, ${100 * i + Number(button.dataset.project) * -100}%)`;
      });
    });
  });

  Utility.insertElement(`beforeend`, projectContainer, projectNavigationContainer);

  if (projectContainer) {
    projectContainer.addEventListener(`scroll`, (e) => {
      e.preventDefault();
      console.log(projectContainer.scrollTop, projectContainer.scrollY);
    });
  }
};
