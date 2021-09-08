import React, { Component } from 'react';

//COMPONENTS
import Nav from '../../Components/Nav';
import Signupform from '../../Components/SignUpForm';
import Break from '../../Components/Break';

class Signup extends Component {

    render(){
    
        return (
        <div className="Signup">
            <Nav/>
            <Break/>
            <Signupform/>
        </div>
    )}};
    
export default Signup;