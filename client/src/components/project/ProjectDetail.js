import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProject, deleteProject } from "../../actions";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { _id } = this.props.match.params;
    this.props.fetchProject(_id);
  }

  onDeleteClick() {
    console.log("Delete Project has been clicked");
    const { history } = this.props;
    this.props.deleteProject(this.props.project._id, history, this.state);
    this.setState({ project: "" });
  }

  render() {
    const { project } = this.props;
    if (!project) {
      return <div>Loading...</div>;
    }
    const { title, technology, description, datePosted } = project;
    return (
      <div>
        <div className="row">
          <div className="col s12 m9">
            <h3>{title}</h3>
            <h5>Technologies used: {technology}</h5>
            <div className="card story">
              <div className="card-content">
                <b>Posted on: </b>
                {new Date(datePosted).toLocaleDateString()}
                <br />
                {description}
              </div>
              {/* Add link here */}
              <div className="card-action">
                <Link to="">Source Code</Link>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card center-align">
              <div className="card-content">
                <span className="card-title">
                  <b>Creator</b>
                  <br />
                  {this.props.auth.displayName}
                </span>
                <img
                  className="circle responsive-img"
                  src={this.props.auth.image}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row col s12">
          <div className="col s6 offset-s1">
            <Link className="waves-effect waves-light btn-large" to="/project">
              Back to project
            </Link>
          </div>
          <button
            className="btn-large red"
            onClick={() => this.onDeleteClick()}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
// ownProps is the prop obj that is going to ProjectDetail component up top.
function mapStateToProps({ projects, auth }, ownProps) {
  return { auth, project: projects[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchProject, deleteProject })(
  withRouter(ProjectDetail)
);
