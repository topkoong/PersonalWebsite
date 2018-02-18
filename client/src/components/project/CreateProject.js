// CreateProject shows ProjectForm and ProjectFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ProjectForm from './ProjectForm';
import ProjectFormReview from './ProjectFormReview';


class CreateProject extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      // when a user clicks on the button in ProjectFormReview, we change the state inside of CreateProject
      return <ProjectFormReview
        onCancel={() => this.setState({showFormReview: false})}
      />;
    }
    return <ProjectForm
      onProjectSubmit={() => this.setState({ showFormReview: true })}
    />;
  }

  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'projectForm'
})(CreateProject);
