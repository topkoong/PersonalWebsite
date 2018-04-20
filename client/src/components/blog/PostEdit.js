import React, { Component } from "react";
import PostForm from "./PostForm";
import { fetchBlogPost } from "../../actions";

class PostEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { _id } = this.props.match.params;
    this.props.fetchBlogPost(_id);
  }

  componentWillReceiveProps({ blogPost }) {
    if (blogPost) {
      const { title, author, tag, body } = blogPost;
      this.setState({ title, author, tag, body });
    }
  }
  render() {
    return (
      <div>
        <PostForm />
      </div>
    );
  }
}

export default PostEdit;
