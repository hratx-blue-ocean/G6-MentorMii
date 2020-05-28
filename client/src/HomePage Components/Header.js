import React from "react";
import "../Styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Team-A-Header">
        <h1 id="Team-A-Title">MentorMii</h1>
        {/* <div className="Team-A-Search">
          <input id="Team-A-Search" type="search"></input>
          <input type="button"></input>
        </div> */}
        <img
          className="Team-A-Logo"
          src="https://pngimg.com/uploads/letter_m/letter_m_PNG87.png"
        ></img>
      </div>
    );
  }
}
export default Header;
