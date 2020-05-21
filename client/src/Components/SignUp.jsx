/* eslint-disable */
import React from 'react';
import '../Styles/SignUp.css';
import { BsQuestionCircleFill } from "react-icons/bs";

class SignUp extends React.Component {
    render() {
      return (
        <div className="Team-A-signUp">
            <h3 className="mentorLabel">Mentor</h3>
            <h3 className="mentiiLabel">Mentii</h3>
            <img className="daniel" src="https://i.imgur.com/EmiyKBV.png" ></img>
            <img className="miyagi" src="https://i.imgur.com/TJmwBTm.png" ></img>  
            <input type="checkbox" className="danielCheck"></input>          
            <input type="checkbox" className="miyagiCheck"></input>
            <BsQuestionCircleFill className="danielQuestion"/>
            <BsQuestionCircleFill className="miyagiQuestion"/>
            <button type="submit" name="signUp" className="signUp">Sign Up</button>
        </div>
      );
    }
  }
  export default SignUp;