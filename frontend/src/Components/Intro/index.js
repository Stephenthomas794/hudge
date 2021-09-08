import React, { Component } from 'react';


import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

import Break from '../Break';


class Intro extends Component {

render(){

    return (
    <div className="Intro">
        <Break/>
    <Jumbotron fluid>
      <Container>
      <h1>Hudge</h1>
      <p>A platform that connects you with your fellow coworkers across your organization with 5 minute video chats</p>
            <p>With our optional filters you can narrow down your network of intrests as well</p>
      </Container>
      <div class="container">
        <div class="row">
            <div class="col-sm">
            <Button variant="primary" href="/signup">
         Sign Up!
        </Button>
            </div>
            <div class="col-sm">
            <Button variant="primary" href="/signin">
         Sign In!
        </Button>
            </div>
        </div>
       </div>
            <Container>

        <Break/>

      </Container>
    </Jumbotron>
        <Break/>
        <Container>
            <h1>Companies Affiliated</h1>
        </Container>
        <Break/>
    </div>
)}};

export default Intro;