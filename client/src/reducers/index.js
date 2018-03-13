import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectsReducer from './projectsReducer';
import blogPostsReducer from './blogPostsReducer';

import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  projects: projectsReducer,
  blogs: blogPostsReducer
});
