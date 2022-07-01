const mongoose = require(`mongoose`);
const validator = require('validator');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    data: {
      previousPage: {
        type: Number,
      },
      currentPage: {
        type: Number,
      },
      nextPage: {
        type: Number,
      },
      limit: {
        type: Number,
      },
      posts: [
        {
          date: {
            type: Date,
          },
          title: {
            type: String,
          },
          keyWords: [String],
          content: [
            {
              type: {
                type: String,
                enum: [`Paragraph`, `Video`, `Image`],
              },
              data: {
                type: String,
              },
              file: {
                type: String,
              },
            },
          ],
          author: {
            type: String,
            default: `Nathan Cluff`,
          },
        },
      ],
    },
  },
});

const Blog = new mongoose.model(`Blog`, blogSchema);

module.exports = Blog;

// "blog": {
//   "title": "Web-SlingN",
//   "data": {
//     "previousPage": "null",
//     "currentPage": 0,
//     "nextPage": 1,
//     "limit": 10,
//     "posts": [
//       {
//         "date": "2022-06-30T00:36:22.586Z",
//         "title": "Example Post",
//         "keyWords": [],
//         "content": [
//           {
//             "type": "video",
//             "data": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//             "file": "./../../Public/DIST/CSS/Faolan.mp4"
//           },
//           {
//             "type": "paragraph",
//             "data": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//             "file": "file"
//           },
//           {
//             "type": "image",
//             "data": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//             "file": "./../../Public/DIST/CSS/Images/Hangman.svg"
//           }
//         ],
//         "author": "Nathan Cluff"
//       }
//     ]
//   }
// }
