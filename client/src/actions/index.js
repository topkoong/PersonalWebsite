import axios from "axios";
import {
  FETCH_USER,
  FETCH_PROJECTS,
  FETCH_PROJECT,
  FETCH_BLOG_POSTS,
  FETCH_BLOG_POST,
  DELETE_PROJECT,
  DELETE_BLOG_POST,
  EDIT_PROJECT,
  EDIT_BLOG_POST
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitProject = (values, history) => async dispatch => {
  const res = await axios.post("/api/projects", values);

  history.push("/project");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProjects = () => async dispatch => {
  const res = await axios.get("/api/projects");

  dispatch({ type: FETCH_PROJECTS, payload: res.data });
};

export const fetchProject = id => async dispatch => {
  const res = await axios.get(`/api/projects/${id}`);

  dispatch({ type: FETCH_PROJECT, payload: res.data });
};

export const editProject = (id, values, history) => async dispatch => {
  const res = await axios.put(`/api/projects/${id}/edit`, values);
  dispatch({ type: EDIT_PROJECT, payload: res.data });
  history.push("/project");
};

export const deleteProject = (id, history, state) => async dispatch => {
  const res = await axios.delete(`/api/projects/${id}`);
  dispatch({ type: DELETE_PROJECT, payload: res.data });
  history.push("/project");
};

export const submitBlogPost = (values, history) => async dispatch => {
  const res = await axios.post("/api/blogPosts", values);
  history.push("/blog");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBlogPosts = () => async dispatch => {
  const res = await axios.get("/api/blogPosts");

  dispatch({ type: FETCH_BLOG_POSTS, payload: res.data });
};

export const fetchBlogPost = id => async dispatch => {
  const res = await axios.get(`/api/blogPosts/${id}`);

  dispatch({ type: FETCH_BLOG_POST, payload: res.data });
};

export const editBlogPost = (id, values, history) => async dispatch => {
  const res = await axios.put(`/api/blogPosts/${id}/edit`, values);
  dispatch({ type: EDIT_BLOG_POST, payload: res.data });
  history.push("/blog");
};

export const deleteBlogPost = (id, history, state) => async dispatch => {
  const res = await axios.delete(`/api/blogPosts/${id}`);
  dispatch({ type: DELETE_BLOG_POST, payload: res.data });
  history.push("/blog");
};
