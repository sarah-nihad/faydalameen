import React ,{Component} from 'react';
import Slide1 from './Slide1';
import News from './News';
import Testdrive from './Testdrive';
import Test from './Test';
import Slidecomp from './Slidecomp';
import Styl1 from './Style1';
class Home extends Component {
  constructor () {
    super();
    this.state ={
     
    };
    }
    render(){
      return(

        <div>
         
 <Slide1 />
 <Test />
 <News />
 <Styl1 />
 <Testdrive />
 <Slidecomp />

 
        </div>

      
      )
    }
}
 

export default Home;
