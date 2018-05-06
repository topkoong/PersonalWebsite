// CreateProfile shows ProjectForm and ProjectFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import ProfileForm from "./ProfileForm";
import ProfileFormReview from "./ProfileFormReview";

class CreateProfile extends Component {
  state = { showProfileFormReview: false };

  renderContent() {
    if (this.state.showProfileFormReview) {
      // when a user clicks on the button in ProjectFormReview, we change the state inside of CreateProject
      return (
        <ProfileFormReview
          onCancel={() => this.setState({ showProfileFormReview: false })}
        />
      );
    }
    return (
      <ProfileForm
        onProfileSubmit={() => this.setState({ showProfileFormReview: true })}
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "profileForm"
})(CreateProfile);
