import React, { Component } from "react";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import { gsap } from 'gsap';
import papa from '../papa_smurf.png';
import smurfette from '../smurfette.png'
import "./App.css";

const enlarge = () => {
  gsap.to('.image', 1, {scale: 1.2, ease: "power2.out"});
};

const normal = () => {
  gsap.to('.image', 1, {scale: 1, ease: "power2.out"});
};

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  };

  render() {
    return (
      <div className="App">
        <div className="header-container">
          <img className="image" src={smurfette} alt="Smurfette" onMouseEnter={enlarge} onMouseLeave={normal} />
          <h1>Smurf Village</h1>
          <img className="image" src={papa} alt="Papa Smurf" onMouseEnter={enlarge} onMouseLeave={normal} />
        </div>
        <Smurfs />
        <SmurfForm />
      </div>
    );
  }
}

export default connect(null, { getSmurfs })(App);
