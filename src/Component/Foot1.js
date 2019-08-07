import React, { Component } from 'react';
import { Row,Col } from 'react-bootstrap';
import './css.css';
// import { Link } from 'react-router-dom';

class Foot1 extends Component {
    render() {
        return (
            <div id='fotcolor'>
                {/* <div id='fot1'> */}
                {/* <Row style={{ marginRight: 0 }} id='rowfot'> */}



                    {/* <span id='fotspan'>
                        Copyright <i className="far fa-copyright" id="copy"></i>  2019  <a href='http://www.croczi.com' id='aaa'>Croczi.com  </a></span> */}
                    {/* <Col xl={4}>
            <h3 id='h3copy'>COPYRIGHT</h3>
            <p id='p9'>3C © 2014 • Privacy Policy</p>
        </Col>
        <Col xl={4}>
            <h3 id='h3copy'>CONTACTS</h3>
         <div id='p9'>  <div>9863 - 9867 Mill Road,</div><div> Cambridge, MG09 99HT</div><div>
Freephone: +1 800 559 6580</div></div> 
<div>
    <div> 9870 St Vincent Place, </div>
    <div> Glasgow, DC 45 Fr 45.</div>
    <div> Freephone: +1 800 559 6580</div>
</div>
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


            </Col> */}

                {/* </Row> */}


<div id='ffffff'>

<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} id='copyfot'   >
<h3 id='h3copy3'>COPYRIGHT</h3>
<div id='p9'> © 2019 •  <a href='http://www.croczi.com' id='aaa'>Croczi.com  </a></div>
</div> 

 <div id='ffffff1'> 

<h3 id='h3copy3'style={{paddingTop:'7%'}}>CONTACTS</h3>
<Row style={{ marginRight: 0 }} id='contactrow'>
            <Col md={4}>
           
              {/* <p id='sarstylefont'>ADDRESS:</p> */}
           <div id='fotdiv'>  <i className="fas fa-home"></i>    <span style={{paddingLeft:'10px'}} > Basrah - Iraq  </span></div> 
            </Col> 
            <Col md={4}>
              {/* <p id='sarstylefont'> PHONES:</p> */}
              <div id='fotdiv' ><i className="fas fa-phone"></i> <span  style={{paddingLeft:'10px'}} > +964 7833300972     </span>   </div>
              <div id='fotdiv'  style={{paddingLeft:'32px'}}   > +964 773677063   </div>
            </Col>
            <Col md={4}>
              {/* <p id='sarstylefont'> E-MAIL:</p> */}
              <div id='fotdiv' > <i className="fas fa-envelope-open"></i> <span style={{paddingLeft:'10px'}} > info@faydalameen.com  </span>
                </div>
                <div id='fotdiv' style={{paddingLeft:'32px'}}   > ameen@faydalameen.com    </div>
            </Col>
         
          </Row >
          <Row style={{ marginRight: 0 }} id='contactrow'>
            <Col md={4}>
              {/* <p id='sarstylefont'>ADDRESS:</p> */}
           <div id='fotdiv' >  <i className="fas fa-home"></i>    <span style={{paddingLeft:'10px'}} > Istanbul - Turkey  </span></div> 
            </Col> 
            <Col md={4}>
              {/* <p id='sarstylefont'> PHONES:</p> */}
              <div id='fotdiv' ><i className="fas fa-phone"></i> <span  style={{paddingLeft:'10px'}} > +90 5498701124      </span>   </div>
              <div id='fotdiv' > <i className="fab fa-whatsapp" id='watsapicon' ></i> 
              <span  style={{paddingLeft:'10px'}} >  +90 5354747624  </span>  </div>
            </Col>
            <Col md={4}>
              {/* <p id='sarstylefont'> E-MAIL:</p> */}
              <div id='fotdiv' > <i className="fas fa-envelope-open"></i> <span style={{paddingLeft:'10px'}} > hussein@faydalameen.com  </span>
                </div>
              
            </Col>
         
          </Row >


</div>




            </div>
          </div>
        )
    }
}
export default Foot1;