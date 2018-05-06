import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import Experience from "./profile/Experience";
import Education from "./profile/Education";
import Spinner from "./profile/Spinner";
import ProfileLinks from "./profile/ProfileLinks";
import { getCurrentProfile, deleteAccount } from "../actions";

class Admin extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { profile, loading } = this.props.profile;
    let dashboardContent;
    if (profile === null || loading || this.props.auth === null) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="flow-text">
              Welcome{" "}
              <Link to={`/profile/${profile.handle}`}>
                {this.props.auth.displayName}
              </Link>
            </p>
            <ProfileLinks />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <div style={{ marginBottom: "60px" }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="waves-effect waves-light btn red"
            >
              <i className="material-icons left large">delete</i>
              Delete My Account
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="flow-text">Welcome {this.props.auth.displayName}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link
              to="/profile/new"
              className="waves-effect waves-light btn-large"
            >
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col m12">
              <h1 className="offset-m4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ profile, auth }) {
  return { profile, auth };
}

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Admin
);
