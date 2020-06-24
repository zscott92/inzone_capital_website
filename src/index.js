import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from './App'
// import Mission from '../screens/Mission';


ReactDOM.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>,
    document.getElementById('root')
  );