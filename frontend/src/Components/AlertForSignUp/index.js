import React, { Component } from 'react';
import Break from '../Break';

import './index.css'
class AlertForSignUp extends Component {

    render(){
    
        return (
        <div className="AlertForSignUp">
               <p90>You already have an account</p90>
               <Break />
               <p90>Please check your emails for the password we have sent</p90>
        </div>
    )}};
    
    export default AlertForSignUp;

    