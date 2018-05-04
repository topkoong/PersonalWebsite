import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import formFields from "./formFields";
import { fetchBlogPost, editBlogPost, submitBlogPost } from "../../actions";
import { withRouter } from "react-router-dom";

class PostEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { _id } = this.props.match.params;
    this.props.fetchBlogPost(_id);
    console.log("Run componentDidMount ");
    console.log(this.props);
  }

  componentWillReceiveProps({ blog }) {
    if (blog) {
      const { title, author, tag, body } = blog;
      this.setState({ title, author, tag, body });
    }
  }

  onHandleChange = e => {
    this.setState({ body: e });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    const { history } = this.props;
    this.props.editBlogPost(this.props.match.params._id, this.state, history);
  };

  render() {
    return (
      <div>
        <form className="col s12" onSubmit={this.onHandleSubmit}>
          <div className="input-field">
            <input
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              placeholder="Title"
            />
          </div>
          <div className="input-field">
            <input
              value={this.state.author}
              onChange={e => this.setState({ author: e.target.value })}
              placeholder="Author"
            />
          </div>
          <div className="input-field">
            <input
              value={this.state.tag}
              onChange={e => this.setState({ tag: e.target.value })}
              placeholder="Tag"
            />
          </div>
          <div className="row col s12">
            <ReactQuill
              value={this.state.content}
              modules={PostEdit.modules}
              formats={PostEdit.formats}
              value={this.state.body}
              placeholder="Please write something"
              onChange={this.onHandleChange}
            />
          </div>
          <button className="green btn-flat right white-text">
            Publish
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

PostEdit.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"]
  ]
};

PostEdit.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block"
];

const mapStateToProps = ({ blogs, auth }, ownProps) => {
  return { auth, blog: blogs[ownProps.match.params._id] };
};

export default connect(mapStateToProps, {
  fetchBlogPost,
  editBlogPost,
  submitBlogPost
})(withRouter(PostEdit));
