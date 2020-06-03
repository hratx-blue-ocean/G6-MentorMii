import React from "react";
import "../Styles/Team-B MentorInfo.css";

class MentorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(props) {
    // const mentors = this.props.mentorsBySkills;
    // for (let i = 0; i < mentors.length; i++) {
    //   if (this.state.SelectedMentor === mentors[i].firstName && this.state.SelectedMentor === mentors[i].lastName) {
    //     return (
    //       <div>
    //         "sd"<div></div>
    //       </div>
    //     );
    //   }
    // }
    return (
      <div className="Team-B-MentorInfoPage">
      {this.props.Info}
      </div>
    );
  }
}
export default MentorInfo;
