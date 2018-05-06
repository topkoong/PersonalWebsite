import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import ExperienceForm from "./ExperienceForm";
import ExperienceFormReview from "./ExperienceFormReview";
import { addExperience } from "../../../actions";

class AddExperience extends Component {
  state = { showExperienceFormReview: false };

  renderContent() {
    if (this.state.showExperienceFormReview) {
      // when a user clicks on the button in ProjectFormReview, we change the state inside of CreateProject
      return (
        <ExperienceFormReview
          onCancel={() => this.setState({ showExperienceFormReview: false })}
        />
      );
    }
    return (
      <ExperienceForm
        onExperienceSubmit={() =>
          this.setState({ showExperienceFormReview: true })
        }
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "ExperienceForm"
})(AddExperience);
