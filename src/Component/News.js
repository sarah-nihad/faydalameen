import React ,{Component} from 'react';
import './css.css';
import {Row , Col } from 'react-bootstrap';
class News extends Component{
    render(){
        return(
            <div id='m1'>
                <div id='p1'> LATEST NEWS</div>
                <div id='new'>
<Row style={{marginRight:0}} id='row'>
    <Col xs={12} md={6} >
        <Row style={{marginRight:0}}>
            <Col>  <img src={require('../img/car1.jpg')} id="img1" alt='img'   /> </Col>
         <Col>   <p id='p2'>Mauris fermeum dictum mag
Mauris fermeum dictum magna.
 Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.
  Aenean aucto. wisi et urna. Aliqat volutpatuisac turpis. Integer rutru.</p></Col>
  </Row>
  
 
    </Col>
    <Col xs={12} md={6}>
   
    <Row style={{marginRight:0}}>
            <Col>  <img src={require('../img/car1.jpg')} id="img1" alt='img'  /> </Col>
         <Col>   <p id='p2'>Mauris fermeum dictum mag
Mauris fermeum dictum magna.
 Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.
  Aenean aucto. wisi et urna. Aliqat volutpatuisac turpis. Integer rutru.</p></Col>
  </Row>

    </Col>
</Row>
<hr />
<vr/>

<Row id='row' style={{marginRight:0}}>
    <Col xs={12} md={6} >
        <Row style={{marginRight:0}}>
            <Col>  <img src={require('../img/car1.jpg')} id="img1" alt='img'   /> </Col>
         <Col>   <p id='p2'>Mauris fermeum dictum mag
Mauris fermeum dictum magna.
 Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.
  Aenean aucto. wisi et urna. Aliqat volutpatuisac turpis. Integer rutru.</p></Col>
  </Row>
  
 
    </Col>
    <Col xs={12} md={6}>
   
    <Row style={{marginRight:0}}>
            <Col>  <img src={require('../img/car1.jpg')} id="img1" alt='img'   /> </Col>
         <Col>   <p id='p2'>Mauris fermeum dictum mag
Mauris fermeum dictum magna.
 Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.
  Aenean aucto. wisi et urna. Aliqat volutpatuisac turpis. Integer rutru.</p></Col>
  </Row>

    </Col>
</Row>

</div>
            </div>
        )
    }
}
export default News;