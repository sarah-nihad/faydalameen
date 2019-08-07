import React, { Component } from 'react';
import './css.css';
import { Row, Col ,Button} from 'react-bootstrap';
import {  TextInput,  Textarea ,toaster} from 'evergreen-ui';
import axios from 'axios';
class Contact extends Component {

  constructor(props){
    super(props);
this.state={
  data:[],

    name:'',
    email:'',
    text:''

}

}


login(){

   var email=this.state.email;
   var text=this.state.text; 
   let formData = new FormData();
   var headers = {
     "Content-Type": "application/json",
    //  token: cookies.get("token")
   };
   formData.append("text", text);
   formData.append("email", email);
 
   axios({
     url:`https://sky-limit-x.herokuapp.com/sendEmail`,
     method: "POST",
     data: formData,
       headers: headers
   })
    .then(response => {
      toaster.success('Your email has been Send successfully');
        console.log(response)
     })
     .catch(function (error) {
       console.log(error.response.data)
       if (error.response) {
         toaster.danger(error.response.data.mgs);
       }
     });

    }









  render() {
    return (
      <div id='contacthome'>
 <div id='p1'> CONTACTS  </div>
        <div id='contactpage'>
       
          <Row style={{ marginRight: 0 }} id='maprow'><Col xs={12} >
            {/* <div className="mapouter"><div className="gmap_canvas"> */}
            <iframe id="gmap_canvas" 
            src="https://maps.google.com/maps?q=iraq-%20basrah&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title='map'></iframe>
            {/* </div>
     </div> */}


          </Col></Row>
          <Row style={{ marginRight: 0 }} id='contactrow'>
            <Col md={4}>
              <p id='sarstylefont'>ADDRESS:</p>
           <div>  <i className="fas fa-home"></i>    <span style={{paddingLeft:'10px'}} > Basrah - Iraq  </span></div> 
            </Col> 
            <Col md={4}>
              <p id='sarstylefont'> PHONES:</p>
              <div><i className="fas fa-phone"></i> <span  style={{paddingLeft:'10px'}} > +964 7833300971     </span>   </div>
              <div style={{paddingLeft:'32px'}}   > +964 7733300971  </div>
            </Col>
            <Col md={4}>
              <p id='sarstylefont'> E-MAIL:</p>
              <div> <i className="fas fa-envelope-open"></i> <span style={{paddingLeft:'10px'}} > info@faydalameen.com  </span>
                </div>
                <div style={{paddingLeft:'32px'}}   > ameen@faydalameen.com    </div>
            </Col>
         
          </Row >
          <Row style={{marginRight:'0px',width:'90%'}}>
            <Col>
            <div style={{borderBottom:'1px solid gray',height:'3px',width:'100%',paddingTop:'2%'}}  ></div>
            </Col>
          </Row>
          <Row style={{ marginRight: 0 }} id='contactrow2'>
            <Col md={4}>
              {/* <p id='sarstylefont'>ADDRESS:</p> */}
           <div>  <i className="fas fa-home"></i>    <span style={{paddingLeft:'10px'}} > Istanbul - Turkey  </span></div> 
            </Col> 
            <Col md={4}>
              {/* <p id='sarstylefont'> PHONES:</p> */}
              <div><i className="fas fa-phone"></i> <span  style={{paddingLeft:'10px'}} > +90 5498701124     </span>   </div>
              <div  > <i className="fab fa-whatsapp" style={{fontSize:'20px'}} ></i> 
              <span  style={{paddingLeft:'10px'}} >  +90 5354747624  </span>  </div>
            </Col>
            <Col md={4}>
              {/* <p id='sarstylefont'> E-MAIL:</p> */}
              <div> <i className="fas fa-envelope-open"></i> <span style={{paddingLeft:'10px'}} > hussein@faydalameen.com  </span>
                </div>
              
            </Col>
         
          </Row >

          <Row style={{ marginRight: 0 }} id='contactrow3'>
            <Col md={4}>
              <p id='sarstylefont'>ADDRESS:</p>
           <div>  <i className="fas fa-home"></i>    <span style={{paddingLeft:'10px'}} > Istanbul - Turkey  </span></div> 
            </Col> 
            <Col md={4}>
              <p id='sarstylefont'> PHONES:</p>
              <div><i className="fas fa-phone"></i> <span  style={{paddingLeft:'10px'}} > +90 5498701124      </span>   </div>
              <div  > <i className="fab fa-whatsapp" style={{fontSize:'20px'}} ></i> 
              <span  style={{paddingLeft:'10px'}} >  +90 5354747624  </span>  </div>
            </Col>
            <Col md={4}>
              <p id='sarstylefont'> E-MAIL:</p>
              <div> <i className="fas fa-envelope-open"></i> <span style={{paddingLeft:'10px'}} > hussein@faydalameen.com  </span>
                </div>
              
            </Col>
         
          </Row >
        </div>


        <div id='sss'>
          <Row style={{ marginRight: 0 }} id='sss1'>
            <Col>
              <div id='s1s1'>
                <p style={{fontSize:'26px',fontWeight:'500',lineHeight:'30px'}}>For More Inquere Please Send as email:</p>
              
              </div>
            </Col>
          </Row>
        </div>










        <div id='sss'>
      
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
                value={this.state.email} onChange={(e)=>{
                  this.setState({email:e.target.value})
                    }}
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
                  placeholder="Message"  value={this.state.text} onChange={(e)=>{
                    this.setState({text:e.target.value})
                      }} 
                />
              </div>
            
            </Col></Row>
        <Row style={{marginRight:'0px',width:'100%',marginBottom:'15px'}} >
          <Col xs={12} style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
          <Button variant="outline-danger" id='bbbton'  onClick={ ()=>this.login()}    >Send</Button>
          </Col>
</Row>
        </div>

      </div>
    );
  }
}
export default Contact;