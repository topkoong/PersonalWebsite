import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogPost, deleteBlogPost } from "../../actions";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import renderHTML from "react-render-html";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { _id } = this.props.match.params;
    this.props.fetchBlogPost(_id);
  }

  onDeleteClick() {
    console.log("Delete Post has been clicked");
    const { history } = this.props;
    this.props.deleteBlogPost(this.props.blog._id, history, this.state);
    this.setState({ blog: "" });
  }

  render() {
    const { blog } = this.props;
    if (!blog) {
      return <div>Loading...</div>;
    }
    const { title, author, tag, body, datePosted } = blog;
    return (
      <div className="col s12 m12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <div className="row">{renderHTML(body)}</div>
            <div className="row">
              <p className="left">
                <b>Author: </b>
                {author}
              </p>
            </div>
            <div className="row">
              <p className="left">
                <b>Tag: </b>
                {tag}
              </p>
              <p className="right">
                <b>Posted on: </b>
                {new Date(datePosted).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        <div className="row col s12">
          <div className="col s6 offset-s1">
            <Link className="waves-effect waves-light btn-large" to="/blog">
              Back to blog
            </Link>
          </div>
          <button
            className="btn-large red"
            onClick={() => this.onDeleteClick()}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ blogs, auth }, ownProps) {
  return { auth, blog: blogs[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchBlogPost, deleteBlogPost })(
  withRouter(PostDetail)
);
