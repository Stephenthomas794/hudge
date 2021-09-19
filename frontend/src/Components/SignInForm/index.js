import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Break from '../Break';
import AlertForSignIn from '../AlertForSignIn';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { emailAction } from '../../Actions';


class signinform extends Component {
    constructor(props){
        super();
        this.state = {
            email: '',
            password:'',
            loginFail: null
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleEmailChange(event){
        this.setState({ email: event.target.value })
    }

    handlePasswordChange(event){
        this.setState({ password: event.target.value })
    }

    handleFormSubmit(event){
        event.preventDefault();
        const data = {email: this.state.email, password: this.state.password}
        fetch('http://0.0.0.0:8000/login', {
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
            if (data['message'] === true){
                this.props.emailAction(this.state.email)
                this.props.history.push('/userinfo')
                this.setState(state => ({
                    loginFail: false
                }));
            } else {
                    this.setState(state => ({
                        loginFail: true
                    }));
                console.log('Success:', data['message']);
            }
            
        })
    } 

render(){

    return (
    <div className="signinform">
        <Container>
        <h1>Sign in!</h1>
      <p>Use the password we sent to your email to login.</p>
        </Container>
        <Break/>
        <Container>
        <Form onSubmit={ this.handleFormSubmit }>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><h1>Enter your email</h1></Form.Label>
                <Form.Control type="email" value = { this.state.email} onChange={ this.handleEmailChange } placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><h1>Enter your password</h1></Form.Label>
    <Form.Control type="password" value = { this.state.password} onChange={ this.handlePasswordChange } placeholder="Password" />
  </Form.Group>
  <Button variant="primary" size="lg" type="submit">
      Submit
    </Button>
        </Form>
        </Container>
        <Container>
            { this.state.loginFail ? <AlertForSignIn/> : false }
        </Container>
    </div>
)}};

const mapStateToProps = (state) => {
    return {
        email: state.email
    }
}

const mapDispatchToProps = () => {
    return {
        emailAction
    }
}

export default withRouter (connect(mapStateToProps, mapDispatchToProps())(signinform));