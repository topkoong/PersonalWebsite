// PostForm shows a form for a user to add input
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
//import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

//import { reduxForm, Field } from 'redux-form';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }
  onHandleChange = e => {
    this.setState({body: e});
  }
  onHandleSubmit = e => {
    e.preventDefault();
    //validation
    let errors = {};
    if (this.state.title === '') {
      errors.title = "Can't be empty";
    }
    if (this.state.body === '') {
      errors.title = "Can't be empty";
    }
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      const post = {
        title: this.state.title,
        body: this.state.body
      }
      this.props.submitBlogPost(post);
    }
  }
  render() {
    return (
      <div>
        <form className="col s12" onSubmit={this.onHandleSubmit}>
          <div className="row">
            <h4>Title</h4>
            <input
              className="input-field col s12"
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Title"
              onChange={e => {
                this.setState({ title: e.target.value });
              }}
            />
          </div>
          <div className="row col s12">
            <ReactQuill
                modules={PostForm.modules}
                formats={PostForm.modules}
                value={this.state.body}
                placeholder="Body"
                onChange={this.onHandleChange}
            />
          </div>
          <button
            className="green btn-flat right white-text">
            Publish Post
            <i className="material-icons right">send</i>
      </button>
        </form>
      </div>
    );
  }
}
PostForm.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block']
  ]
};

PostForm.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block'
];

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, actions)(PostForm);
