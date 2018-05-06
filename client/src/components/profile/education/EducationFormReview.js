// EducationFormReview shows users their form inputs for review
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import educationFormFields from "./educationFormFields"; // Education label and name
import { withRouter } from "react-router-dom";
import * as actions from "../../../actions";
// accept the props that is being passed in from the EducationForm

const EducationFormReview = ({
  onCancel,
  formValues,
  addEducation,
  history
}) => {
  const reviewEducationFormFields = _.map(
    educationFormFields,
    ({ name, label }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    }
  );

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewEducationFormFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => addEducation(formValues, history)}
        className="green btn-flat right white-text"
      >
        Add Education
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.EducationForm.values };
}

export default connect(mapStateToProps, actions)(
  withRouter(EducationFormReview)
);
