const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Project = mongoose.model('projects');

module.exports = app => {
  app.post('/api/projects', requireLogin, async (req, res) => {
    const { title, description, creator } = req.body;

    const project = new Project({
      title,
      description,
      creator,
      _user: req.user.id,
      datePosted: Date.now()
    });
    try {
      await project.save();
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
