import React from "react";
import logo from "../DummyData/12055105.jpg"; // Tell webpack this JS file uses this image
import "../Styles/Team-B MentorInfo.css";

class MentorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(props) {
    return (
      <div className="Team-B-MentorInfoPage">
        <div>
          <img className="Team-B-MentorInfoImages" src={logo} alt="Logo" />
        </div>
        <div className="Team-B-Bio">
          <div className="Team-B-MentorName">Sample Name: Display the name of Mentor</div>
          <br></br>
          <div className="Team-B-AboutMe">
            About Me: Display the About me portion of the user selected in the MentorsViewer component. 
          </div>
        </div>

        <div className="Team-B-Grouped-Buttons">
          <button id="Team-B-MessageMii">MessageMii</button>
          <button id="Team-B-VideoChat">Video Chat</button>
          <button id="Team-B-Chat">Chat</button>
          <button id="Team-B-Availability">Availability</button>
        </div>
      </div>
    );
  }
}
export default MentorInfo;
