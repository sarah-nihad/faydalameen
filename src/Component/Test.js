import React, { Component } from 'react';
import './css.css';
import { Row, Col } from 'react-bootstrap';
class Test extends Component {
    render() {
        return (
            <div id='test' style={{ backgroundColor: '#434245' }}>
                <Row style={{
                    marginRight: 0, paddingTop: '56px', paddingLeft: '50px', paddingRight: '50px',
                    backgroundColor: '#434245'
                }} id='rowtest2'>
                    <Col xs={12} md={6} id='hovercol'  >

                        <div id='box'>
                            <div id='cont'>
                                <div>
                                    <div>  Air transport</div>
                                    <p>
                                        Air transport is used to transport goods from all countries to Iraq</p>
                                  
                                </div>
                                <img src={require('../img/f1.jpg')} alt='img' />
                            </div>

                        </div>

                    </Col>
                    <Col xs={12} md={6}>

                        <div id='box'>
                            <div id='cont'>
                                <div>
                                    <div>Tanks for petroleum products and their derivatives</div>
                                    <p>
                                        Used for transportation from border outlets and oil refineries inside Iraq
                                     and oil production directorates to all Iraqi provinces.</p>
                                
                                </div>
                                <img src={require('../img/f2.jpg')} alt='img' />
                            </div>

                        </div>

                    </Col>
                </Row>

                <Row style={{ marginRight: 0, paddingTop: '10px', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '50px' }}>
                    <Col xs={12} md={4} id='hovercol'  >
                        <div id='box'>
                            <div id='cont'>
                                <div>
                                    <div></div>
                                    <p>
                                        Wheel loader type for the transport of large and high special equipment
                                     as well as heavy hydraulic mechanisms such as excavators, shafts and loaders</p>
                                
                                </div>
                                <img src={require('../img/f3.jpg')} alt='img' />
                            </div>

                        </div>
                    </Col>
                    <Col xs={12} md={4} id='hovercol'>
                        <div id='box'>
                            <div id='cont'>
                                <div>
                                    <div></div>
                                    <p>
                                        Land transport from all countries to Iraq</p>
                           
                                </div>
                                <img src={require('../img/f4.jpg')} alt='img' />
                            </div>

                        </div>
                    </Col>
                    <Col xs={12} md={4} id='hovercol'     >
                        <div id='box'>
                            <div id='cont'>
                                <div>
                                    <div></div>
                                    <p>
                                        Shipping from all countries to Iraq</p>
                                 
                                </div>
                                <img src={require('../img/f7.jpg')} alt='img' />
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Test;