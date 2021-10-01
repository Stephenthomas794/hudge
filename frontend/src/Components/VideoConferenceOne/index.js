import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import Break from '../Break';

import Store from '../../Store';

import Peer from "simple-peer"
import io from "socket.io-client"

const socket = io.connect('http://0.0.0.0:8000')
class VideoConferenceOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: Store.getState().email['email'],
            name: Store.getState().name['name'],
            localStream: null,
            me: null,
            isOnline: false
        }
        this.startWebCam = this.startWebCam.bind(this);
        this.stopWebCam = this.stopWebCam.bind(this);
        this.setIsOnline = this.setIsOnline.bind(this);
    }

    componentDidMount() {}

    startWebCam (){
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
          }).then((stream) => {
            this.setState({ 
                localStream: stream,
                isOnline: true
            });
          });
          console.log(this.state.localStream);
          this.setIsOnline();
          socket.on("connect", () => {
            console.log(socket.id);
          });

        socket.on("me", (email) => {
          console.log(email.id)
        })
      };
    
      stopWebCam (){
        this.state.localStream.getTracks().forEach((track) => {
          track.stop();
        });
        this.setIsOnline()
        socket.on("disconnect", () => {
          console.log(socket.id); // undefined
        });
      };

      setIsOnline() {
        if (this.state.isOnline){
          this.state.isOnline = false 
        } else if (this.state.isOnline == false){
          this.state.isOnline = true
        }
        console.log(this.state.isOnline)
        const data = {email: this.state.email, isOnline: this.state.isOnline}
        fetch('http://0.0.0.0:8000/isOnline', {
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
    <div className="videoConferenceOne">
        <Container>
            <h1>{this.state.name}</h1>
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
          <Button variant="light" className="WebCamButton" onClick={this.startWebCam}> Start Meeting </Button>

          <Button variant="light" className="WebCamButton" onClick={this.stopWebCam}> Stop Meeting </Button>
            </div>
        </Container>
    </div>
)}};

export default VideoConferenceOne;