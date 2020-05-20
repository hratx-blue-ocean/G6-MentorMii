import React, { Component } from 'react';
import fetch from 'node-fetch';
import Header from './Components/Header';
import SignIn from './Components/SignIn';
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: []
    };
    this.api = `http://localhost:8000/api/example`;
  }
  componentDidMount() {
    fetch(this.api)
      .then(res => res.json())
      .then(seaCreatures => {
        this.setState({ seaCreatures: seaCreatures.data });
      });
  }

  render() {
    return (
      <>
        <Header />

        <SignIn />
      </>
    );
  }
}
