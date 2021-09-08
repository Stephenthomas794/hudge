import React, { Component } from 'react';

import { Container, Form, Button } from 'react-bootstrap';
import Break from '../Break';

class signinform extends Component {

render(){

    return (
    <div className="signinform">
        <Container>
        <h1>Sign in!</h1>
      <p>Use the password we sent to your email to login.</p>
        </Container>
        <Break/>
        <Container>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><h1>Enter your email</h1></Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><h1>Enter your password</h1></Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" size="lg">
      Submit
    </Button>{' '}
        </Form>

        </Container>
    </div>
)}};

export default signinform;