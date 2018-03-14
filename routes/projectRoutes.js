const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Project = mongoose.model('projects');

module.exports = app => {

  app.get('/api/projects', async (req, res) => {
    // const projects = await Project.find({ _user: req.user.id });
    const projects = await Project.find({ creator: "Theerut Foongkiatcharoen" });

    res.send(projects);
  });

  app.post('/api/projects', requireLogin, async (req, res) => {
    const { title, description, creator } = req.body;

    const project = new Project({
      title,
      technology,
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