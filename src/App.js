import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from "react-router-dom";

const App = () => (
  <div>
    <p>starting project...</p>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About}/>
    <Route path="/Contact" component={Contact}/>
  </div>
  

);

export default App;
