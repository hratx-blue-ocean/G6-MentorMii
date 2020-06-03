/* eslint-disable */
import React, { Component } from "react";
import Header from "./HomePage Components/Header.jsx";
import SignIn from "./HomePage Components/SignIn.jsx";
import SignUp from "./HomePage Components/SignUp.jsx";
// import MissionStatementfrom "./MainPage Components.jsx"
import MainPage from "./MainPage.jsx";
import "./Styles/App.css";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, //SET TO FALSE
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  componentDidMount() {}

  render() {
    if (this.state.isLoggedIn === true) {
      return <MainPage></MainPage>;
    }
    return (
      <div>
      <img className="landingPageImage" src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages3.alphacoders.com%2F106%2Fthumb-1920-1069102.jpg" />    
    <div className="headerBorder"></div>
        <Header />

        <SignIn handleLoginClick={this.handleLoginClick} />

        <SignUp />
        <div className="missionStatement">
          <h2 className="missionBox">MentorMii Mission Statement</h2>
          <div>MentorMii brings together those that have a desire to teach and those that want to 
            learn through coordination of resources and services. 
            </div>
        </div>
      </div>
    );
  }
}
