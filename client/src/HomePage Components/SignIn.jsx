/* eslint-disable */
import React from "react";
import "../Styles/SignIn.css";
import { Modal, Button, Form } from "react-bootstrap";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.modalTurnOn = this.modalTurnOn.bind(this);
  }

  modalTurnOn(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="Team-A-signIn">
        <div>
          <button onClick={this.modalTurnOn} className="SignInButton">
            {" "}
            Sign In{" "}
          </button>
          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>MentorMii Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="signInUserName">
                  <Form.Control
                    type="text"
                    onChange={this.firstNameInput}
                    placeholder="Username"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group controlId="signInPassWord">
                  <Form.Control
                    type="password"
                    onChange={this.firstNameInput}
                    placeholder="Password"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Button
                  className="modalSignInButton"
                  variant="primary"
                  type="submit"
                  onClick={this.signUpButton}
                >
                  {" "}
                  Sign in{" "}
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}
export default SignIn;
