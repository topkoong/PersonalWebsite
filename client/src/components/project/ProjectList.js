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
            <div className="card darken-1" key={project._id}>
              <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>
                  {project.description}
                </p>
                <p className="right">
                  Posted on: {new Date(project.datePosted).toLocaleDateString()}
                </p>
              </div>
              <div className="card-action">

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

function mapStateToProps({ projects }) {
  return { projects };
}
export default connect(mapStateToProps, { fetchProjects })(ProjectList);
