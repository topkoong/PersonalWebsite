import axios from 'axios';
import { FETCH_USER, FETCH_PROJECTS, FETCH_PROJECT, FETCH_BLOG_POSTS } from './types';

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
  const res = await axios.get('/api/projects');

  dispatch({ type: FETCH_PROJECTS, payload: res.data });
}

export const fetchProject = id => async dispatch => {
  const res = await axios.get(`/api/projects/${id}`);

  dispatch({ type: FETCH_PROJECT, payload: res.data });
}

export const editProject = (id, values) => async dispatch => {
  const res = await axios.put(`/api/projects/${id}/edit`, values);
  dispatch({ type: FETCH_PROJECT, payload: res.data });
}

export const submitBlogPost = (values, history) => async dispatch => {
  const res = await axios.post('/api/blogPosts', values);
  history.push('/blog');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBlogPosts = () => async dispatch => {
  const res = await axios.get('/api/blogPosts');

  dispatch({ type: FETCH_BLOG_POSTS, payload: res.data });
}
