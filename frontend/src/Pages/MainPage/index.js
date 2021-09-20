import React, { Component } from 'react';

//COMPONENTS
import Nav from '../../Components/Nav';
import VideoConference from '../../Components/VideoConference';

class MainPage extends Component {

    render(){
    
        return (
        <div className="MainPage">
            <Nav/>
            <VideoConference />
        </div>
    )}};
    
export default MainPage;