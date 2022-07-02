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
