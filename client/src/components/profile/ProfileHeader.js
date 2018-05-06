import React, { Component } from "react";
import isEmpty from "../validation/is-empty";

class ProfileHeader extends Component {
  render() {
    const { profile, auth } = this.props;
    console.log(this.props);

    return (
      <div className="row">
        <div className="col m12">
          <div className="card lime darken-4">
            <div className="card-content white-text">
              {/* <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img className="rounded-circle" src={auth.image} alt="" />
              </div>
            </div> */}
              <div className="center-align">
                <h1 className="center-align">{profile._user.name}</h1>
                <p className="flow-text center-align">
                  {profile.status}{" "}
                  {isEmpty(profile.company) ? null : (
                    <span>at {profile.company}</span>
                  )}
                </p>
                {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
                <p>
                  {isEmpty(profile.website) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.website}
                      target="_blank"
                    >
                      <i className="fas fa-globe fa-2x" />
                    </a>
                  )}

                  {isEmpty(profile.social && profile.social.twitter) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.twitter}
                      target="_blank"
                    >
                      <i className="fab fa-twitter fa-2x" />
                    </a>
                  )}

                  {isEmpty(profile.social && profile.social.facebook) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.facebook}
                      target="_blank"
                    >
                      <i className="fab fa-facebook fa-2x" />
                    </a>
                  )}

                  {isEmpty(profile.social && profile.social.linkedin) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.linkedin}
                      target="_blank"
                    >
                      <i className="fab fa-linkedin fa-2x" />
                    </a>
                  )}

                  {isEmpty(profile.social && profile.social.youtube) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.youtube}
                      target="_blank"
                    >
                      <i className="fab fa-youtube fa-2x" />
                    </a>
                  )}

                  {isEmpty(
                    profile.social && profile.social.instagram
                  ) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.instagram}
                      target="_blank"
                    >
                      <i className="fab fa-instagram fa-2x" />
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
