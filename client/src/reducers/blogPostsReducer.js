import { FETCH_BLOG_POSTS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BLOG_POSTS:
      return action.payload;
    default:
      return state;
  }
}
