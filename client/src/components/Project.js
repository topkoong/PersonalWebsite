import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectList from './project/ProjectList';
import { Link } from 'react-router-dom';

class Project extends Component {
  render() {
    return(
      <div>
        <h2>Project</h2>
        <ProjectList />
        {this.props.auth ? <div className="fixed-action-btn">
          <Link to="/project/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div> : ''}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Project);
