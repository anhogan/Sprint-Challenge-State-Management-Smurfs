import { FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURFS, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE, REMOVE_SMURF } from '../actions/index';

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ''
      }
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case ADD_SMURFS:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ''
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case REMOVE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter((smurf) => {
          return smurf.id !== action.payload.id
        })
      }
    default:
      return state
  };
};