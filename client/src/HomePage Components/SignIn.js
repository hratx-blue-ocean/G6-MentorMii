import React from "react";
import "../Styles/SignIn.css";

class SignIn extends React.Component {
  render() {
    return (
      <div className="Team-A-signIn">
        <form className="Team-A-Username">
          <div>
            {/* <label className="signInTitle"> MentorMii Sign In </label> */}
            <input
              type="text"
              id="userName"
              placeholder="Username"
              name="name"
            />
            <input
              type="text"
              id="password"
              placeholder="Password"
              name="name"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
