import React, { Component } from 'react';

import { Container, Form, Button } from 'react-bootstrap';
import Break from '../Break';

class signupform extends Component {
    constructor(){
        super();
        this.state = {
            email: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleEmailChange(event){
        this.setState({ email: event.target.value })
    }

    handleFormSubmit(event){
        event.preventDefault();
        
        const data = {email: this.state.email}
        fetch('http://0.0.0.0:8000/sendEmail', {
            crossDomain: true,
            mode: 'cors',
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
    }

render(){

    return (
    <div className="signupform">
        <Container>
        <h1>Sign Up!</h1>
      <p>An email will be sent to your account with a password.</p>
      <p>Please keep this password safe because you will not be able to change it later.</p>
        </Container>
        <Break/>
        <Container>
        <Form onSubmit={this.handleFormSubmit} >
            <Form.Group className="mb-3" controlId="basicEmail">
                <Form.Label><h1>Enter your email</h1></Form.Label>
                <Form.Control type="email" placeholder="name@example.com"  value = { this.state.email} onChange={ this.handleEmailChange }/>
            </Form.Group>
            <Button variant="primary" size="lg" type="submit">
      Submit
    </Button>
        </Form>

        </Container>
    </div>
)}};

export default signupform;