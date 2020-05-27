/* eslint-disable */
import React, { Component } from 'react';
import fetch from 'node-fetch';
<<<<<<< HEAD:client/src/App.jsx
import Header from './Components/Header.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import './Styles/App.css'

=======
import Header from './Components/Header';
import SignIn from './Components/SignIn';
// import './App.css';
>>>>>>> f287719888884c51b669221cb3028653ad331eec:client/src/App.js

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
<<<<<<< HEAD:client/src/App.jsx
      <div>
        <div className="headerBorder"></div>
        <Header />

        <SignIn />

        <SignUp />
      </div>
=======
      <>
        <Header />

        <SignIn />
      </>
>>>>>>> f287719888884c51b669221cb3028653ad331eec:client/src/App.js
    );
  }
}