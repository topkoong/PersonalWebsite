export const submitProject = values => async dispatch => {
  const res = await axios.post('/api/posts', values);
};
