import React, { Component } from 'react';

class EditProject extends Component {
  render(){
    return(
      <div>
        Edit a project
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    );
  }
}

export default EditProject;
