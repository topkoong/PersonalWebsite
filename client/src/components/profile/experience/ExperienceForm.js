// ExperienceForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import ExperienceField from "./ExperienceField"; // a business logic to render a single Experience label and text input
import experienceFormFields from "./experienceFormFields"; // Experience label and name

class ExperienceForm extends Component {
  renderExperienceFields() {
    return _.map(experienceFormFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={ExperienceField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onExperienceSubmit)}>
          {this.renderExperienceFields()}
          <Link to="/Experience" className="red btn-flat white-text">
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

  _.each(experienceFormFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "experienceForm",
  destroyOnUnmount: false
})(ExperienceForm);
