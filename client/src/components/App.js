import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
// Components
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Project from "./Project";
import Resume from "./Resume";
import Blog from "./Blog";
import Admin from "./Admin";
import CreatePost from "./blog/CreatePost";
import PostEdit from "./blog/PostEdit";
import PostDetail from "./blog/PostDetail";
import CreateProject from "./project/CreateProject";
import ProjectDetail from "./project/ProjectDetail";
import ProjectEdit from "./project/ProjectEdit";
import CreateProfile from "./profile/CreateProfile";
import AddExperience from "./profile/experience/AddExperience";
import AddEducation from "./profile/education/AddEducation";
import ProfileEdit from "./profile/ProfileEdit";
import Profile from "./Profile";
import Profiles from "./profiles/Profiles";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/project/new" component={CreateProject} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/new" component={CreatePost} />
            <Route exact path="/blog/:_id" component={PostDetail} />
            <Route exact path="/blog/:_id/edit" component={PostEdit} />
            <Route exact path="/project/:_id" component={ProjectDetail} />
            <Route exact path="/project/:_id/edit" component={ProjectEdit} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/profiles/:handle" component={Profile} />
            <Route exact path="/profile/new" component={CreateProfile} />
            <Route exact path="/profile/edit" component={ProfileEdit} />
            <Route
              exact
              path="/profile/experience/add"
              component={AddExperience}
            />
            <Route
              exact
              path="/profile/education/add"
              component={AddEducation}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
