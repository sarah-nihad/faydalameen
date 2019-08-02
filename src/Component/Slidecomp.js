import React, { Component } from 'react';

import Carousel from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';


class Slidecomp extends Component {
  render() {
    return (
     <div style={{width:'100%',marginTop:'3%',marginBottom:'3%'}}>
     

<Carousel style={{position:'relative'}}
      // arrowLeft={<div id='sarslide' > {<i class="fas fa-angle-left"></i>} </div>}
      // arrowRight={<div id='sarslide1' > {<i className="fas fa-angle-right"></i>} </div>}
      addArrowClickHandler
      slidesPerPage={1}
      slidesPerScroll={1}
      animationSpeed={1500}
      autoPlay={2500}
      stopAutoPlayOnHover
      offset={2}
      itemWidth={300}
      clickToChange
      infinite= {true}
      // centered
    >
      <img src={require('../img/car.jpg')} alt='img'  />
      <img src={require('../img/car.jpg')}   alt='img'  />
      {/* <img src={require('../img/car.jpg')} alt='img'  /> */}
      {/* <img src={require('../img/car.jpg')} alt='img'  />
      <img src={require('../img/car.jpg')}  alt='img' /> */}
    </Carousel>

     </div>
    );
  }
}

export default Slidecomp;