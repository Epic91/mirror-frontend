import React from 'react'
import '../CSS/Login.css';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/index'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username: 'evher',
            password: 'evher123',
            error: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
          }
          
          fetch('http://localhost:3000/api/v1/auth', reqObj)
          .then(resp => resp.json())
          .then(data => {
            console.log(data, '-----logged in-');

              if (data.error){
                  this.setState({
                      error: data.error 
                  })
                } else {
                    this.props.loginSuccess(data) 
                    this.setState({
                        username: '',
                        password: ''
                    })

                    this.props.history.push('/dashboard')
                
                }
            })
        }
        
        render(){
            return(
                <div className="login-container">
                    <h1 className="mirror-header">Mirror</h1>
                <div>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <h1 className="sign-in-header"> Sign in</h1>
                        {this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null}
                        <label>
                            <p className="username-text">Username:</p>
                            <input 
                            type="text" 
                            name="username" 
                            value={this.state.username} 
                            onChange={this.handleChange}
                            placeholder="username"
                            />
                        </label>
                        <label>
                            <p className="pwd-text">Password:</p>
                            <input 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange}
                            placeholder="password"
                            />
                        </label>
                        <div>
                            <button className="login-button"
                            type="submit"
                            onSubmit={this.handleSubmit}
                            >Login</button>
                            </div>
                            </form>
                        </div>
                            {/* <Link to="/signup">
                                <li >
                                    Create an account
                                </li>
                            </Link> */}
                
                        </div>
                        )
                    }
                }
                
                const mapDispatchToProps = {
                    loginSuccess: loginSuccess
                }

export default connect(null, mapDispatchToProps)(Login)
//  Successful login:
//      -Update the backend
//      -Clear the form 
//      -Redirect
//  Failed login:
//      -errors