import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import store from '../../Store'


class VideoConferenceOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: ''
        }
    }


render(){

    return (
    <div className="videoConferenceOne">
        <Container>
        <h1>{store.getState().name['name']}</h1>
        </Container>
    </div>
)}};

export default VideoConferenceOne;