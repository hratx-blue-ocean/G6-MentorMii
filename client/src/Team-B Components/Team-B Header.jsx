import React from "react";
import '../Styles/Team-B Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Team-B-Header">
        <h1 id="Team-B-Title">MentorMii</h1>
        <div className="Team-B-Search">
          <input id="Team-B-Search" type="search"></input>
          <input type="button"></input>
        </div>
        <div id="Team-B-UserName">[username goes here]</div>
      </div>
    );
  }
}
export default Header;
