import React, { Component } from 'react';
import Nav2 from './Component/Nav2'
import './App.css';
import Context from './assets/js/Context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Foot1 from './Component/Foot1';
import Blog from './Component/Blog';
import About from './Component/About';
import Profile from './Component/Profile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      data: [],
      img: '',
      author: '',
       description: '',
       Lang:'en'
    };
  }
  // componentDidMount(){
  //   var Lang=localStorage.getItem('Lang');
  //   this.setState({Lang})
  //   console.log(this.state.Lang);
  // }
  render() {
    return (
      <Context.Provider value={{
        value: this.state, action: {
        
        }
      }}>
        <BrowserRouter>
          <div id='appborder'   >
            <div id='foot'>
              <Nav2 />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Home' component={Home} />
                <Route path='/Contact' component={Contact} />
                <Route path='/Blog' component={Blog} />
                <Route path='/About' component={About} />
                <Route path='/Profile' component={Profile} />
              </Switch>
            </div>
            <Foot1 />
          </div>

        </BrowserRouter>
      </Context.Provider>
    )
  }
}


export default App;
