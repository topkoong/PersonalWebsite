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
  EDIT_BLOG_POST,
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE
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

/*--------< Profile >--------------*/

// Get current profile
export const getCurrentProfile = () => async dispatch => {
  const res = await axios.get("/api/profile");
  dispatch({ type: GET_PROFILE, payload: res.data });
};

// Get profile by handle
export const getProfileByHandle = handle => async dispatch => {
  const res = await axios.get(`/api/profile/handle/${handle}`);
  dispatch({ type: GET_PROFILE, payload: res.data });
};

// Create Profile
export const createProfile = (values, history) => async dispatch => {
  const res = await axios.post("/api/profile", values);
  dispatch({ type: GET_PROFILE, payload: res.data });
  history.push("/admin");
};

// Edit Profile
export const editProfile = (values, history) => async dispatch => {
  const res = await axios.put("/api/profile/edit", values);
  history.push("/admin");
  dispatch({ type: GET_PROFILE, payload: res.data });
};

// Add experience
export const addExperience = (values, history) => async dispatch => {
  const res = await axios.post("/api/profile/experience", values);
  history.push("/admin");
  dispatch({ type: GET_PROFILE, payload: res.data });
};

// Add education
export const addEducation = (eduData, history) => async dispatch => {
  const res = await axios.post("/api/profile/education", eduData);
  dispatch({ type: GET_PROFILE, payload: res.data });
  history.push("/admin");
};

// Delete Experience
export const deleteExperience = id => async dispatch => {
  const res = await axios.delete(`/api/profile/experience/${id}`);
  dispatch({ type: GET_PROFILE, payload: res.data });
};

// Delete Experience
export const deleteEducation = id => async dispatch => {
  const res = await axios.delete(`/api/profile/education/${id}`);
  dispatch({ type: GET_PROFILE, payload: res.data });
};

// Get all profiles
export const getProfiles = () => async dispatch => {
  const res = await axios.get("/api/profile/all");
  dispatch({ type: GET_PROFILES, payload: res.data });
};

// Delete Account and Profile
export const deleteAccount = () => async dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    const res = await axios.delete("/api/profile");
    dispatch({ type: FETCH_USER, payload: {} });
  }
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
