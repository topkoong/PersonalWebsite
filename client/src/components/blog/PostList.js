import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../../actions';
import renderHTML from 'react-render-html';


class PostList extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  renderPosts() {
    return this.props.blogs.reverse().map((blogPost, index) => {
      return (
        <div className="row" key={index}>
          <div className="col s12 m12">
            <div className="card">
              <div className="card-image">
                {this.props.auth ? <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">edit</i></a> : ''}
              </div>
              <div className="card-content">
                <span className="card-title">{blogPost.title}</span>
                <div className="row">
                {renderHTML(truncate(blogPost.body))}
                </div>
                <p className="left">
                  <b>Author: </b>{blogPost.author}
                </p>
                <p className="right">
                  <b>Posted on: </b>{new Date(blogPost.datePosted).toLocaleDateString()}
                </p>
                <p className="left">
                  <b>Tag: </b>{blogPost.tag}
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
const truncate = (text) => {
  return text.length > 120 ? `${text.substr(0, 120)}...` : text;
}
function mapStateToProps({ blogs, auth }) {
  return { blogs, auth };
}
export default connect(mapStateToProps, { fetchBlogPosts })(PostList);
