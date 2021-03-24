import React from 'react';
import './CSS/App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Cal from './components/Cal';
import Entries from './components/Entries';
import Highlights from './components/Highlights';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/calendar" component={Cal}/>
        <Route path="/entries" component={Entries}/>
        <Route exact path="/entries/:id" component={Entries}/>
        <Route path="/Highlights" component={Highlights}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;