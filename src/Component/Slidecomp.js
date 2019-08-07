import React, { Component } from 'react';

import Carousel from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';


class Slidecomp extends Component {
  render() {
    return (
     <div style={{width:'100%',paddingTop:'5%',paddingBottom:'5%',display:'flex',alignItems:'center'
     ,justifyContent:'center',backgroundColor:'#656467'}}>
     
 <div style={{width:'90%'}} >
<Carousel
      // arrowLeft={<div id='sarslide' > {<i class="fas fa-angle-left"></i>} </div>}
      // arrowRight={<div id='sarslide1' > {<i className="fas fa-angle-right"></i>} </div>}
      addArrowClickHandler
      slidesPerPage={1}
      slidesPerScroll={1}
      animationSpeed={1000}
      autoPlay={2500}
      stopAutoPlayOnHover
      offset={2}
      itemWidth={300}
      clickToChange
      infinite= {true}
      // centered
    >
      {/* <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}} > */}
      <img src={require('../img/s1.jpg')} alt='img' id='slidcomimg1' />
      <img src={require('../img/s2.jpg')}   alt='img'id='slidcomimg1'  />
      <img src={require('../img/s3.jpg')} alt='img' id='slidcomimg1' /> 
      <img src={require('../img/s4.jpg')} alt='img' id='slidcomimg1' />
      <img src={require('../img/s5.jpg')}  alt='img'id='slidcomimg1' />
      {/* </div> */}
    </Carousel>
 </div>
     </div>
    );
  }
}

export default Slidecomp;