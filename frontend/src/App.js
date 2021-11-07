import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './pages/home/home.component'
import { Play } from './pages/play/play.component'
import { Whitelist } from './pages/whitelist/whitelist.component'
import { Singup } from './pages/ls_forms/signup.component'
import { Login } from './pages/ls_forms/login.component'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/play" component={Play}></Route>
        <Route exact path="/whitelist" component={Whitelist}></Route>
        <Route exact path="/signup" component={Singup}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;