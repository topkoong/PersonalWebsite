import React from "react";
import { Link } from "react-router-dom";

const ProfileLinks = () => {
  return (
    <div>
      <Link
        to="/profile/edit"
        className="amber darken-3 btn"
        style={{ marginRight: "60px" }}
      >
        <i className="large material-icons left">edit</i> Edit Profile
      </Link>
      <Link
        to="/profile/experience/add"
        className="waves-effect waves-light blue btn"
        style={{ marginRight: "60px" }}
      >
        <i className="large material-icons left">add_box</i>
        Add Experience
      </Link>
      <Link
        to="/profile/education/add"
        className="waves-effect waves-light btn red"
      >
        <i className="large material-icons left">add_box</i>
        Add Education
      </Link>
    </div>
  );
};

export default ProfileLinks;
