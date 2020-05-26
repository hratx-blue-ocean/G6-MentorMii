/* eslint-disable */
import React, { Component } from "react";
// import fetch from "node-fetch";
import Header from "./Team-B Components/Team-B Header.jsx";
import MentorsViewer from "./Team-B Components/Team-B MentorsViewer.jsx";
import Reviews from "./Team-B Components/Team-B Reviews.jsx";
import MentorInfo from "./Team-B Components/Team-B MentorInfo.jsx";
import { DATABASE } from "./DummyData/DummyData.js";
// import ChatBox from "./Team-B Components/Team-B ChatBox.jsx";
import "./Styles/Team-B App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "Username",
      Password: "12345",
      Mentors: DATABASE,
      Search: "",
    };
    this.SearchFunc = this.SearchFunc.bind(this);
    this.MentorsViewerFunc = this.MentorsViewerFunc.bind(this);
    this.MentorInfo = this.MentorInfo.bind(this);
    this.ReviewsInfo = this.ReviewsInfo.bind(this);
  }
  SearchFunc(e) {
    if (this.state.Search === this.state.Mentors) {
      console.log(this.state.Mentors);
    }
  }
  MentorsViewerFunc() {
    console.log("MentorsViewerFunc");
  }
  MentorInfo() {
    console.log("MentorInfo");
  }
  ReviewsInfo() {
    console.log("ReviewsInfo");
  }
  MessageMiiFunc() {
    console.log("MessageMiiFunc");
  }
  VideoChatFunc() {
    console.log("VideoChatFunc");
  }
  ChatFunc() {
    console.log("ChatFunc");
  }
  Availability() {
    console.log("Availability");
  }
  render() {
    return (
      <div className="Team-B-App">
        <div className="Team-B-Upper">
          <Header
            SearchFunc={this.SearchFunc}
            Username={this.state.Username}
          ></Header>
        </div>
        <div className="Team-B-Center">
          <div className="Team-B-Left">
            <MentorsViewer
              MentorsViewerFunc={this.MentorsViewerFunc}
              Mentors={this.state.Mentors.map(function (mentor) {
                return (
                  <div className="Team-B-MentorsViewer">
                    <div className="Team-B-Mentor" key={mentor.id}>
                      <img className="Team-B-ReviewImages" src={mentor.image} />
                      <div>{mentor.name}</div>
                    </div>
                  </div>
                );
              })}
            ></MentorsViewer>
          </div>
          <div className="Team-B-Right">
            <MentorInfo MentorInfo={this.MentorInfo}></MentorInfo>
            <Reviews ReviewsInfo={this.ReviewsInfo}></Reviews>
          </div>
        </div>
        {/* <ChatBox></ChatBox> */}
      </div>
    );
  }
}

/* <h1>Welcome to Blue Ocean!</h1>
<ul>
  {this.state.seaCreatures.map((creature, index) => (
    <li key={index}>{creature}</li>
  ))}
</ul> */
