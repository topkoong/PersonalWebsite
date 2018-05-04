import _ from "lodash";
import {
  FETCH_BLOG_POSTS,
  FETCH_BLOG_POST,
  DELETE_BLOG_POST,
  EDIT_BLOG_POST
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BLOG_POSTS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_BLOG_POST:
      const blog = action.payload;
      return { ...state, [blog._id]: blog };
    case DELETE_BLOG_POST:
      return _.filter(state.blogs, blog => blog._id !== blog._id);
    case EDIT_BLOG_POST:
      return _.map(
        state.blogs,
        blog => (blog._id === action._id ? action.payload : blog)
      );
    default:
      return state;
  }
}
