const renderLatestLinks = (content) => {
  const links = document.querySelectorAll('.latest-project__project-view__link-container__link');
  const codeLink = links[0];
  const siteLink = links[1];
  codeLink.href = content.code;
  siteLink.href = content.link;
};

const renderLatestCoverPhoto = (photo, altText) => {
  const coverPhoto = document.querySelector('.latest-project__project-view__cover-photo__image');
  coverPhoto.src = photo;
  coverPhoto.alt = altText;
};

const renderLatestProjectTitle = (project) => {
  const projectTitle = document.querySelector('.latest-project__project-view__header__title');
  projectTitle.textContent = project.title;
};

export const renderLatestProject = (content) => {
  renderLatestProjectTitle(content);
  renderLatestCoverPhoto(content.coverPhoto, content.photoAltText);
  renderLatestLinks(content);
  console.log(content);
};
