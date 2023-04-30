const mongoose = require("mongoose");
const User = require("./user");
const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: true,
  },
  comments: [
    {
      name: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],
});
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
