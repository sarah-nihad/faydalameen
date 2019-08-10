import React, { Component } from 'react';

import Carousel from '@brainhubeu/react-carousel';
import Media from "react-media";
import '@brainhubeu/react-carousel/lib/style.css';

class Slidecomp extends Component {
  constructor() {
    super();
    this.state = {
      number: 6
    }
  }

  render() {
    return (
      <div style={{ width: '100%', paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#656467' }}>
        <Media query="(max-width: 1220px)">
          {matches =>
            matches ? (
              <div id='imageSliderCompContiner'>
                <div id='imageSliderCompContiner1'>
                  <Carousel style={{ position: 'relative' }}
                    addArrowClickHandler
                    slidesPerPage={4}
                    slidesPerScroll={1}
                    animationSpeed={2000}
                    autoPlay={2000}
                    stopAutoPlayOnHover
                    clickToChange
                    infinite={true}
                    itemWidth={190}
                  >
                 <div id='imageSliderComp1' >
                      <img src={require('../img/k1.gif')} alt='img' id='imageSliderComp' />
                    </div>
                    <div id='imageSliderComp1' >
                        <img src={require('../img/k2.gif')} alt='img' id='imageSliderComp' />
                      </div>
                
                      <div id='imageSliderComp1' >
                        <img src={require('../img/k3.gif')} alt='img' id='imageSliderComp' />
                      </div>
                      <div id='imageSliderComp1' >
                        <img src={require('../img/k4.gif')} alt='img' id='imageSliderComp' />
                      </div>
                      <div id='imageSliderComp1' >
                        <img src={require('../img/k5.gif')} alt='img' id='imageSliderComp' />
                      </div>
                      <div id='imageSliderComp1' >
                        <img src={require('../img/k6.gif')} alt='img' id='imageSliderComp' />
                      </div>

                  </Carousel>
                </div>
              </div>
            ) : (

                <div id='imageSliderCompContiner'>
                  <div id='imageSliderCompContiner1'>
                    <Carousel style={{ position: 'relative' }}
                      addArrowClickHandler
                      slidesPerPage={6}
                      slidesPerScroll={1}
                      animationSpeed={1500}
                      autoPlay={2500}
                      stopAutoPlayOnHover
                      clickToChange
                     
                      infinite={true}
                    
                    >
                   <div id='imageSliderComp1' >
                      <img src={require('../img/k1.gif')} alt='img' id='imageSliderComp' />
                    </div>
                    <div id='imageSliderComp1' >
                        <img src={require('../img/k2.gif')} alt='img' id='imageSliderComp' />
                      </div>
                      <div id='imageSliderComp1' >
                        <img src={require('../img/k3.gif')} alt='img' id='imageSliderComp' />
                      </div>
                      <div id='imageSliderComp1' >
                        <img src={require('../img/k4.gif')} alt='img' id='imageSliderComp' />
                      </div>
                    
                      <div id='imageSliderComp1' >
                        <img src={require('../img/k5.gif')} alt='img' id='imageSliderComp' />
                      </div>
                      <div id='imageSliderComp1' >
                        <img src={require('../img/k6.gif')} alt='img' id='imageSliderComp' />
                      </div>
                     
                    </Carousel>
                  </div>
                </div>
              )
          }
        </Media>
       
      </div>
    )
  }
}

export default Slidecomp;