import _ from 'lodash';
import { FETCH_PROJECT, FETCH_PROJECTS, DELETE_PROJECT, EDIT_PROJECT } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, ..._.mapKeys(action.payload, '_id') };
    case FETCH_PROJECT:
      const project = action.payload;
      return { ...state, [project._id]: project };
    case DELETE_PROJECT:
      return _.filter(state.projects, project => project._id != action._id)
    case EDIT_PROJECT:
      return _.map(state.projects, project => project._id === action._id ? action.payload : project);
    default:
      return state;
  }
}
