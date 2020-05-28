import React from "react";
import "../Styles/Team-B MentorInfo.css";

class MentorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(props) {
    return (
      <div className="Team-B-MentorInfoPage">
        {this.props.Info[3]}
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
