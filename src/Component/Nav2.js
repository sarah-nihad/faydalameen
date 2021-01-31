
import React, { Component } from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Context from '../assets/js/Context'

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
      <Context.Consumer>
        {ctx => {
          return (
            <div>





              <Navbar expand="lg" id="navmain">


                <Navbar.Brand href="/" id='logcolor'  ><img src={require('../img/lll.png')} id='navlogo' alt='img' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">

                  </Nav>
                  {localStorage.getItem('Lang') === 'en' ?(
   <div id='navcompone'  >
   <div id='contact'>
     <NavLink to="/Home" >Home</NavLink></div>

   <div id='contact'>
     <NavLink to="/Contact" > Contact</NavLink></div>
   <NavLink to="/About" >  About </NavLink>


   <div className="dropdown"  >language
       <div className="dropdown-content">
       <div id='Bt_link' onClick={() => {
         localStorage.setItem('Lang','ar')
         window.location.reload()
       }} >   Arabic  </div>
       <div id='Bt_link' onClick={() => {
       localStorage.setItem('Lang','en')
         window.location.reload()
       }} >    English  </div>

     </div>

   </div>

 </div>
                  ):(
                    <div id='navcompone'  >
                    <div id='contact'>
                      <NavLink to="/Home" >الرئيسية</NavLink></div>
                 
                    <div id='contact'>
                      <NavLink to="/Contact" > تواصل معنا</NavLink></div>
                    <NavLink to="/Profile" >  عن الشركة </NavLink>
                 
                 
                    <div className="dropdown"  >اللغة
                        <div className="dropdown-content">
                        <div id='Bt_link' onClick={() => {
                          ctx.action.changLanguage('ar')
                          window.location.reload()
                        }} >   العربية  </div>
                        <div id='Bt_link' onClick={() => {
                        localStorage.setItem('Lang','en')
                          window.location.reload()
                        }} >    الانجليزية  </div>
                 
                      </div>
                 
                    </div>
                 
                  </div>
                  )}
               

                </Navbar.Collapse>

              </Navbar>


            </div>
          )
        }}
      </Context.Consumer>
    );
  }
}

export default Nav2;