////////////////////////////////////////////
//  Core Modules
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

////////////////////////////////////////////
//  Third Party Modules

////////////////////////////////////////////
//  Third Party Module Instances

////////////////////////////////////////////
//  Third Party Middleware

////////////////////////////////////////////
//  Third Party Config Files

////////////////////////////////////////////
//  My Middleware
const catchAsync = require(`./../Utilities/catchAsync`);
const calendar = require(`./../Models/calendarModel`);
const AppError = require(`./../Utilities/appError`);

////////////////////////////////////////////
//  Routing Middleware

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Controllers

// MAKE REQUEST FOR AND STORE DATA FROM JSON FILE.
let pureData = JSON.parse(fs.readFileSync(`${__dirname}/../Data/pureData.json`, 'utf-8'));

exports.renderBlog = catchAsync(async (request, response) => {
  // const data = request.data;
  const data = pureData;
  response.status(200).render(`blog`, {
    title: `Pure 'N' Spiration | Web SlingN -- Blog`,
    data: {
      data: data,
      calendar: calendar,
    },
    errorMessage: '',
    successMessage: '',
  });
});

exports.getLatestPost = catchAsync(async (request, response, next) => {
  let posts = pureData.blog.data.posts;
  let latest = posts[posts.length - 1];
  if (!latest) return next(new AppError(`There is no post! 💥`, 404));
  response.status(200).json({
    status: `Success`,
    data: latest,
  });
});

exports.getAllPosts = catchAsync(async (request, response, next) => {
  console.log(request.query, typeof request.query);
  let query = request.query;
  let blog = pureData.blog;
  let posts = pureData.blog.data.posts;
  let page = query.page * 1 || 1;
  let limit = query.limit * 1 || 5;
  let skip = (page - 1) * limit;

  // THE STARTING RETURNED PAGINATED SET OF POSTS.
  if (!query.page && !query.limit && !query.terms && !query.type) {
    // Page 1 = Posts 0 - 9 | Page 2 = Posts 10 - 19 | Page 3 = Posts 20 - 29 ...
    let paginatedPosts = posts.filter((post, i) => {
      if (posts.indexOf(post) >= skip && posts.indexOf(post) < page * limit) {
        post.date = new Date(
          new Date(new Date(new Date(post.date).setHours(new Date(post.date).getHours() + new Date(post.date).getTimezoneOffset() / 60))).setHours(0, 0, 0, 0),
        ).toISOString();
        return post;
      }
    });
    console.log(paginatedPosts);
    response.status(200).json({
      status: `Success`,
      data: {
        blog: blog,
        posts: paginatedPosts,
      },
    });
  }

  if (query.type === `text`) {
    let filteredPosts = [];
    posts.forEach((post, i) => {
      post.content.forEach((content) => {
        console.log(content);
        if (content.data.includes(query.terms)) {
          filteredPosts.push(post);
        }
      });
    });
    console.log(filteredPosts);

    let paginatedPosts = filteredPosts.filter((post, i) => {
      if (filteredPosts.indexOf(post) >= skip && filteredPosts.indexOf(post) < page * limit) {
        return post;
      }
    });

    response.status(200).json({
      status: `Success`,
      data: {
        blog: blog,
        posts: paginatedPosts,
      },
    });
  }

  if (query.type === `title`) {
    let filteredPosts = posts.filter((post, i) => {
      if (post.title.includes(query.terms)) {
        return post;
      }
    });
    console.log(filteredPosts);

    let paginatedPosts = filteredPosts.filter((post, i) => {
      if (filteredPosts.indexOf(post) >= skip && filteredPosts.indexOf(post) < page * limit) {
        return post;
      }
    });

    response.status(200).json({
      status: `Success`,
      data: {
        blog: blog,
        posts: paginatedPosts,
      },
    });
  }

  // if (request.query.type === `date`) {
  //   let blog = pureData.blog;
  //   let posts = pureData.blog.data.posts;

  //   let filteredPosts = posts.filter((post, i) => {
  //     if (new Date(request.query.terms).toISOString() === new Date(post.date).toISOString()) {
  //       return post;
  //     }
  //   });
  //   let page = request.query.page * 1 || 1;
  //   let limit = request.query.limit * 1 || 5;
  //   let skip = (page - 1) * limit;
  //   // console.log(`---------------------------------------------------------------------------------`);
  //   // console.log(filteredPosts);

  //   let paginatedPosts = filteredPosts.filter((post, i) => {
  //     if (filteredPosts.indexOf(post) >= skip && filteredPosts.indexOf(post) < page * limit) {
  //       post.date = new Date(
  //         new Date(new Date(new Date(post.date).setHours(new Date(post.date).getHours() + new Date(post.date).getTimezoneOffset() / 60))).setHours(0, 0, 0, 0),
  //       ).toISOString();
  //       return post;
  //     }
  //   });
  //   response.status(200).json({
  //     status: `Success`,
  //     data: {
  //       blog: blog,
  //       posts: paginatedPosts,
  //     },
  //   });
  // }
});

exports.getPost = catchAsync(async (request, response, next) => {
  let id = Number(request.params.id);
  let posts = pureData.blog.data.posts;
  let post;
  posts.forEach((testPost) => {
    if (testPost.id === id) {
      post = testPost;
    }
  });

  response.status(200).json({
    status: `Success`,
    data: post,
  });
});
