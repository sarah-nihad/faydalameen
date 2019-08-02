import React ,{Component} from 'react';
import './css.css';
import {Row , Col } from 'react-bootstrap';
class Test extends Component{
    render(){
        return(
            <div id='test'>
<Row style={{marginRight:0}}>
    <Col xs={12} md={6}>

                <div id='box'>
<div id='cont'>
    <div>
        <h2>Mauris fermeum dictum magn</h2>
        <p>
Mauris fermeum dictum magna. Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.
 Aenean aucto. wisi et urna. Aliqat volutpatuisac turpis.</p>
        <a href="#">Read more</a>
    </div>
    <img src={require('../img/car5.jpg')} alt='img' />
</div>

                </div>

                </Col>
                <Col  xs={12} md={6}>
                
                <div id='box'>
<div id='cont'>
    <div>
        <h2>Sed laoreet leo.</h2>
        <p>
Mauris fermeum dictum magna.
 Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.</p>
        <a href="#">Read more</a>
    </div>
    <img src={require('../img/car6.jpg')} alt='img' />
</div>

                </div>
                
                </Col>
    </Row>
  
    <Row style={{marginRight:0}}>
        <Col xs={12} md={4}>
        <div id='box'>
<div id='cont'>
    <div>
        <h2>Sed laoreet leo.</h2>
        <p>
Mauris fermeum dictum magna.
 Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.</p>
        <a href="#">Read more</a>
    </div>
    <img src={require('../img/car4.jpg')} alt='img'  />
</div>

                </div>
        </Col>
        <Col  xs={12} md={4}>
        <div id='box'>
<div id='cont'>
    <div>
        <h2>Sed laoreet leo.</h2>
        <p>
Mauris fermeum dictum magna.
 Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.</p>
        <a href="#">Read more</a>
    </div>
    <img src={require('../img/car3.jpg')} alt='img'  />
</div>

                </div>
        </Col>
        <Col  xs={12} md={4}>
        <div id='box'>
<div id='cont'>
    <div>
        <h2>Sed laoreet leo.</h2>
        <p>
Mauris fermeum dictum magna.
 Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.</p>
        <a href="#">Read more</a>
    </div>
    <img src={require('../img/car2.jpg')} alt='img'   />
</div>

                </div>
                </Col>
    </Row>
            </div>
        )
    }
}
export default Test;