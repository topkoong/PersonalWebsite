// ExperienceFormReview shows users their form inputs for review
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import experienceFormFields from "./experienceFormFields"; // Experience label and name
import { withRouter } from "react-router-dom";
import * as actions from "../../../actions";
// accept the props that is being passed in from the ExperienceForm

const ExperienceFormReview = ({
  onCancel,
  formValues,
  addExperience,
  history
}) => {
  const reviewExperienceFormFields = _.map(
    experienceFormFields,
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
      {reviewExperienceFormFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => addExperience(formValues, history)}
        className="green btn-flat right white-text"
      >
        Add Experience
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.experienceForm.values };
}

export default connect(mapStateToProps, actions)(
  withRouter(ExperienceFormReview)
);
