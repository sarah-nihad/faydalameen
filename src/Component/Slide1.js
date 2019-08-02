import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './css.css';
// class ControlledCarousel extends Component {
    class Slide1 extends Component{
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
          <img src={require('../img/2.jpg')} id="img" alt='img'  />
             <div id='ss'></div>
            <Carousel.Caption>
       
            </Carousel.Caption>
            
          </Carousel.Item>
          <Carousel.Item>
          <img src={require('../img/3.jpg')} id="img" alt='img'  />
            <div id='ss'></div>
  
            <Carousel.Caption>
        
            </Carousel.Caption>
          </Carousel.Item>
         
        </Carousel>
      );
    }
  }
  
//   render(<ControlledCarousel />);
  export default Slide1;