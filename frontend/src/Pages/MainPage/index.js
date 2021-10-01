import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

//COMPONENTS
import Nav from '../../Components/Nav';
import VideoConferenceOne from '../../Components/VideoConferenceOne';
import VideoConferenceTwo from '../../Components/VideoConferenceTwo';
import Chat from '../../Components/Chat';

class MainPage extends Component {

    render(){
    
        return (
        <div className="MainPage">
            <Nav/>
            <Container>
                <Row>
                    <Col md="auto">
                        <VideoConferenceOne />
                    </Col>
                    <Col md="auto">
                        <VideoConferenceTwo />
                    </Col>
                    <Col md="auto">
                        <Chat />
                    </Col>
                </Row>
            </Container>
        </div>
    )}};
    
export default MainPage;