// PostForm shows a form for a user to add input
import React, { Component } from 'react';
//import { reduxForm, Field } from 'redux-form';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render(){
    return(
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

export default PostForm;
