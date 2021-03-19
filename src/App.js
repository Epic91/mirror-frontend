import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Calendar from './components/Calendar';
import Entries from './components/Entries';
import Highlights from './components/Highlights';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home'




function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/entries" component={Entries}/>
        <Route path="/Highlights" component={Highlights}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
