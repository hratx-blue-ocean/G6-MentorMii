/* eslint-disable */
import React, { Component } from "react";
// import fetch from "node-fetch";
import Header from "./MainPage Components/MainPage Header.jsx";
import MentorsViewer from "./MainPage Components/MainPage MentorsViewer.jsx";
import Reviews from "./MainPage Components/MainPage Reviews.jsx";
import MentorInfo from "./MainPage Components/MainPage MentorInfo.jsx";
// import ChatBox from "./Team-B Components/Team-B ChatBox.jsx";
// import "./Styles/MainPage.css";
import "./Styles/Team-B App.css";
import axios from "axios";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userName: "userName",
      // Password: "12345",
      mentorsBySkills: [],
      allMentors: [],
      individualMentor: [],
      SelectedMentor: "",
      search: "",
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.SearchDataBase = this.SearchDataBase.bind(this);
    this.getMentorsBySkills = this.getMentorsBySkills.bind(this);
    this.getAllMentor = this.getAllMentor.bind(this);

    this.SelectMentor = this.SelectMentor.bind(this);
  }
  updateSearch(event) {
    this.setState({ search: event.target.value });
    console.log("Search", this.state.search);
  }
  SearchDataBase() {
    const database = this.state.mentorsBySkills;
    console.log(database);
  }

  SelectMentor() {
    this.setState({ SelectedMentor: event.target.textContent });
    console.log("SELECTED MENTOR", this.state.SelectedMentor);
  }

  getMentorsBySkills() {
    const skills = this.state.search;
    axios
      .get("http://localhost:3033/api/Mentor/Skills", {
        params: {
          skills: skills,
        },
      })
      .then((res) => {
        const data = res.data;
        this.setState({ mentorsBySkills: data }, () => {
          console.log("getMentorsBySkills", [data]);
        });
      })
      .catch((err) => {
        console.error();
      });
  }
  getMentors() {
    const mentor = this.state.SelectedMentor;
    axios
      .get("http://localhost:3033/api/Mentor/Skills", {
        params: {
          mentor,
        },
      })
      .then((res) => {
        const data = res.data;
        this.setState({ individualMentor: data }, () => {
          console.log("individualMentor", [data]);
        });
      })
      .catch((err) => {
        console.error();
      });
  }
  getAllMentor() {
    axios
      .get("http://localhost:3033/api/Mentor")
      .then((res) => {
        const data = res.data;
        this.setState({ allMentors: data }, () => {
          console.log("getAllMentor");
        });
      })
      .catch((err) => {
        console.error();
      });
  }
  componentDidMount() {
    this.getAllMentor();
  }
  render(props) {
 
    return (
      <div className="Team-B-App">
        <div className="Team-B-Upper">
          <Header
            updateSearch={this.updateSearch}
            getMentorsBySkills={this.getMentorsBySkills}
            userName={this.state.userName}
            search={this.state.search}
          ></Header>
        </div>
        <div className="Team-B-Center">
          <div className="Team-B-Left">
            <MentorsViewer
              SelectMentor={this.SelectMentor}
              mentorsBySkills={this.state.mentorsBySkills}
            ></MentorsViewer>
          </div>
          <div className="Team-B-Right">
            <MentorInfo
              MentorInfo={this.MentorInfo}
              Info={this.state.mentorsBySkills.map((info) => {
                return (
                  <div className="MentorInfoPage">
                    <img
                      className="Team-B-MentorInfoImages"
                      src={info.picture}
                      alt="Logo"
                    />
                    <div key={info.id}>
                      <div className="Team-B-Name"> {info.firstName}</div>
                      <br></br>
                      <div className="Team-B-AboutMe">
                        <div>{info.bio}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            ></MentorInfo>
            <Reviews
              Reviews={this.state.mentorsBySkills.map((review) => {
                return (
                  <div>
                    <ul className="Team-B-Reviews" key={review.id}>
                      <div>Review by {review.userName}</div>
                      <div>{review.review}</div>
                    </ul>
                  </div>
                );
              })}
            ></Reviews>
          </div>
        </div>
        {/* <ChatBox></ChatBox> */}
      </div>
    );
  }
}

// MessageMiiFunc() {
//   console.log("MessageMiiFunc");
// }
// VideoChatFunc() {
//   console.log("VideoChatFunc");
// }
// ChatFunc() {
//   console.log("ChatFunc");
// }
// Availability() {
//   console.log("Availability");
// }
