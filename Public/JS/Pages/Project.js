export const watch = () => {
  const projectContainer = document.querySelector('.flex-container--projects');
  const projects = document.querySelectorAll('.project-container');
  projects.forEach((project, i) => {
    project.style.transform = `translate(${0}%, ${100 * i}%)`;
  });

  projectContainer.addEventListener(`scroll`, (e) => {
    e.preventDefault();
    console.log(projectContainer.scrollTop, projectContainer.scrollY);
  });
};
