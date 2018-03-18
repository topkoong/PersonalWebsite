import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';


class ProjectList extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }


  renderProjects() {
    // return this.props.projects.reverse().map(project => {
    return _.map(this.props.projects, project => {
      return (
        <div className="row" key={project._id}>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                {this.props.auth ? <Link to={`/project/${project._id}/edit`} className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">edit</i></Link> : ''}
              </div>
              <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>
                  <b>Technologies used: {project.technology} </b>
                </p>
                <p>
                  <b>Creator: {project.creator}</b>
                </p>
                <p>
                  <b>Project description: </b>{project.description}
                </p>
                <p className="right">
                  <b>Posted on: </b>{new Date(project.datePosted).toLocaleDateString()}
                </p>
              </div>
              <div className="card-action">
                <Link to={`/project/${project._id}`}>Read more</Link>
              </div>
            </div>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        {this.renderProjects()}
      </div>
    );
  }
}

function mapStateToProps({ projects, auth }) {
  return { projects, auth };
}
export default connect(mapStateToProps, { fetchProjects })(ProjectList);
