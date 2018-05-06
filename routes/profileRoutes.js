const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Profile = mongoose.model("profile");

// Load Validation
const validateProfileInput = require("../validation/profile");
const validateExperienceInput = require("../validation/experience");
const validateEducationInput = require("../validation/education");

module.exports = app => {
  // Get current users profile

  app.get("/api/profile/", requireLogin, async (req, res) => {
    const profile = await Profile.findOne({
      _user: req.user.id
    });
    res.send(profile);
  });

  // Get all profiles

  app.get("/api/profile/all", async (req, res) => {
    const profiles = await Profile.find();
    res.send(profiles);
  });

  // Get profile by handle

  app.get("/api/profile/handle/:handle", async (req, res) => {
    const profile = await Profile.findOne({
      _user: req.user.id
    });
    res.send(profile);
  });

  // Create user profile
  app.post("/api/profile", requireLogin, async (req, res) => {
    const profileFields = {};
    profileFields._user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.githubusername)
      profileFields.githubusername = req.body.githubusername;
    // Skills - Spilt into array
    if (typeof req.body.skills !== "undefined") {
      profileFields.skills = req.body.skills.split(",");
    }

    // Social
    profileFields.social = {};
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    const profile = new Profile(profileFields);
    await profile.save();
    res.send(profile);
  });

  // app.post("/api/profile", requireLogin, async (req, res) => {
  //   const { errors, isValid } = validateProfileInput(req.body);
  //   // Check Validation
  //   if (!isValid) {
  //     // Return any errors with 400 status
  //     return res.status(400).json(errors);
  //   }
  //   Get fields
  //   const profileFields = {};
  //   profileFields._user = req.user.id;
  //   if (req.body.handle) profileFields.handle = req.body.handle;
  //   if (req.body.company) profileFields.company = req.body.company;
  //   if (req.body.website) profileFields.website = req.body.website;
  //   if (req.body.location) profileFields.location = req.body.location;
  //   if (req.body.status) profileFields.status = req.body.status;
  //   if (req.body.githubusername)
  //     profileFields.githubusername = req.body.githubusername;
  //   Skills - Spilt into array
  //   if (typeof req.body.skills !== "undefined") {
  //     profileFields.skills = req.body.skills.split(",");
  //   }

  //   Social
  //   profileFields.social = {};
  //   if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  //   if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
  //   if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
  //   if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

  //   Profile.findOne({ _user: req.user.id }).then(profile => {
  //     if (profile) {
  //       Update
  //       Profile.findOneAndUpdate(
  //         { _user: req.user.id },
  //         { $set: profileFields },
  //         { new: true }
  //       ).then(profile => res.json(profile));
  //     } else {
  //       Create

  //       Check if handle exists
  //       Profile.findOne({ handle: profileFields.handle }).then(profile => {
  //         if (profile) {
  //           errors.handle = "That handle already exists";
  //           res.status(400).json(errors);
  //         }

  //         Save Profile
  //         new Profile(profileFields).save().then(profile => res.json(profile));
  //       });
  //     }
  //   });
  // });

  // edit user profile

  app.put("/api/profile/edit", requireLogin, async (req, res) => {
    try {
      const profile = await Profile.findOne({
        _user: req.user.id
      });
      const profileFields = {};
      profileFields._user = req.user.id;
      if (req.body.handle) profileFields.handle = req.body.handle;
      if (req.body.company) profileFields.company = req.body.company;
      if (req.body.website) profileFields.website = req.body.website;
      if (req.body.location) profileFields.location = req.body.location;
      if (req.body.bio) profileFields.bio = req.body.bio;
      if (req.body.status) profileFields.status = req.body.status;
      if (req.body.githubusername)
        profileFields.githubusername = req.body.githubusername;
      // Skills - Spilt into array
      if (typeof req.body.skills !== "undefined") {
        profileFields.skills = req.body.skills.split(",");
      }

      // Social
      profileFields.social = {};
      if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
      if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
      if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
      if (req.body.instagram)
        profileFields.social.instagram = req.body.instagram;
      profile.profileFields = profileFields;
      await profile.save();
      res.send(profile);
      console.log("update");
    } catch (error) {
      console.log("error");
      res.status(422).send(error);
    }
  });

  // Add experience to profile

  app.post("/api/profile/experience", requireLogin, async (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);
    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    const profile = await Profile.findOne({
      _user: req.user.id
    });
    const newExp = {
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      from: req.body.from,
      to: req.body.to,
      current: req.body.current,
      description: req.body.description
    };

    // Add to exp array
    profile.experience.push(newExp);
    await profile.save();
    res.send(profile);
  });

  // Add education to profile

  app.post("/api/profile/education", requireLogin, async (req, res) => {
    const profile = await Profile.findOne({
      _user: req.user.id
    });
    const newEdu = {
      school: req.body.school,
      degree: req.body.degree,
      fieldofstudy: req.body.fieldofstudy,
      from: req.body.from,
      to: req.body.to,
      current: req.body.current,
      description: req.body.description
    };

    // Add to exp array
    profile.education.unshift(newEdu);

    await profile.save();
    res.send(profile);
  });
  // Delete education from profile
  app.delete(
    "/api/profile/education/:exp_id",
    requireLogin,
    async (req, res) => {
      const profile = await Profile.findOne({
        _user: req.user.id
      });
      const removeIndex = profile.experience
        .map(item => item.id)
        .indexOf(req.params.exp_id);

      // Splice out of array
      profile.education.splice(removeIndex, 1);
      await profile.save();
      res.send(profile);
    }
  );

  // Delete experience from profile

  app.delete(
    "/api/profile/experience/:edu_id",
    requireLogin,
    async (req, res) => {
      const profile = await Profile.findOne({
        _user: req.user.id
      });
      const removeIndex = profile.education
        .map(item => item.id)
        .indexOf(req.params.edu_id);

      // Splice out of array
      profile.experience.splice(removeIndex, 1);
      await profile.save();
      res.send(profile);
    }
  );

  // DELETE api/profile

  app.delete("/api/profile", requireLogin, async (req, res) => {
    Profile.findOneAndRemove({ _user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  });
};
