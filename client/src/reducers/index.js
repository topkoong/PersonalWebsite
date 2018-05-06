import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectsReducer from "./projectsReducer";
import blogPostsReducer from "./blogPostsReducer";
import profileReducer from "./profileReducer";

import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  form: reduxForm,
  projects: projectsReducer,
  blogs: blogPostsReducer
});
