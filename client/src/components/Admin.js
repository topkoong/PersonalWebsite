import React, { Component } from 'react';
import CreateBlog from './blog/CreatePost';
import EditBlog from './blog/EditPost';
import CreateProject from './project/CreateProject';
import EditProject from './project/EditProject';

class Admin extends Component {
  render(){
    return(
      <div>
        Admin - Dashboard
        <div>
          <a href="/auth/google">Sign in With Google</a>
        </div>
        {/* <div>
          <CreateBlog />
          <EditBlog />
        </div>
        <div>
          <CreateProject />
          <EditProject />
        </div> */}
      </div>
    );
  }
}

export default Admin;
