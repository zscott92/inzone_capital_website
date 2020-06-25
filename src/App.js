import React from 'react';
import HomeScreen from './components/screens/HomeScreen';
import MissionScreen from './components/screens/MissionScreen';
import TeamScreen from './components/screens/TeamScreen';
import Navbar from './components/layout/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <HomeScreen />
          </Route>
          <Route path="/mission">
            <MissionScreen />
          </Route>
          <Route path="/team">
            <TeamScreen />
          </Route>
          <Route path="/portfolio">
            {/* <Portfolio /> */}
          </Route>
          <Route path="/contact">
            {/*  <Contact /> */}
    </Route>
  </Switch>
  </Router>
    </div>
  )
}
      
export default App;
