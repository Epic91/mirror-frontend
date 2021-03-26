import React from 'react';
import '../CSS/App.css';
import 'semantic-ui-css/semantic.min.css'
import { Switch, Route, withRouter } from 'react-router-dom';
import Nav from './Nav';
import Cal from './Cal';
import Entries from './Entries';
import Highlights from './Highlights';
import Login from './Login';
import { currentUser } from '../actions/index';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import EntryForm from './EntryForm'
import { connect } from 'react-redux'

class App extends React.Component{
  componentDidMount(){
    const token = localStorage.getItem('token')

    if(!token){
      this.props.history.push('/login')
    } else{

      const reqObj = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }

      fetch('http://localhost:3000/api/v1/current_user', reqObj)
      .then(resp => resp.json())
      .then(data => {
        this.props.currentUser(data)
        // console.log('data', data)
      })
    }
  }


  render(){
    // console.log(this.props, '----')
    return (
      <div className="App">
        <Nav />
        <Switch> 
        {/* <Route path="/" exact component={Login}/> */}
        {/* Make login first page the user sees */}
        <Route path="/login" exact component={Login}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/calendar" component={Cal}/>
        <Route path="/entries" component={Entries}/>
        <Route path="/entryform" component={EntryForm} />
        <Route exact path="/entries/:id" component={Entries}/>
        <Route path="/highlights" component={Highlights}/>
        <Route path="/signup" component={SignUp}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
   currentUser: currentUser
}

export default connect(null, mapDispatchToProps)(withRouter(App))