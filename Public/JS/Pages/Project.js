const renderLatestLinks = (content) => {
  const links = document.querySelectorAll('.latest-project__project-view__link-container__link');
  const codeLink = links[0];
  const siteLink = links[1];
  if (codeLink) {
    codeLink.href = content.code;
  }
  if (siteLink) {
    siteLink.href = content.link;
  }
};

const renderLatestCoverPhoto = (photo, altText) => {
  const coverPhoto = document.querySelector('.latest-project__project-view__cover-photo__image');
  if (coverPhoto) {
    coverPhoto.src = photo;
    coverPhoto.alt = altText;
  }
};

const renderLatestProjectTitle = (project) => {
  const projectTitle = document.querySelector('.latest-project__project-view__header__title');
  if (projectTitle) {
    projectTitle.textContent = project.title;
  }
};

export const renderLatestProject = (content) => {
  renderLatestProjectTitle(content);
  renderLatestCoverPhoto(content.coverPhoto, content.photoAltText);
  renderLatestLinks(content);
};

export const watchProjectPage = () => {
  if (window.location.href !== `http://127.0.0.1:3333/projects`) return;
  console.log(`Watching Projects...`);
};
