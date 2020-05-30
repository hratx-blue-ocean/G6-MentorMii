/* eslint-disable */
import React, { Component } from "react";
import Header from "./HomePage Components/Header.jsx";
import SignIn from "./HomePage Components/SignIn.jsx";
import SignUp from "./HomePage Components/SignUp.jsx";
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
        <div className="headerBorder"></div>
        <Header />

        <SignIn handleLoginClick={this.handleLoginClick} />

        <SignUp />
      </div>
    );
  }
}
