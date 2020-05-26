/* eslint-disable */
import React from "react";
import "../Styles/Team-B MentorsViewer.css";

function MentorsViewer(props) {
  return (
    <div>
      <div>MentorsViewer</div>
      <div onClick={props.MentorsViewerFunc} className="Team-B-MentorsViewer">
        {props.Mentors}
      </div>
    </div>
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
