import React, { Component } from 'react';
// import fetch from 'node-fetch';
import {Button ,Modal, Form} from 'react-bootstrap'
// import './App.css';

export default class App extends Component {
                 // constructor(props) {
                 //   super(props);
                 //   this.state = {
                 //     seaCreatures: []
                 //   };
                 //   this.api = `http://localhost:8000/api/example`;
                 // }
                 // componentDidMount() {
                 //   fetch(this.api)
                 //     .then(res => res.json())
                 //     .then(seaCreatures => {
                 //       this.setState({ seaCreatures: seaCreatures.data });
                 //     });
                 // }

                 render() {
                   return (
                     <div>
                       <Modal show={true}>
                         <Modal.Header>
                         <Modal.Title>Mentii Sign Up</Modal.Title>
                               </Modal.Header>
                         <Modal.Body>
                           <Form>
                             <Form.Group controlId="formBasicFirstname">
                               <Form.Control
                                 type="firstname"
                                 placeholder="First Name"
                               />
                               <Form.Text className="text-muted"></Form.Text>
                             </Form.Group>
                             <Form.Group controlId="formBasicLastname">
                               <Form.Control
                                 type="lastname"
                                 placeholder="Last Name"
                               />
                               <Form.Text className="text-muted"></Form.Text>
                             </Form.Group>
                             <Form.Group controlId="formBasicUserName">
                               <Form.Control
                                 type="username"
                                 placeholder="Username"
                               />
                             </Form.Group>
                             <Form.Group controlId="formBasicPassword">
                               <Form.Control
                                 type="password"
                                 placeholder="Password"
                               />
                             </Form.Group>
                             <Form.Group controlId="formBasicEmail">
                               <Form.Control type="email" placeholder="Email" />
                             </Form.Group>

                             <Button variant="primary" type="signup">
                               Sign Up
                             </Button>
                           </Form>

                       </Modal.Body>
                      
                       </Modal>
                     </div>
                   );
                 }
               }
