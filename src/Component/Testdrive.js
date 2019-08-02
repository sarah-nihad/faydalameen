import React ,{Component} from 'react';
import './css.css';
import {Row , Col } from 'react-bootstrap';


class Testdrive extends Component{
    
    render(){
        return(
            <div id='m1'>
                <div id='p1'> TEST DRIVES</div>
                <div id='new'>
<Row id='row' style={{marginRight:0}}>
    <Col xs={12} md={6} >
        <Row style={{marginRight:0}}>
            <Col>  <img src={require('../img/car3.jpg')} id="img1" alt='img' /> </Col>
  </Row>
  <hr/>
  <Row style={{marginRight:0}}><Col>
  <p id='p2'>Mauris fermeum dictum magna.
   Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.
    Aenean aucto. wisi et urna. Aliqat volutpatuisac turpis. 
    Integer rutrum ante eu lacuestilum libero nisl porta vel scelerisque eget malesuada at neqVivamus eget ibh.
     Etiamursus leo vel metus.
   Nulla facil nec ero estibulum ante ipsu. </p>
  </Col></Row>
 
    </Col>
    
    <Col xs={12} md={6}>
   
    <Row style={{marginRight:0}}>
            <Col>  <img src={require('../img/car2.jpg')} id="img1" alt='img'  /> </Col>
</Row>

<hr/>
  <Row style={{marginRight:0}}><Col>
  <p id='p2'>Mauris fermeum dictum magna.
   Sed loreet aliquam leote llus dolor dapibus eget elementum vel curs elfend elit.
    Aenean aucto. wisi et urna. Aliqat volutpatuisac turpis. 
    Integer rutrum ante eu lacuestilum libero nisl porta vel scelerisque eget malesuada at neqVivamus eget ibh.
     Etiamursus leo vel metus.
   Nulla facil nec ero estibulum ante ipsu. </p>
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