import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/pages/Home';
import Info from './Components/pages/Info'
import SignUp from './Components/pages/SignUp';


function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/info' component={Info} />
          <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
      </>
      );
}

export default App;