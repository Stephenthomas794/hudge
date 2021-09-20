import React, { Component } from 'react';

import { Container, Form, Button} from 'react-bootstrap';

import { connect } from 'react-redux';
import { emailAction } from '../../Actions/emailAction';
import { nameAction } from '../../Actions/nameAction';
import { combinedAction } from '../../Actions/combinedAction';
import { withRouter } from 'react-router-dom';

import Break from '../Break';

class userinfoform extends Component {
    constructor(props){
        super();
        this.state = {
            name: '',
            email: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    componentDidMount(){
        this.setState({
            email: this.props.email['email']
        })
    }
    
    handleNameChange(event){
        this.setState({ name: event.target.value })
    }

    handleFormSubmit(event){
        event.preventDefault();
        console.log(this.state.email)
        const data = {email: this.state.email, name: this.state.name}
        console.log(data)
        fetch('http://0.0.0.0:8000/userDataStore', {
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
            if (data['message'] === true){
                this.props.nameAction(this.state.name)
                console.log('Success:', data);
                this.props.history.push('/mainpage')
            } else{
                console.log("FAILURE")
            }
        })
    }

render(){

    return (
    <div className="userinfoform">
        <Container>
        <h1>Thank you for joining us!</h1>
      <p>Please fill out the form below</p>
      <p>You may click continue if you do not have preferences as to who to be matched up with</p>
        </Container>
        <Break/>
        <Container>
        <Form onSubmit={this.handleFormSubmit} >
            <Form.Group className="mb-3" controlId="basicName">
                <Form.Label><h1>Enter your Name</h1></Form.Label>
                <Form.Control type="Name" placeholder="Name Here" value = { this.state.name } onChange={ this.handleNameChange }/>
            </Form.Group>
            <Button variant="primary" size="lg" type="submit">
      Continue
    </Button>
        </Form>
        </Container>
    </div>
)}};

const mapStateToProps = (state) => {
    return {
        email: state.email,
        name: state.name
    }
}

const mapDispatchToProps = () => {
    return {
        emailAction,
        nameAction, 
        combinedAction
    }
}

export default withRouter (connect(mapStateToProps, mapDispatchToProps())(userinfoform));