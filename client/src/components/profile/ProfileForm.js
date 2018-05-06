// ProfileForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import ProfileField from "./ProfileField"; // a business logic to render a single profile label and text input
import profileFormFields from "./profileFormFields"; // profile label and name
import SocialField from "./SocialField"; // a business logic to render a single social label, icon, and text input
import socialFormFields from "./socialFormFields"; // social label, name, and icon

class ProfileForm extends Component {
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
    return _.map(socialFormFields, ({ label, name, icon }) => {
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

  render() {
    return (
      <div className="row">
        <form
          className="col s12"
          onSubmit={this.props.handleSubmit(this.props.onProfileSubmit)}
        >
          {this.renderProfileFields()}
          {this.renderSocialFields()}
          <Link to="/Profile" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
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

export default reduxForm({
  validate,
  form: "profileForm",
  destroyOnUnmount: false
})(ProfileForm);
