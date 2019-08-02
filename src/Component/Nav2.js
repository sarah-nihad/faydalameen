
import React, { Component } from 'react';
import './css.css'
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
      <div className="navmain">


     


        <Navbar expand="lg" id="navmain">


          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            </Nav>
          <div id='navcompone'  >
              <NavLink to="/" id="contact">Home</NavLink>
          

         
           
              <NavLink to="/About" id="contact">  About </NavLink> 
 
            
                <NavLink to="/Contact" id="contact">Contact</NavLink>
         
                {/* <NavLink to="/Blog" id="contact">Blog</NavLink> */}
                </div>

          </Navbar.Collapse>

        </Navbar>












      </div>
    );
  }
}

export default Nav2;