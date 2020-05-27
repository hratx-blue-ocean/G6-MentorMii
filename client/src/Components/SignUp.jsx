/* eslint-disable */
import React from 'react';
import '../Styles/SignUp.css';
import { BsQuestionCircleFill } from "react-icons/bs";
// import {Modal, Button, Form} from "react-bootstrap";
// import MentorSignUp from './MentorSignUp';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }
    render() {
      return (
        <div className="Team-A-signUp">
            <h3 className="mentorLabel">Mentor</h3>
            <h3 className="mentiiLabel">Mentii</h3>
            <img className="daniel" src="https://i.imgur.com/EmiyKBV.png" ></img>
            <img className="miyagi" src="https://i.imgur.com/TJmwBTm.png" ></img>  
            <input type="checkbox" className="danielCheck"></input>          
            <input type="checkbox" className="miyagiCheck"></input>
            <BsQuestionCircleFill className="danielQuestion" title="A Mentii is someone who will use MentorMii to seek a Mentor to learn from." />
            <BsQuestionCircleFill className="miyagiQuestion" title="As a Mentor, it's your duty to teach Mentii's who seek your knowledge." />
            <button type="submit" name="signUp" className="signUp" >Sign Up</button>
            
        </div>
      );
    }
  }
  export default SignUp;



                   