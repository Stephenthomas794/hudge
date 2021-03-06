import React, { Component } from 'react';
import './index.css'
import { Container, Form, Button} from 'react-bootstrap';

import AlertForSignUp from '../AlertForSignUp'
import Break from '../Break';

class signupform extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            existingUser: null
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
        fetch('http://10.0.0.197:8000/sendEmail', {
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
            if (data['message'] === 0){
                this.setState(state => ({
                    existingUser: 1
                }));
            } else {
                this.setState(state => ({
                    existingUser: null
                }));
            }
            console.log('Success:', data['message']);
        })
    }

render(){

    return (
    <div className="signupform">
        <Container>
        <h1>Sign Up!</h1>
      <p1>An email will be sent to your account with a password.</p1>
      <p1>Please keep this password safe because you will not be able to change it later.</p1>
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
        <Container>
            { this.state.existingUser ? <AlertForSignUp/> : null }
        </Container>
    </div>
)}};

export default signupform;