import React, { Component } from "react";
import fetch from "node-fetch";
import Header from "./Team-B Components/Team-B Header.jsx";
import MentorsViewer from "./Team-B Components/Team-B MentorsViewer.jsx";
import Reviews from "./Team-B Components/Team-B Reviews.jsx";
import ChatBox from "./Team-B Components/Team-B ChatBox.jsx";

import './Styles/Team-B App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: [],
    };
    this.api = `http://localhost:8000/api/example`;
  }

  componentDidMount() {
    fetch(this.api)
      .then((res) => res.json())
      .then((seaCreatures) => {
        this.setState({ seaCreatures: seaCreatures.data });
      });
  }

  render() {
    return (
      <div className="Team-B-App">
        <div className="Team-B-Upper">
          <Header></Header>
        </div>
        <div className="Team-B-Center">
        <div className="Team-B-Left">
          <MentorsViewer></MentorsViewer>
        </div>
        <div className="Team-B-Right">
          <Reviews></Reviews>
          <ChatBox></ChatBox>
        </div>
        </div>
      </div>
    );
  }

  /* <h1>Welcome to Blue Ocean!</h1>
<ul>
  {this.state.seaCreatures.map((creature, index) => (
    <li key={index}>{creature}</li>
  ))}
</ul> */
}
