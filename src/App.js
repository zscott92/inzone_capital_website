import React from 'react';
import HomeScreen from './components/screens/HomeScreen';
import MissionScreen from './components/screens/MissionScreen';
import TeamScreen from './components/screens/TeamScreen';
import PortfolioScreen from './components/screens/PortfolioScreen';
import ContactScreen from './components/screens/ContactScreen';

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
            <PortfolioScreen />
          </Route>
          <Route path="/contact">
             <ContactScreen />
    </Route>
  </Switch>
  </Router>
    </div>
  )
}
      
export default App;
