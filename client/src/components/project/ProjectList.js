import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions';

class ProjectList extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    return this.props.projects.reverse().map(project => {
      return (
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                {this.props.auth ? <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">edit</i></a> : ''}
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
                <a href="test">This is a link</a>
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
