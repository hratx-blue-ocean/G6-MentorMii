/* eslint-disable */
import React from "react";
import '../Styles/SignIn.css';


class SignIn extends React.Component {
  render() {
    return (
      <div className="Team-A-signIn">         
              <div>                 
                  <label className="signInTitle"> MentorMii Sign In </label>
                  <input type="text" id="userName" placeholder="Username" name="user" />
                  <input type="password" id="password" placeholder="Password" name="pw" /> 
                  <button type="submit" id="signIn" >Sign In</button>                                    
              </div>          
      </div>
    );
  }
}
export default SignIn;