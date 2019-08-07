import React, { Component } from 'react';
import './css.css';
import { Row, Col } from 'react-bootstrap';
class Test extends Component {
    render() {
        return (
            <div id='test' style={{backgroundColor:'#434245'}}>
                <Row style={{ marginRight: 0,paddingTop:'56px',paddingBottom:'25px',paddingLeft:'50px',paddingRight:'50px',
            backgroundColor:'#434245' }}>
                    <Col xs={12} md={6} id='hovercol'  >

                        <div id='box'>
                            <div id='cont'>
                                <div>
                                    <div>Mauris fermeum dictum magn</div>
                                    <p>
                                        Mauris fermeum dictum magna. Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.
 Aenean aucto. wisi et urna. Aliqat volutpatuisac turpis.</p>
                                    {/* <a href="./Blog">Read more</a> */}
                                </div>
                                <img src={require('../img/f1.jpg')} alt='img' />
                            </div>

                        </div>

                    </Col>
                    <Col xs={12} md={6}>

                        <div id='box'>
                            <div id='cont'>
                                <div>
                                    <div>Sed laoreet leo.</div>
                                    <p>
                                        Mauris fermeum dictum magna.
 Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.</p>
                                    {/* <a href="./Blog">Read more</a> */}
                                </div>
                                <img src={require('../img/f2.jpg')} alt='img' />
                            </div>

                        </div>

                    </Col>
                </Row>

                <Row style={{ marginRight: 0 ,paddingTop:'10px',paddingLeft:'50px',paddingRight:'50px',paddingBottom:'50px'}}>
                    <Col xs={12} md={4} id='hovercol'  >  
                        <div id='box'>
                            <div id='cont'>
                                <div>
                                    <div>Sed laoreet leo.</div>
                                    <p>
                                        Mauris fermeum dictum magna.
 Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.</p>
                                    {/* <a href="./Blog">Read more</a> */}
                                </div>
                                <img src={require('../img/f3.jpg')} alt='img' />
                            </div>

                        </div>
                    </Col>
                    <Col xs={12} md={4} id='hovercol'     >
                        <div id='box'>
                            <div id='cont'>
                                <div>
                                    <div>Sed laoreet leo.</div>
                                    <p>
                                        Mauris fermeum dictum magna.
 Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.</p>
                                    {/* <a href="./Blog">Read more</a> */}
                                </div>
                                <img src={require('../img/f4.jpg')} alt='img' />
                            </div>

                        </div>
                    </Col>
                    <Col xs={12} md={4}  id='hovercol'     >
                        <div id='box'>
                            <div id='cont'>
                                <div>
                                    <div>Sed laoreet leo.</div>
                                    <p>
                                        Mauris fermeum dictum magna.
 Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.</p>
                                    {/* <a href="./Blog">Read more</a> */}
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