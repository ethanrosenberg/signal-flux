import React from 'react';
import logo from '../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom'

const NavigationBar = () => {


    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' SignalFLUX'}
        </Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/searchTwitter">Twitter Search</Nav.Link>
          <Nav.Link href="#pricing">Social Image AI</Nav.Link>
          <Nav.Link href="#pricing">Cell Analyzer</Nav.Link>
          <Nav.Link href="#pricing">Email Analyzer</Nav.Link>
        </Nav>
      </Navbar>
    )

}

export default NavigationBar
