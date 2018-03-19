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
  componentDidMount() {
    const { _id } = this.props.match.params;
    this.props.fetchProject(_id);
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
    const { history} = this.props;
    this.props.editProject(this.props.match.params._id, this.state, history);
    //this.props.history.push("/project");
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

// ownProps is the prop obj that is going to ProjectDetail component up top.
const  mapStateToProps = ({ projects, auth }, ownProps) => {
  return { auth, project: projects[ownProps.match.params._id]};
}

export default connect(mapStateToProps, actions)(withRouter(ProjectEdit));


