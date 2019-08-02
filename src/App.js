import React ,{Component} from 'react';
import Nav2 from './Component/Nav2'
import './App.css';
import Slide1 from './Component/Slide1';
import{ BrowserRouter , Route} from 'react-router-dom';
import Styl1 from './Component/Style1';
// import axios from 'axios';

import News from './Component/News';
import Testdrive from './Component/Testdrive';
import Test from './Component/Test';
import Contact from './Component/Contact';
import Foot1 from './Component/Foot1';
import Blog from './Component/Blog';
import About from './Component/About';
import Slidecomp from './Component/Slidecomp';
class App extends Component {
  constructor () {
    super();
    this.state ={
      name:'',
      data:[],
      img:'' ,
      author:'', description:''
    };
    }
    render(){
      return(
<BrowserRouter>
        <div>
  <Nav2 />
 <Route exact path ='/' component ={Slide1} />
 <Route exact path ='/' component ={Test} />
 <Route exact path ='/' component ={News} />
 {/* <Route exact path ='/' component ={Styl1} /> */}
 <Route exact path ='/' component ={Testdrive} />
 <Route exact path ='/' component ={Slidecomp} />
 <Route exact path ='/Contact' component ={Contact} />
 <Route exact path ='/Blog' component ={Blog} />
 <Route exact path ='/About' component ={About} />
 
 <Foot1 />
        </div>

        </BrowserRouter>
      )
    }
}
 

export default App;
