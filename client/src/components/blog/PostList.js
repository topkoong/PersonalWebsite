import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogPosts } from "../../actions";
import renderHTML from "react-render-html";
import { Link } from "react-router-dom";
import _ from "lodash";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  renderPosts() {
    return _.map(this.props.blogs, blog => {
      return (
        <div className="row">
          <div className="col s12 m6">
            <div className="card grey lighten-5" key={blog._id}>
              <div className="card-image">
                {this.props.auth ? (
                  <Link
                    to={`/blog/${blog._id}/edit`}
                    className="btn-floating halfway-fab waves-effect waves-light red"
                  >
                    <i className="material-icons">edit</i>
                  </Link>
                ) : (
                  ""
                )}
              </div>
              <div className="card-content">
                <span className="card-title">{blog.title}</span>
                <div className="row">
                  {renderHTML(truncate(blog.body, 150))}
                </div>
                <div className="row">
                  <p className="left">
                    <b>Author: </b>
                    {blog.author}
                  </p>
                  <p className="right">
                    <b>Posted on: </b>
                    {new Date(blog.datePosted).toLocaleDateString()}
                  </p>
                </div>
                <p className="left">
                  <b>Tag: </b>
                  {blog.tag}
                </p>
              </div>
              <div className="card-action">
                <Link to={`/blog/${blog._id}`}>Read more</Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderPosts()}</div>;
  }
}
const truncate = (str, len) => {
  if (str.length > len && str.length > 0) {
    let new_str = str + " ";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(" "));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
};
function mapStateToProps({ blogs, auth }) {
  return { blogs, auth };
}
export default connect(mapStateToProps, { fetchBlogPosts })(PostList);
