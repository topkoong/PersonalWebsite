import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
// Components
import Home from './Home';
import Header from './Header';
import About from './About';
import Project from './Project';
import Resume from './Resume';
import Blog from './Blog';
import Admin from './Admin';
import CreatePost from './blog/CreatePost';
import EditPost from './blog/EditPost';
import CreateProject from './project/CreateProject';
import EditProject from './project/EditProject';
import ProjectDetail from './project/ProjectDetail';

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
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/project/:_id" component={ProjectDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
