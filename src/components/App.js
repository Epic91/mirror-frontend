import React from 'react';
import '../CSS/App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Cal from './Cal';
import Entries from './Entries';
import Highlights from './Highlights';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import EntryForm from './EntryForm'



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        {/* <Route path="/" exact component={Login}/> */}
        {/* Make login first page the user sees */}
        <Route path="/login" exact component={Login}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/calendar" component={Cal}/>
        <Route path="/entries" component={Entries}/>
        <Route path="/entryform" component={EntryForm} />
        <Route exact path="/entries/:id" component={Entries}/>
        <Route path="/highlights" component={Highlights}/>
        <Route path="/signup" component={SignUp}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;