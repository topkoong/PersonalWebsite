// ProfileFormReview shows users their form inputs for review
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import profileFormFields from "./profileFormFields"; // profile label and name
import socialFormFields from "./socialFormFields"; // social label, name, and icon
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
// accept the props that is being passed in from the ProfileForm

const ProfileFormReview = ({
  onCancel,
  formValues,
  createProfile,
  history
}) => {
  const reviewProfileFormFields = _.map(
    profileFormFields,
    ({ name, label }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    }
  );

  const reviewSocialFormFields = _.map(socialFormFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewProfileFormFields}
      {reviewSocialFormFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => createProfile(formValues, history)}
        className="green btn-flat right white-text"
      >
        Create Profile
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.profileForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(ProfileFormReview));
