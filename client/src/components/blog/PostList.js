import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../../actions';
import renderHTML from 'react-render-html';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  renderPosts() {
    console.log(this.props);
    return this.props.blogs.reverse().map(blogPost => {
      return (
        <div className="row">
          <div className="col s12 m12">
            <div className="card">
              <div className="card-image">
                {this.props.auth ? <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">edit</i></a> : ''}
              </div>
              <div className="card-content">
                <span className="card-title">{blogPost.title}</span>
                <p>
                  {renderHTML(blogPost.body)}
                </p>
                <p className="right">
                  <b>Posted on: </b>{new Date(blogPost.datePosted).toLocaleDateString()}
                </p>
              </div>
              <div className="card-action">
                <a href="test">This is a link</a>
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
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps({ blogs, auth }) {
  return { blogs, auth };
}
export default connect(mapStateToProps, { fetchBlogPosts })(PostList);
