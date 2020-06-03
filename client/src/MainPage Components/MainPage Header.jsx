/* eslint-disable */
import React from "react";
// import App from "../Team-B App";
import "../Styles/Team-B Header.css";

function Header(props) {
  return (
    <div className="Team-B-Header">
      <h1 id="Team-B-Title">MentorMii</h1>
      <div className="Team-B-Search">
        <input
          value={props.search}
          onChange={props.updateSearch}
          placeholder="Desired skill.."
          id="Team-B-Search"
          type="search"
        ></input>
        <button
          id="Team-B-SearchButton"
          type="submit"
          onClick={() => {
            props.getMentorsBySkills();
          }}
        ></button>
      <div id="Team-B-UserName">{props.userName}</div>
      </div>
    </div>
  );
}
export default Header;
