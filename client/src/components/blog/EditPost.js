import React, { Component } from 'react';

class EditPost extends Component {
  render(){
    return(
      <div>
        Edit a post
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    );
  }
}

export default EditPost;
