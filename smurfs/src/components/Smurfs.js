import React from 'react';
import { connect } from 'react-redux';

const Smurfs = (props) => {
  return (
    <div>
      {props.isFetching ? (
        <div>
          <h3>Fetching Smurfs...</h3>
        </div>
      ) : (
        <div>
          {props.smurfs.map((smurf) => (
            <div key={smurf.id}>
              <h3>{smurf.name}</h3>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.heigt}</p>
            </div>
          ))}
        </div>
      )}
      {props.error !== '' ? <h3>{props.error}</h3> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(Smurfs);