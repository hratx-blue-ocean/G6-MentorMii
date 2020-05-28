/* eslint-disable */
import React, { Component } from "react";
import Header from "./HomePage Components/Header.jsx";
import SignIn from "./HomePage Components/SignIn.jsx";
import SignUp from "./HomePage Components/SignUp.jsx";
import MainPage from "./MainPage.jsx";
import "./Styles/App.css";
import "./Styles/MainPage.css";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="headerBorder"></div>
        <Header />

        <SignIn />

        <SignUp />
        <MainPage></MainPage>
      </div>
    );
  }
}
