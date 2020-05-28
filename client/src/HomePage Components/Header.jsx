/* eslint-disable */
import React from "react";
import "../Styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="border"></div>
        <h1 className="header">MentorMii</h1>
        <img className="teamALogo" src="https://i.imgur.com/YunIP4I.png"></img>
      </div>
    );
  }
}
export default Header;
