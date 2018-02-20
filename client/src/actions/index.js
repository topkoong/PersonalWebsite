import axios from 'axios';
import { FETCH_USER, FETCH_PROJECTS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitProject = (values, history) => async dispatch => {
  const res = await axios.post('/api/projects', values);

  history.push('/project');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProjects = () => async dispatch => {
  const res = await axios.get('./api/projects');

  dispatch({ type: FETCH_PROJECTS, payload: res.data });
}
