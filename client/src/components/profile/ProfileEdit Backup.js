// CreateProfile shows ProjectForm and ProjectFormReview
import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm, initialize, profileEditForm } from "redux-form";
import ProfileField from "./ProfileField"; // a business logic to render a single profile label and text input
import profileFormFields from "./profileFormFields"; // profile label and name
import SocialField from "./SocialField"; // a business logic to render a single social label, icon, and text input
import socialFormFields from "./socialFormFields"; // social label, name, and icon
import { editProfile, getCurrentProfile } from "../../actions";

const form = reduxForm({
  validate,
  form: "profileEditForm",
  enableReinitialize: true
});

class ProfileEdit extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;
      // Bring skills array back to CSV
      const skillsCSV = profile.skills.join(",");
      const initData = {
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        githubusername: profile.githubusername,
        location: profile.location,
        status: profile.status,
        twitter: profile.social.twitter,
        facebook: profile.social.facebook,
        instagram: profile.social.instagram,
        linkedin: profile.social.linkedin,
        skills: skillsCSV
      };
      this.props.initialize(initData);
    }
  }
  renderProfileFields() {
    return _.map(profileFormFields, ({ label, name }) => {
      return (
        <Field
          className="input-field col s12"
          key={name}
          component={ProfileField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  renderSocialFields() {
    return _.map(socialFormFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SocialField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  handleFormSubmit(formProps) {
    const { history, createRecord, reset } = this.props;
    return this.props.editProfile(formProps, history).then(() => {
      reset();
      // do other success stuff
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="row">
        <form
          className="col s12"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          {this.renderProfileFields()}
          {this.renderSocialFields()}
          <Link to="/admin" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Submit
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(profileFormFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
  _.each(socialFormFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
  return errors;
}

function mapStateToProps({ profile, auth }) {
  return { profile, auth };
}

export default connect(mapStateToProps, { editProfile, getCurrentProfile })(
  form(ProfileEdit)
);
