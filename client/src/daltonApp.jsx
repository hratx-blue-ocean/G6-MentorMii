/* eslint-disable */
import React, { Component } from 'react';
import Header from './Components/Header.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import './Styles/App.css'


export default class daltonApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <div className="headerBorder"></div>
        <Header />

        <SignIn />

        <SignUp />
      </div>
    );
  }
}
