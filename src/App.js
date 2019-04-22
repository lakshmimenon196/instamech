import React, { Component } from 'react';
import
{
  BrowserRouter as Router,
  Route, Link

} from 'react-router-dom';
import {Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

import Header from './Components/HeaderComponent/Header';
import Footer from './Components/FooterComponent/Footer';
import HomePage from './Components/Pages/HomePage';
import BreakdownCover from './Components/Pages/BreakdownCover';
import Contact from './Components/Pages/Contact';
//import logo from './logo.svg';
//import './App.css';
import './Assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header/>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/BreakdownCover' component={BreakdownCover}/>
      <Route exact path='/Contact' component={Contact}/>
      <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
