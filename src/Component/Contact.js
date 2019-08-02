import React, { Component } from 'react';
import './css.css';
import { Row, Col ,Button} from 'react-bootstrap';
import {  TextInput,  Textarea } from 'evergreen-ui';
class Contact extends Component {

  render() {
    return (
      <div id='contacthome'>

        <div id='contactpage'>
          <Row style={{ marginRight: 0 }} id='maprow'><Col xs={12} >
            {/* <div class="mapouter"><div class="gmap_canvas"> */}
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20baghdad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            {/* </div>
     </div> */}


          </Col></Row>
          <Row style={{ marginRight: 0 }} id='contactrow'>
            <Col md={4}>
              <p id='sarstylefont'>ADDRESS:</p>
           <div>  <i class="fas fa-home"></i>    <span style={{paddingLeft:'10px'}} >  138 Atlantis Ln</span></div> 
              <div style={{paddingLeft:'32px'}}  >Kingsport</div>
              <div style={{paddingLeft:'32px'}}       >Illinois121164</div>
            </Col> 
            <Col md={4}>
              <p id='sarstylefont'> PHONES:</p>
              <div><i class="fas fa-phone"></i> <span  style={{paddingLeft:'10px'}} > +1 800 559 6580   </span>   </div>
              <div style={{paddingLeft:'32px'}}   >+1 504 889 9898</div>
            </Col>
            <Col md={4}>
              <p id='sarstylefont'> E-MAIL:</p>
              <div> <i class="fas fa-envelope-open"></i> <span style={{paddingLeft:'10px'}} > mail@demolink.org  </span>  </div>
            </Col>
          </Row >
        </div>
        <div id='sss'>
          {/* <Row style={{ marginRight: 0 }} id='sss1'>
            <Col>
              <div id='s1s1'>
                <h3>MISCELLANEOUS INFORMATION:</h3>
                <p id='p3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.</p>
              </div>
            </Col>
          </Row> */}
        </div>
        <div id='sss'>
          <Row style={{ marginRight: 0 }} id='sss1'>
            <Col lg={4} id='ww' >
            <div id='area'>
              <TextInput id='textstyle'
                name="text-input-name"
                placeholder="Name" height='40px' width='100%'
              />
               </div>
            </Col>
            <Col lg={4} id='ww'  >
            <div id='area'>
              <TextInput id='textstyle'
                name="text-input-name"
                placeholder="E-mail" height='40px' width='100%'
              />
                </div>
            </Col>
            <Col lg={4}  id='ww' >
            <div id='area'>
              <TextInput id='textstyle'
                name="text-input-name"
                placeholder="Phone" height='40px' width='100%'
              />
                     </div>
            </Col>
          </Row>
          <Row style={{ marginRight: 0 }} id='sss1'>
            <Col xs={12}  id='ww' >
              <div id='area'>
                <Textarea id='ereaheight'
                  name="textarea-1"
                  placeholder="Message"
                />
              </div>
            
            </Col></Row>
        <Row style={{marginRight:'0px',width:'100%',marginBottom:'15px'}} >
          <Col xs={12} style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
          <Button variant="outline-danger" style={{width:'20%'}} >Send</Button>
          </Col>
</Row>
        </div>

      </div>
    );
  }
}
export default Contact;