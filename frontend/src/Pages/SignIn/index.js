import React, { Component } from 'react';

//COMPONENTS
import Nav from '../../Components/Nav';
import Signinform from '../../Components/SignInForm';

import Break from '../../Components/Break';

class SignIn extends Component {

    render(){
    
        return (
        <div className="SignIn">
            <Nav/>
            <Signinform/>
        </div>
    )}};
    
export default SignIn;