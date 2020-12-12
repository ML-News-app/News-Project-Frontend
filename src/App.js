import React, { useEffect,useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import './App.css';
import CategoricalNews from './Components/CategoricalNews/CategoricalNews';
import SingleNewsPage from './Components/SingleNewsPage/SingleNewsPage';
import axios from 'axios';

function App(props) {

  const [state, setstate] = useState('')

  useEffect(() => {
    axios.get('https://mighty-springs-26141.herokuapp.com/killswitch/v1/pingme')
      .then(response => {
        setstate(response.data)
      })
  }, [])

  return (


    <React.Fragment>
      {
        state === 'harrypotter' ?
          (
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/category/:type" component={CategoricalNews} />
                <Route exact path="/news" component={SingleNewsPage} />
              </Switch>
            </Router>
          )
          :
          null
      }
    </React.Fragment>

  )
}



export default App

