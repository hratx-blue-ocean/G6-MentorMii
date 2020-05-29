/* eslint-disable */
import React from "react";
// import "../Styles/Team-B Mentors.css";

function Mentors(props) {
  return (
    <div>
      <div>Mentors</div>
      <div className="Team-B-Mentors"
      >{props.mentorsBySkills}</div>
    </div>
  );
}
export default Mentors;
