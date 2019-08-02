import React,{Component} from 'react';
import {Row, Col } from 'react-bootstrap';
import './css.css';
import { Link } from 'react-router-dom';

class Foot1 extends Component{
    render(){
        return(
            <div id='fotcolor'>
{/* <div id='fot1'> */}
    <Row style={{marginRight:0}} id='rowfot'>
        <Col xl={4}>
            <h3 id='h3copy'>COPYRIGHT</h3>
            <p id='p9'>3C © 2014 • Privacy Policy</p>
        </Col>
        <Col xl={4}>
            <h3 id='h3copy'>CONTACTS</h3>
         <p id='p9'>  <div>9863 - 9867 Mill Road,</div><div> Cambridge, MG09 99HT</div><div>
Freephone: +1 800 559 6580</div></p> 
<p>
    <div> 9870 St Vincent Place, </div>
    <div> Glasgow, DC 45 Fr 45.</div>
    <div> Freephone: +1 800 559 6580</div>
</p>
        </Col>

        <Col xl={4}>
            <div id='follow'>
            <h3 id='h3copy'>FOLLOW US</h3>
            <div id='p9'>
            <Link to ="#" id="fac" > <img src ={require('../img/facebook.png')} id="ii" alt='img' /> </Link>
         <Link to ="#" id="fac" >  <img src ={require('../img/insta.png')} id="ii" alt='img'  /></Link>
         <Link to ="#"id="fac"  >  <img src ={require('../img/twitter.png')} id="ii" alt='img'   /></Link>
         <Link to ="#" id="fac" >  <img src ={require('../img/youtube.png')} id="ii" alt='img'   /></Link>
         </div>
         </div>
<p> </p>


            </Col>

    </Row>
</div>
            // </div>
        )
    }
}
export default Foot1;