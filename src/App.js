import React from 'react';
import Navbar from './components/layout/Navbar';
import Carousel from './components/layout/Jumbo';
import AboutTable from './components/layout/AboutTable'
// import Mission from '../screens/Mission';
import Team from './components/screens/TeamScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <AboutTable />
      <Router>
        <Switch>
          <Route path="/about">
            <App />
          </Route>
          <Route path="/mission">
            {/* <Mission /> */}
          </Route>
          <Route path="/team">
            <Team />
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
