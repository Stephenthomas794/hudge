import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Break from '../Break';

import Store from '../../Store'

class VideoConferenceOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
            localStream: null
        }
    }
    componentDidMount() {}

    startWebCam = () => {
        const that = this;
        navigator.mediaDevices
          .getUserMedia({
            audio: true,
            video: true
          })
          .then((stream) => {
            that.setState({ localStream: stream });
          });
      };
    
      stopWebCam = () => {
        this.state.localStream.getTracks().forEach((track) => {
          track.stop();
        });
      };

render(){

    return (
    <div className="videoConferenceOne">
        <Container>
            <h1>{Store.getState().name['name']}</h1>
        </Container>
        <Break/>
        <Container>
        {this.state.localStream && (
          <video autoplay="true" muted="muted" ref={(video) => {
              if (video) {
                video.srcObject = this.state.localStream;
              }
            }}
          />
        )}
        </Container>
        <Container>

        <div className="d-grid gap-2">
          <Button variant="light" className="WebCamButton" onClick={this.startWebCam.bind(this)}>
            Start
          </Button>

          <Button variant="light" className="WebCamButton" onClick={this.stopWebCam.bind(this)}>
            Stop
          </Button>
            </div>
        </Container>
    </div>
)}};

export default VideoConferenceOne;