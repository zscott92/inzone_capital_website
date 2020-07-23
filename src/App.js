import React from 'react';
import HomeScreen from './components/screens/HomeScreen';
import TeamScreen from './components/screens/TeamScreen';
import PortfolioScreen from './components/screens/PortfolioScreen';

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
          <Route path="/team">
            <TeamScreen />
          </Route>
          <Route path="/portfolio">
            <PortfolioScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
