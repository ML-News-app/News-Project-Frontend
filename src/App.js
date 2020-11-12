import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import './App.css';

function App(props) {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

    </Router>

  )
}



export default App

