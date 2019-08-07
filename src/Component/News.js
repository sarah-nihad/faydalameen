import React, { Component } from 'react';
import './css.css';
import { Row, Col } from 'react-bootstrap';
class News extends Component {
    render() {
        return (
            <div  style={{ paddingBottom: '5%',paddingTop:'1%',backgroundColor:'#4C4B4E' }}>
                <div id='p1'> Company's Objective  </div>
                <div id='new'    >
                    <Row style={{ marginRight: 0 }} id='row'>
                        <Col xs={12} lg={6} id='colmeda1' style={{paddingRight:'0px'}}  >
                            <Row style={{ marginRight: 0}}>
                                <Col md={6}>  <img src={require('../img/new4.JPG')} id="imgnew" alt='img' /> </Col>
                                <Col md={6} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',paddingRight:'0px'}}> 
                                  <p id='p22'>
                                Our objective is to take advantage of all possible opportunities to achieve our business and our stated decisions through full
                                 attention to apply values and commercial principles with high quality. We wholeheartedly aspire to be at the top of the pyramid of
                                  excellence to provide transportation services of 
                                    
                                    </p></Col>
                                {/* <div style={{borderRight:'1px solid gray'}}></div> */}
                            </Row>


                        </Col>

                        <Col xs={12} lg={6}>

                            <Row style={{ marginRight: 0   }}>
                                <Col md={6} >  <img src={require('../img/new3.JPG')} id="imgnew" alt='img' /> </Col>
                                <Col md={6}  style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>   
                                <p id='p22'>Mauris fermeum dictum mag  all kinds and customs clearance by the latest methods of operating marine, 
                                land and air fleets in accordance with international quality and safety, which makes it easier for us to establish fruitful working relationships with all partners, 
                                with sincerity, trust and perfection is the basis of work</p></Col>
                            </Row>

                        </Col>
                    </Row>
                    <hr />
{/* <div style={{width:'90%',borderTop:'1px solid gray',paddingBottom:'10px'}}></div> */}

                    <Row id='row' style={{ marginRight: 0 }}>
                        <Col xs={12} lg={6}  id='colmeda1' >
                            <Row style={{ marginRight: 0 }}>
                                <Col md={6} >  <img src={require('../img/new1.JPG')} id="imgnew" alt='img' /> </Col>
                                <Col md={6} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >  
                                 <div id='p22'> through the following:
                               <div> 1• Providing the best service to our customers </div> 
<div>2• Continuing the rehabilitation and developing the skills of our staff.</div>
                  </div>
                  </Col>
                                {/* <div style={{borderRight:'1px solid gray',borderBottom:'1px solid gray'}}></div> */}
                                {/* <div style={{borderBottom:'1px solid gray'}}></div> */}
                            </Row>


                        </Col>
                        <Col xs={12} lg={6}>

                            <Row style={{ marginRight: 0 }}>
                                <Col md={6} >  <img src={require('../img/new2.JPG')} id="imgnew" alt='img' /> </Col>
                                <Col md={6} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>  
                                 <div id='p22'>
                                    <div>3• Applying the latest world-class methods in our operations.</div>
                                    <div>4• Achieving the best services that suit our customers and their customers.</div>
                     </div>
                     </Col>

                            </Row>

                        </Col>
                    </Row>

                </div>
            </div>
        )
    }
}
export default News;