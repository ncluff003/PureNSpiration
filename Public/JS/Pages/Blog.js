import { DateTime } from 'luxon';
import * as Utility from './../Utility';
import * as API from './../API-Calls';

const renderBlogExerpts = (posts) => {
  const postContainer = document.querySelector('.blog-post-container');
  [...postContainer.childNodes].forEach((child) => child.remove());
  posts.forEach((post, i) => {
    let exerptContainer = document.createElement('section');
    Utility.addClasses(exerptContainer, [`blog-exerpt`, `r__blog-exerpt`]);
    exerptContainer.dataset.id = post.id;

    let exerptHeader = document.createElement('header');
    Utility.addClasses(exerptHeader, [`blog-exerpt__header`, `r__blog-exerpt__header`]);

    let exerptTitle = document.createElement('p');
    Utility.addClasses(exerptTitle, [`blog-exerpt-title`, `r__blog-exerpt-title`]);
    exerptTitle.textContent = post.title;

    let exerptDateCreated = document.createElement('p');
    Utility.addClasses(exerptDateCreated, [`blog-exerpt-date-created`, `r__blog-exerpt-date-created`]);

    let dateOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    let dateFormat = new Intl.DateTimeFormat(navigator.language, dateOptions);
    exerptDateCreated.textContent = dateFormat.format(new Date(post.date));

    Utility.insertElement('beforeend', exerptHeader, exerptTitle);
    Utility.insertElement('beforeend', exerptHeader, exerptDateCreated);

    const exerptContentContainer = document.createElement('section');
    Utility.addClasses(exerptContentContainer, [`blog-exerpt-content-container`, `r__blog-exerpt-content-container`]);

    let exerpt = document.createElement('p');
    Utility.addClasses(exerpt, [`blog-exerpt__exerpt`, `r__blog-exerpt__exerpt`]);
    exerpt.textContent = post.content[0].data.slice(0, 200);

    let postLink = document.createElement('a');
    Utility.addClasses(postLink, [`post-link`, `r__post-link`]);
    postLink.setAttribute('href', `/blog/posts/${post.id}`);
    postLink.textContent = `Go To Post`;

    Utility.insertElement('beforeend', exerptContentContainer, exerpt);
    Utility.insertElement('beforeend', exerptContentContainer, postLink);

    Utility.insertElement('beforeend', exerptContainer, exerptHeader);
    Utility.insertElement('beforeend', exerptContainer, exerptContentContainer);

    Utility.insertElement('beforeend', postContainer, exerptContainer);
  });
};

const renderPhoto = (container, content) => {
  const image = document.createElement('img');
  Utility.addClasses(image, [`blog-image`, `r__blog-image`]);
  let index = content.file.indexOf(`DIST/CSS`);
  image.src = content.file.slice(index);
  Utility.insertElement(`beforeend`, container, image);
};
const renderVideo = (container, content) => {
  const video = document.createElement('video');
  Utility.addClasses(video, [`blog-video`, `r__blog-video`]);
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

export const watchBlog = async () => {
  const blog = document.querySelector('.blog');
  if (blog) {
    console.log(`Watching...`);
    let page = document.querySelector('.page');

    // GETTING ALL POSTS AT START
    let blog = await API.fetchBlogPosts();

    // RENDERING ALL POSTS AT START
    renderBlogExerpts(blog.posts);

    // INITIALIZE SEARCH OPTIONS, INPUT, AND BUTTON
    const searchSelect = document.querySelector('.search-select');
    const blogSearchOptions = document.querySelectorAll('.search-select-option');
    const blogSearchInput = document.querySelector('.search-input');
    const blogSearchButton = document.querySelector('.button--search');

    // WATCH SELECT OPTIONS TO DETERMINE THE SEARCH OPTION
    blogSearchOptions.forEach((option) => {
      option.addEventListener('click', (e) => {
        if (option.value === `Title`) {
          blogSearchInput.type = `text`;
        } else {
          blogSearchInput.type = option.value.toLowerCase();
        }
      });
    });

    let previousPage = 0;
    let currentPage = blog.blog.data.currentPage;
    let nextPage = currentPage + 1;

    // WATCHING SEARCH BUTTON
    blogSearchButton.addEventListener('click', async (e) => {
      e.preventDefault();

      // CHECKING IF SEARCH INPUT IS EMPTY
      if (blogSearchInput.value === '') {
        // RETURN ALL BLOG POSTS
        let blog = await API.fetchBlogPosts();

        // RENDER ALL BLOG POSTS
        renderBlogExerpts(blog.posts);
      } else {
        // CHECKING VALUE OF SELECT INPUT
        if (searchSelect.value === `Text`) {
          console.log(blogSearchInput.value);
          previousPage = 0;
          currentPage = blog.blog.data.currentPage;
          nextPage = currentPage + 1;
          blog = await API.fetchBlogPosts(1, 5, blogSearchInput.value, searchSelect.value.toLowerCase());
          renderBlogExerpts(blog.posts);
        }
        if (searchSelect.value === `Date`) {
          console.log(blogSearchInput.value);
          previousPage = 0;
          currentPage = blog.blog.data.currentPage;
          nextPage = currentPage + 1;
          blog = await API.fetchBlogPosts(1, 5, blogSearchInput.value, searchSelect.value.toLowerCase());
        }
        if (searchSelect.value === `Title`) {
          console.log(blogSearchInput.value);
          previousPage = 0;
          currentPage = blog.blog.data.currentPage;
          nextPage = currentPage + 1;
          blog = await API.fetchBlogPosts(1, 5, blogSearchInput.value, searchSelect.value.toLowerCase());
          renderBlogExerpts(blog.posts);
        }
      }
    });

    console.log(currentPage);
    const pageLeft = document.querySelector('.page-left');
    const pageRight = document.querySelector('.page-right');
    if (previousPage === 0) {
      pageLeft.classList.add('end');
    }
    pageLeft.addEventListener('click', async (e) => {
      e.preventDefault();
      if (pageLeft.classList.contains('end')) return;
      pageRight.classList.remove('end');
      blog = await API.fetchBlogPosts(previousPage);
      previousPage--;
      currentPage--;
      nextPage--;
      renderBlogExerpts(blog.posts);
      if (previousPage === 0) {
        pageLeft.classList.add('end');
      }
      page.textContent = `Page ${currentPage}`;
    });

    pageRight.addEventListener('click', async (e) => {
      e.preventDefault();
      if (pageRight.classList.contains('end')) return;
      pageLeft.classList.remove('end');
      blog = await API.fetchBlogPosts(nextPage);
      previousPage++;
      currentPage++;
      nextPage++;
      renderBlogExerpts(blog.posts);
      if (blog.posts.length < blog.blog.data.limit) {
        pageRight.classList.add('end');
      }
      page.textContent = `Page ${currentPage}`;
    });
    // let searchTerm;
    // const blogSearchOptions = document.querySelectorAll('.search-select-option');
    // blogSearchOptions.forEach((option) => {
    //   option.addEventListener('click', (e) => {
    //     searchTerm = option.value;
    //     blogSearchInput.type = option.value.toLowerCase();
    //     if (searchTerm === `Title`) blogSearchInput.type = `text`;
    //   });
    // });

    // blogSearchButton.addEventListener('click', async (e) => {
    //   if (blogSearchInput.type === `date`) {
    //     console.log(new Date(blogSearchInput.value));
    //     let blog = await API.fetchSpecificBlogPosts(blogSearchInput.value, blogSearchInput.type, currentPage);
    //     console.log(blog.posts);
    //     renderBlogExerpts(blog.posts);
    //   } else {
    //     console.log(blogSearchInput.value);
    //     searchTerm = document.querySelector('.search-select').value;
    //     let type;
    //     type = searchTerm.toLowerCase();
    //     let blog = await API.fetchSpecificBlogPosts(blogSearchInput.value, type, currentPage);
    //   }
    // });
  }
};
