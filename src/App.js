import React ,{Component} from 'react';
import Nav2 from './Component/Nav2'
import './App.css';

import{ BrowserRouter , Route,Switch} from 'react-router-dom';
// import Styl1 from './Component/Style1';
// import axios from 'axios';
import Home from './Component/Home';
// import Main from './Component/Main';
import Contact from './Component/Contact';
import Foot1 from './Component/Foot1';
import Blog from './Component/Blog';
import About from './Component/About';
import Profile from './Component/Profile';

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
        <div id='appborder'   >
          <div id='foot'>
  <Nav2 />
  <Switch>
  <Route exact path ='/' component ={Home} /> 
  <Route exact path ='/Home' component ={Home} /> 
 <Route  path ='/Contact' component ={Contact} />
 <Route  path ='/Blog' component ={Blog} />
 <Route  path ='/About' component ={About} />
 <Route  path ='/Profile' component ={Profile} />
 </Switch>
 </div>
 <Foot1 />
        </div>

        </BrowserRouter>
      )
    }
}
 

export default App;
