/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: [],
      mentii: []
    };

  }

  getAllMentor() {
    axios.get("http://localhost:3033/api/Mentor")
    .then((res) => {
      const data = res.data
      this.setState({ mentors: data }, () => {
        console.log('Mentor front end GET works');
      });
    })
    .catch((err) => {
      console.error();
    })
  }

  getAllMentii() {
    axios.get("http://localhost:3033/api/Mentii")
      .then((res) => {
        const data = res.data;
        this.setState({ mentii: data }, () => {
          console.log('Mentii front end GET works');
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  componentDidMount() {
    this.getAllMentii();
    this.getAllMentor();
  }
  render() {
    return (
      <div>
        <h1>Paul's Code</h1>
        <div>
          {this.state.mentors.map((value, index) => (
            <div key={index}>
              <h3>Mentor</h3>
              <ul>
              <li>{value.name}</li>
              <li>{value.skill}</li>
              <li>Review: {value.review}</li>
              <li>User Name: {value.userName}</li>
              <li>User Password: {value.password}</li>
              <img src={value.picture}/>
              </ul>

            </div>
          ))}
        <div>
          {this.state.mentii.map((value, index) => (
            <div key={index}>
              <h3>Mentii</h3>
              <ul>
              <li>{value.name}</li>
              <li>User Name: {value.userName}</li>
              <li>User Password: {value.password}</li>
              <img src={value.picture}/>
              </ul>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}