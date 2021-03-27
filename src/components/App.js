import React from 'react';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import { BrowserRouter as Router} from 'react-router-dom';
import Cal from './Cal';
import Entries from './Entries';
import Highlights from './Highlights';
import SignUp from './SignUp';
import EntryForm from './EntryForm'
import '../CSS/App.css';
import 'semantic-ui-css/semantic.min.css'
// import { currentUser } from '../actions/index';
// import { connect } from 'react-redux'

class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch> 
          <Route path="/" exact component={Login}/>
          <Route path="/dashboard" exact component={Dashboard}/>
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
}

export default App