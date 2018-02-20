import { FETCH_PROJECTS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return action.payload;
    default:
      return state;
  }
}
