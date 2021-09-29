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
                    <Col xs={4}>
                        <VideoConferenceOne />
                    </Col>
                    <Col xs={5}>
                        <VideoConferenceTwo />
                    </Col>
                    <Col xs={3}>
                        <Chat />
                    </Col>
                </Row>
            </Container>
        </div>
    )}};
    
export default MainPage;