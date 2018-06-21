import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Saved from "./pages/Saved";


const App = () => (
 <Router>
    <div className="wrap">
      <Route exact path="/" component={Home}/>
      <Route exact path="/saved" component={Saved}/>
    </div>
  </Router>
)

export default App;
