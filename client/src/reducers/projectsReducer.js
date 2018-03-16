import mapKeys from 'lodash/mapKeys';
import { FETCH_PROJECT, FETCH_PROJECTS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, ...mapKeys(action.payload, '_id') };
    case FETCH_PROJECT:
      const project = action.payload;
      return { ...state, [project._id]: project };
    default:
      return state;
  }
}
