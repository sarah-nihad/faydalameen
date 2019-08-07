
import React, { Component } from 'react';

import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


class Nav2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <div>


     


        <Navbar expand="lg" id="navmain">


          <Navbar.Brand href="/" id='logcolor'  ><img src={require('../img/log1.png')} id='navlogo' alt='img' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            </Nav>
          <div id='navcompone'  >
            <div id='contact'>
              <NavLink to="/Home" >Home</NavLink></div>
          
              <div id='contact'>
              <NavLink to="/Contact" > Contact</NavLink></div>
           
              <NavLink to="/About" >  About </NavLink> 
                <NavLink to="/Profile" > Arabic</NavLink>
                </div>

          </Navbar.Collapse>

        </Navbar>












      </div>
    );
  }
}

export default Nav2;