import React from 'react';
import { connect } from 'react-redux';

const Smurfs = (props) => {
  return (
    <div className="smurfs-container">
      {props.isFetching ? (
        <div>
          <h3>Fetching Smurfs...</h3>
        </div>
      ) : (
        <div className="smurf-list">
          {props.smurfs.map((smurf) => (
            <div key={smurf.id} className="smurf">
              <h3 className="smurf-name">{smurf.name}</h3>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          ))}
        </div>
      )}
      {props.error !== '' ? <h3 className="error">{props.error}</h3> : null}
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