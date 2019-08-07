import React ,{Component} from 'react';
import './css.css';
import {Row , Col } from 'react-bootstrap';


class Testdrive extends Component{
    
    render(){
        return(
            <div style={{paddingTop:'3%',backgroundColor:'#58575A',paddingBottom:'4%'}}>
                <div id='p1'>  Company Property </div>
                <div id='new'>
<Row id='row' style={{marginRight:0}}>
    <Col xs={12} md={6} >
        <Row style={{marginRight:0}}>
            <Col>  <img src={require('../img/sh2.jpg')} id="img1" alt='img' /> </Col>
  </Row>
  <hr/>
  <Row style={{marginRight:0}}><Col>
  <p id='p2ss'>  Product Tankers (40) Nos. </p>
  </Col></Row>
 
    </Col>
    
    <Col xs={12} md={6}>
   
    <Row style={{marginRight:0}}>
            <Col>  <img src={require('../img/sh1.jpg')} id="img1" alt='img'  /> </Col>
</Row>

<hr/>
  <Row style={{marginRight:0}}><Col>
  <p id='p2ss'>  Freight Trucks (40) Nos. </p>
  </Col></Row>

</Col>
</Row>

{/* <Row><Col xs={4}><div id='section'></div></Col>
<Col xs={4}><div id='section1'></div> </Col>
<Col xs={4}><div id='section2'></div> </Col>
</Row> */}

  

</div>
            </div>
        )
    }
}
export default Testdrive;