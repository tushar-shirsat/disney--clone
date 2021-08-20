import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/detail/:id">
          <Detail/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
