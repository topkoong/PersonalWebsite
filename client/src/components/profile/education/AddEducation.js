import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import EducationForm from "./EducationForm";
import EducationFormReview from "./EducationFormReview";
import { addEducation } from "../../../actions";

class AddEducation extends Component {
  state = { showExperienceFormReview: false };

  renderContent() {
    if (this.state.showEducationFormReview) {
      // when a user clicks on the button in ProjectFormReview, we change the state inside of CreateProject
      return (
        <EducationFormReview
          onCancel={() => this.setState({ showEducationFormReview: false })}
        />
      );
    }
    return (
      <EducationForm
        onEducationSubmit={() =>
          this.setState({ showEducationFormReview: true })
        }
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "EducationForm"
})(AddEducation);
