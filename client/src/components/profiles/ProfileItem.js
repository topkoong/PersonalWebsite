import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card pink darken-2">
        <div className="card-content white-text">
          <div className="row">
            {/* <div className="col-2">
            <img src={auth.image} alt="" className="rounded-circle" />
          </div> */}
            <div className="col l6 m4 s8">
              <h3>{profile._user.name}</h3>
              <p>
                {profile.status}{" "}
                {isEmpty(profile.company) ? null : (
                  <span>at {profile.company}</span>
                )}
              </p>
              <p>
                {isEmpty(profile.location) ? null : (
                  <span>{profile.location}</span>
                )}
              </p>
              <Link
                to={`/profiles/${profile.handle}`}
                className="btn"
                style={{ marginTop: "10px" }}
              >
                View Profile
              </Link>
            </div>
            <div className="col m4">
              <h4>Skill Set</h4>
              <ul className="collection">
                {profile.skills.slice(0, 4).map((skill, index) => (
                  <li
                    key={index}
                    className="collection-item lime accent-2 black-text"
                  >
                    <i className="material-icons">check</i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
