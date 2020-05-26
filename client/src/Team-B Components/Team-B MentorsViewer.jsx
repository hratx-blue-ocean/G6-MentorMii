/* eslint-disable */
import React from "react";
import "../Styles/Team-B MentorsViewer.css";
import logo from "../DummyData/12055105.jpg"; // Tell webpack this JS file uses this image

class MentorsViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(props) {
    return (
      <div>
        MentorsViewer
      {this.props.Mentors}
        <div className="Team-B-MentorsViewer">
          <div onClick={this.props.MentorsViewerFunc} className="Team-B-Mentor">
            {/* <img className="Team-B-ReviewImages" src={logo} alt="Logo" /> */}
            <div></div>
          </div>
          <div>
          </div>
          <br></br>
        </div>
      </div>
    );
  }
}
export default MentorsViewer;


//DummyData:
{/* <br></br>
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
          </div> */}
