import React, { Component } from 'react';

//COMPONENTS
import Nav from '../../Components/Nav';
import Break from '../../Components/Break';
import Userform from '../../Components/UserForm';

class Userinfo extends Component {

    render(){
    
        return (
        <div className="Userinfo">
            <Nav/>
            <Break/>
            <Userform/>
        </div>
    )}};
    
export default Userinfo;