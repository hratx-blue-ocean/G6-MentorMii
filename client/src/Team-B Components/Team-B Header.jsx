/* eslint-disable */
import React from "react";
// import App from "../Team-B App";
import "../Styles/Team-B Header.css";

function Header(props) {
  return (
    <div className="Team-B-Header">
      <h1 id="Team-B-Title">MentorMii</h1>
      <div className="Team-B-Search">
        <input id="Team-B-Search" type="search"></input>
        <input
          id="Team-B-SearchButton"
          type="button"
          onClick={props.SearchFunc}
        ></input>
      </div>
      <div id="Team-B-UserName">[username goes here]</div>
    </div>
  );
}
export default Header;
