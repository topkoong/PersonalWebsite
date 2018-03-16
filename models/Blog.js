const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  author: String,
  tag: String,
  body: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  datePosted: { type: Date, default: Date.now }
});

mongoose.model('blogPosts', blogSchema);