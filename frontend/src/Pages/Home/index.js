import React, { Component } from 'react';

//COMPONENTS
import Nav from '../../Components/Nav';
import Intro from '../../Components/Intro';

import Break from '../../Components/Break';

class Home extends Component {

    render(){
    
        return (
        <div className="Home">
            <Nav/>
            <Intro/>
        </div>
    )}};
    
export default Home;