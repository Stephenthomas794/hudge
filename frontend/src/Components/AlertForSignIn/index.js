import React, { Component } from 'react';
import Break from '../Break';

import './index.css'
class AlertForSignIn extends Component {

    render(){
    
        return (
        <div className="AlertForSignIn">
               <p90>Your email may be incorrect</p90>
               <Break />
               <p90>Your password may be incorrect</p90>
        </div>
    )}};
    
    export default AlertForSignIn;

    