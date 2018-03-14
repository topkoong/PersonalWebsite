const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const blogPost = mongoose.model('blogPosts');

module.exports = app => {

  app.get('/api/blogPosts', async (req, res) => {
    const blogPosts = await blogPost.find();

    res.send(blogPosts);
  });

  app.post('/api/blogPosts', requireLogin, async (req, res) => {
    const { title, author, tag, body } = req.body;

    const post = new blogPost({
      title,
      author,
      tag, 
      body,
      _user: req.user.id,
      datePosted: Date.now()
    });
    try {
      await post.save();
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
