import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import './App.css';
import CategoricalNews from './Components/CategoricalNews/CategoricalNews';


function App(props) {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:type" component={CategoricalNews} />
      </Switch>
    </Router>

  )
}



export default App

