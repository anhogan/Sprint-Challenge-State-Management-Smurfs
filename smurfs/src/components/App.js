import React, { Component } from "react";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  };

  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <Smurfs />
        <SmurfForm />
      </div>
    );
  }
}

export default connect(null, { getSmurfs })(App);
