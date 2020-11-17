import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import './App.css';
import CategoricalNews from './Components/CategoricalNews/CategoricalNews';
import SingleNewsPage from './Components/SingleNewsPage/SingleNewsPage';


function App(props) {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:type" component={CategoricalNews} />
        <Route exact path="/news" component={SingleNewsPage} />
      </Switch>
    </Router>

  )
}



export default App

