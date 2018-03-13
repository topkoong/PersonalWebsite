import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './blog/PostList';
import { Link } from 'react-router-dom';

class Blog extends Component {
  render() {
    return(
      <div>
        <h2>Blog</h2>
        <PostList />
        {this.props.auth ? <div className="fixed-action-btn">
          <Link to="/blog/new" className="btn-floating btn-large red">
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

export default connect(mapStateToProps)(Blog);
