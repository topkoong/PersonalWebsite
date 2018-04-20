const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Project = mongoose.model("projects");

module.exports = app => {
  // show single project
  app.get("/api/projects/:id", async (req, res) => {
    const project = await Project.findOne({
      _id: req.params.id
    });
    res.send(project);
  });

  // edit single project
  app.put("/api/projects/:id/edit", requireLogin, async (req, res) => {
    try {
      const project = await Project.findOne({
        _id: req.params.id
      });
      project.title = req.body.title;
      project.technology = req.body.technology;
      project.description = req.body.description;
      project.creator = req.body.creator;
      project.datePosted = Date.now();
      project._user = req.user.id;
      await project.save();
      // res.send(project);
      res.send(project);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // fetch projects

  app.get("/api/projects", async (req, res) => {
    const projects = await Project.find();
    res.send(projects);
  });

  // create a new project
  app.post("/api/projects", requireLogin, async (req, res) => {
    const { title, technology, description, creator } = req.body;
    const project = new Project({
      title,
      technology,
      description,
      creator,
      datePosted: Date.now(),
      _user: req.user.id
    });
    try {
      await project.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // delete a single project

  app.delete("/api/projects/:id", requireLogin, async (req, res) => {
    try {
      const project = await Project.remove({
        _id: req.params.id
      });
      //res.sendStatus(200);
      res.send(project);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
