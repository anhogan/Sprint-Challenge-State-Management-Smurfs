import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADD_SMURFS = 'ADD_SMURFS';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const REMOVE_SMURF = 'REMOVE_SMURF';

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS });
  axios.get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: error.message });
    });
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: ADD_SMURFS });
  console.log(smurf);
  axios.all([
    axios.post('http://localhost:3333/smurfs', smurf),
    axios.get('http://localhost:3333/smurfs')
  ])
  .then(axios.spread((post, get) => {
    dispatch({ type: ADD_SMURF_SUCCESS, payload: get.data });
  }))
  .catch(error => {
    console.log(error);
    dispatch({ type: ADD_SMURF_FAILURE, payload: error.message })
  });
};

export function removeSmurf(smurf) {
  return {
    type: REMOVE_SMURF,
    payload: smurf
  }
}