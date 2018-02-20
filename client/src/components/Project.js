import React from 'react';
import CreateProject from './project/CreateProject';
import ProjectList from './project/ProjectList';
import { Link } from 'react-router-dom';

const Project = () => {
  return(
    <div>
      <h2>Project</h2>
      <ProjectList />
      <div className="fixed-action-btn">
        <Link to="/project/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

export default Project;
