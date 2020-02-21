import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS });
  axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: error.message });
    });
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: FETCH_SMURFS });
  axios.all([
    axios.post('http://localhost:3333/smurfs', smurf),
    axios.get('http://localhost:3333/smurfs')
  ])
  .then(axios.spread((post, get) => {
    console.log(post);
    dispatch({ type: FETCH_SMURFS_SUCCESS, payload: get.data });
  }))
  .catch(error => {
    console.log(error);
    dispatch({ type: FETCH_SMURFS_FAILURE, payload: error.message })
  });
};