// import React,{Component} from 'react';
// import {Carousel} from 'react-bootstrap';
// import './css.css';

//     class Slide1 extends Component{
//     constructor(props, context) {
//       super(props, context);
  
//       this.handleSelect = this.handleSelect.bind(this);
  
//       this.state = {
//         index: 0,
//         direction: null,
//       };
//     }
  
//     handleSelect(selectedIndex, e) {
//       this.setState({
//         index: selectedIndex,
//         direction: e.direction,
//       });
//     }
  
//     render() {
//       const { index, direction } = this.state;
  
//       return (
//         <Carousel
//           activeIndex={index}
//           direction={direction}
//           onSelect={this.handleSelect}
//         >
//           <Carousel.Item>
//           <img src={require('../img/2.jpg')} id="img" alt='img'  />
//              <div id='ss'></div>
//             <Carousel.Caption>
       
//             </Carousel.Caption>
            
//           </Carousel.Item>
//           <Carousel.Item>
//           <img src={require('../img/3.jpg')} id="img" alt='img'  />
//             <div id='ss'></div>
  
//             <Carousel.Caption>
        
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//           <img src={require('../img/sh.jpg')} id="img" alt='img'  />
//             <div id='ss'></div>
  
//             <Carousel.Caption>
        
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//           <img src={require('../img/sfn.jpg')} id="img" alt='img'  />
//             <div id='ss'></div>
  
//             <Carousel.Caption>
        
//             </Carousel.Caption>
//           </Carousel.Item>
         
//         </Carousel>
//       );
//     }
//   }
  
//   export default Slide1;

import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <Carousel
      autoplay={true}
      autoplayInterval
     = {2000}
     wrapAround={true}
      >
            <img src={require('../img/111.jpg')} id="img" alt='img'  />
            <img src={require('../img/22.jpg')} id="img" alt='img'  />
            <img src={require('../img/33.jpg')} id="img" alt='img'  />
            <img src={require('../img/44.jpg')} id="img" alt='img'  />
       
      </Carousel>
    );
  }
}