/* eslint-disable */
import React from "react";
import "../Styles/SignUp.css";
import axios from "axios";
import { BsQuestionCircleFill } from "react-icons/bs";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      mentorCheck: undefined,
      mentiiCheck: undefined,

      firstName: "",
      lastName: "",
      skill: "",
      username: "",
      email: "",
      bio: "",
      password: "",
    };
    this.signUpButton = this.signUpButton.bind(this);
    this.modalTurnOn = this.modalTurnOn.bind(this);
    this.modalTurnOff = this.modalTurnOff.bind(this);
    this.firstNameInput = this.firstNameInput.bind(this);
    this.lastNameInput = this.lastNameInput.bind(this);
    this.userNameInput = this.userNameInput.bind(this);
    this.emailInput = this.emailInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.skillInput = this.skillInput.bind(this);
    this.bioInput = this.bioInput.bind(this);
  }

  postNewMentor() {
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let skill = this.state.skill;
    let userName = this.state.username;
    let email = this.state.email;
    let bio = this.state.bio;
    let password = this.state.password;
    axios
      .post("http://localhost:3033/api/Mentor", {
        firstName,
        lastName,
        skill,
        password,
        userName,
        email,
        bio,
      })
      .then((res) => {
        console.log("front end post works");
        this.getAllMentor();
      })
      .catch((err) => {
        console.log("error on post frontend");
      });
  }

  firstNameInput(e) {
    e.preventDefault();
    this.setState({ firstName: e.target.value });
    console.log();
  }

  lastNameInput(e) {
    e.preventDefault();
    this.setState({ lastName: e.target.value });
  }

  userNameInput(e) {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }
  emailInput(e) {
    e.preventDefault();
    this.setState({ email: e.target.value });
  }
  passwordInput(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  skillInput(e) {
    e.preventDefault();
    this.setState({ skill: e.target.value });
  }

  bioInput(e) {
    e.preventDefault();
    this.setState({ bio: e.target.value });
  }

  modalTurnOn(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }
  modalTurnOff() {
    this.setState({ showModal: false });
  }
  signUpButton(e) {
    e.preventDefault();
    this.modalTurnOff();
    this.postNewMentor();
  }

  render() {
    return (
      <div className="Team-A-signUp">
        <h3 className="mentorLabel">Mentor</h3>
        <h3 className="mentiiLabel">Mentii</h3>
        <img className="daniel" src="https://i.imgur.com/EmiyKBV.png"></img>
        <img className="miyagi" src="https://i.imgur.com/TJmwBTm.png"></img>
        <input
          type="checkbox"
          className="danielCheck"
          checked={this.state.mentiiCheck}
        ></input>
        <input
          type="checkbox"
          className="miyagiCheck"
          checked={this.state.mentorCheck}
        ></input>
        <BsQuestionCircleFill
          className="danielQuestion"
          title="A Mentii is someone who will use MentorMii to seek a Mentor to learn from."
        />
        <BsQuestionCircleFill
          className="miyagiQuestion"
          title="As a Mentor, it's your duty to teach Mentii's who seek your knowledge."
        />
        <button
          type="submit"
          name="signUp"
          className="signUp"
          onClick={this.modalTurnOn}
        >
          Sign Up
        </button>
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Mentor Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicFirstname">
                <Form.Control
                  type="text"
                  onChange={this.firstNameInput}
                  placeholder="First Name"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicLastname">
                <Form.Control
                  type="text"
                  onChange={this.lastNameInput}
                  placeholder="Last Name"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicUserName">
                <Form.Control
                  type="text"
                  onChange={this.userNameInput}
                  placeholder="Username"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  onChange={this.passwordInput}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={this.emailInput}
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicSkill">
                <Form.Control
                  type="text"
                  onChange={this.skillInput}
                  placeholder="Skill"
                />
              </Form.Group>
              <Form.Group controlId="formBasicBio">
                <Form.Control
                  type="text"
                  onChange={this.bioInput}
                  placeholder="Bio"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={this.signUpButton}
              >
                {" "}
                Sign Up{" "}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default SignUp;
