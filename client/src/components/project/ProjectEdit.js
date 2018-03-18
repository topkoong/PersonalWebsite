import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import ProjectField from './ProjectField';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from "react-router-dom";


class ProjectEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
  componentDidMount() {
    this.props.fetchProject(this.props.match.params._id);
  }

  componentWillReceiveProps({ project }) {
    if (project) {
      const { title, technology, description, creator } = project;

      this.setState({ title, technology, description, creator });
    }
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.editProject(this.props.match.params._id, this.state);
    this.props.history.push("/project");
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <div className="input-field">
            <input
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              placeholder="Title"
            />
          </div>
          <div className="input-field">
            <input
              value={this.state.technology}
              onChange={e => this.setState({ technology: e.target.value })}
              placeholder="Technology"
            />
          </div>
          <div className="input-field">
            <input
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
              placeholder="Description"
            />
          </div>
          <div className="input-field">
            <input
              value={this.state.creator}
              onChange={e => this.setState({ creator: e.target.value })}
              placeholder="Creator"
            />
          </div>
          <Link to="/project" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Submit
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
  

}

// function validate(values) {
//   const errors = {};

//   _.each(formFields, ({ name, noValueError }) => {
//     if (!values[name]) {
//       errors[name] = 'You must provide a value';
//     }
//   });
//   return errors;
// }

// ownProps is the prop obj that is going to ProjectDetail component up top.
const  mapStateToProps = ({ projects, auth }, ownProps) => {
  return { auth, project: projects[ownProps.match.params._id] };
}

export default connect(mapStateToProps, actions)(withRouter(ProjectEdit));
// ProjectEdit = connect(mapStateToProps, { fetchProject })(ProjectEdit);


// export default reduxForm({
//   validate,
//   form: 'projectForm',
//   destroyOnUnmount: false
// })(ProjectEdit);


