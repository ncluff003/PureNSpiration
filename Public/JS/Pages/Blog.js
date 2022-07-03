import { DateTime } from 'luxon';
import * as Utility from './../Utility';

const renderPhoto = (container, content) => {
  const image = document.createElement('img');
  Utility.addClasses(image, [`blog-image`, `r__blog-image`]);
  let index = content.file.indexOf(`DIST/CSS`);
  image.src = content.file.slice(index);
  Utility.insertElement(`beforeend`, container, image);
};
const renderVideo = (container, content) => {
  const video = document.createElement('video');
  Utility.addClasses(video, [`blog-video`, `blog-video`]);
  video.controls = true;
  let index = content.file.indexOf(`DIST/CSS`);
  video.src = content.file.slice(index);
  video.type = `video/${content.file.slice(content.file.length - 3)}`;
  Utility.insertElement(`beforeend`, container, video);
};
const renderParagraph = (container, content) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = content.data;
  Utility.addClasses(paragraph, [`blog-paragraph`, `r__blog-paragraph`]);
  Utility.insertElement(`beforeend`, container, paragraph);
};

const renderDate = (content) => {
  let postDate = content.date;
  let year = new Date(postDate).getFullYear();
  let month = new Date(postDate).getMonth() + 1;
  let day = new Date(postDate).getDate();
  let currentDate = DateTime.local(year, month, day);
  currentDate = currentDate.plus({ day: 1 });

  const dates = document.querySelectorAll('.blog-date');
  let date;
  if (dates.length === 1) {
    date = dates[0];
    date.textContent = `${currentDate.toLocaleString(DateTime.DATE_FULL)} `;
  }
};

const renderTitle = (content) => {
  const titles = document.querySelectorAll('.blog-post-title');
  let title;
  if (titles.length === 1) {
    title = titles[0];
    title.textContent = content.title;
  }
};

export const renderBlogPost = (content) => {
  let postContent = document.querySelector('.blog-content');
  renderTitle(content);
  renderDate(content);
  content.content.forEach((piece, i) => {
    if (piece.type === `paragraph`) {
      renderParagraph(postContent, piece);
    }
    if (piece.type === `photo`) {
      renderPhoto(postContent, piece);
    }
    if (piece.type === `video`) {
      renderVideo(postContent, piece);
    }
  });
};
