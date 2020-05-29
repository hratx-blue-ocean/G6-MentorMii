/* eslint-disable */
import React from "react";
import Mentors from "./MainPage Mentors.jsx";
import "../Styles/Team-B MentorsViewer.css";

function MentorsViewer(props) {
  return (
    <Mentors
      mentorsBySkills={props.mentorsBySkills.map((mentors, index) => {
        return (
          <button onClick={props.SelectMentor} key={index}>
            <div className="Team-B-Mentor" value={index}>
              <img className="Team-B-ReviewImages" src={mentors.picture} />
              <div>
                {mentors.firstName} {mentors.lastName}
              </div>
            </div>
            <br></br>
          </button>
        );
      })}
    ></Mentors>
  );
}
export default MentorsViewer;

//DummyData:
{
  /* <br></br>
          <div onClick={this.props.MentorsViewerFunc} className="Team-B-Mentor">
            <img className="Team-B-ReviewImages" src={logo} alt="Logo" />
            <div>Chief Wiggums</div>
          </div>
          <br></br>
          <div onClick={this.props.MentorsViewerFunc} className="Team-B-Mentor">
            <img className="Team-B-ReviewImages" src={logo} alt="Logo" />
            <div>Hamburgler</div>
          </div>
          <br></br>
          <div onClick={this.props.MentorsViewerFunc} className="Team-B-Mentor">
            <img className="Team-B-ReviewImages" src={logo} alt="Logo" />
            <div>Patrick Star</div>
          </div>
          <br></br>
          <div onClick={this.props.MentorsViewerFunc} className="Team-B-Mentor">
            <img className="Team-B-ReviewImages" src={logo} alt="Logo" />
            <div>Baul Plart</div>
          </div>
          <br></br>
          <div onClick={this.props.MentorsViewerFunc} className="Team-B-Mentor">
            <img className="Team-B-ReviewImages" src={logo} alt="Logo" />
            <div>Officer Barbrady</div>
          </div>
          <br></br>
          <div onClick={this.props.MentorsViewerFunc} className="Team-B-Mentor">
            <img className="Team-B-ReviewImages" src={logo} alt="Logo" />
            <div>Officer Barbrady</div>
          </div> */
}
