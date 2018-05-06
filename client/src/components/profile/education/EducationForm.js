// EducationForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import EducationField from "./EducationField"; // a business logic to render a single Education label and text input
import educationFormFields from "./educationFormFields"; // Education label and name

class EducationForm extends Component {
  renderEducationFields() {
    return _.map(educationFormFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={EducationField}
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
        <form onSubmit={this.props.handleSubmit(this.props.onEducationSubmit)}>
          {this.renderEducationFields()}
          <Link to="/Education" className="red btn-flat white-text">
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

  _.each(educationFormFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "EducationForm",
  destroyOnUnmount: false
})(EducationForm);
