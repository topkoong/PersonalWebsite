// PostForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      tag: "",
      body: ""
    };
  }

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <div className="row" key={name}>
          <div className="input-field col s12">
            <input
              className="marginBottom: '5px'"
              value={this.state.name}
              type="text"
              placeholder={label}
              name={name}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
          </div>
        </div>
      );
    });
  }
  onHandleChange = e => {
    this.setState({ body: e });
  };
  onHandleSubmit = e => {
    e.preventDefault();
    //validation
    let errors = {};
    if (this.state.title === "") {
      errors.title = "Can't be empty";
    }
    if (this.state.author === "") {
      errors.author = "Can't be empty";
    }
    if (this.state.tag === "") {
      errors.tag = "Can't be empty";
    }
    if (this.state.body === "") {
      errors.body = "Can't be empty";
    }
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      const post = {
        title: this.state.title,
        author: this.state.author,
        tag: this.state.tag,
        body: this.state.body
      };
      const { history } = this.props;
      this.props.submitBlogPost(post, history);
    }
  };

  render() {
    return (
      <div>
        <form className="col s12" onSubmit={this.onHandleSubmit}>
          {this.renderFields()}
          <div className="row col s12">
            <ReactQuill
              modules={PostForm.modules}
              formats={PostForm.formats}
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

PostForm.modules = {
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

PostForm.formats = [
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

export default connect(null, actions)(withRouter(PostForm));
