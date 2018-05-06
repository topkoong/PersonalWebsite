import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    //const firstName = profile._user.displayName.trim().split(" ")[0];

    // Skill List
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {skill}
      </div>
    ));

    return (
      <div className="row">
        <div className="col m12">
          <div className="card purple darken-4">
            <div className="card-content white-text">
              {/* <h3 className="text-center text-info">{firstName}'s Bio</h3>
            <p className="lead">
              {isEmpty(profile.bio) ? (
                <span>{firstName} does not have a bio</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
            <hr /> */}
              <h3 className="center-align">Skill Set</h3>
              <div className="row">
                <div className="center-align">{skills}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};
export default ProfileAbout;
