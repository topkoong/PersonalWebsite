const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const blogPost = mongoose.model("blogPosts");

module.exports = app => {
  // show single blogPost
  app.get("/api/blogPosts/:id", async (req, res) => {
    const blog = await blogPost.findOne({
      _id: req.params.id
    });
    res.send(blog);
  });

  app.get("/api/blogPosts", async (req, res) => {
    const blogs = await blogPost.find();

    res.send(blogs);
  });

  app.post("/api/blogPosts", requireLogin, async (req, res) => {
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

  // delete a single post

  app.delete("/api/blogPosts/:id", requireLogin, async (req, res) => {
    try {
      const post = await blogPost.remove({
        _id: req.params.id
      });
      res.send(post);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
