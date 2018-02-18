// ProjectForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import ProjectField from './ProjectField';
import formFields from './formFields';


class ProjectForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={ProjectField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onProjectSubmit)}>
          {this.renderFields()}
          <Link to="/project" className="red btn-flat white-text">
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

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: 'projectForm',
  destroyOnUnmount: false
})(ProjectForm);
