import React, { Component } from 'react';

import { Navbar } from 'react-bootstrap';

import Break from '../Break';

class Nav extends Component {

render(){

    return (
    <div className="Nav">
    <Navbar bg="dark" variant="dark">
      <Break/>
  <Navbar.Brand href="/">Hudge</Navbar.Brand>
</Navbar>
    </div>
)}};

export default Nav;