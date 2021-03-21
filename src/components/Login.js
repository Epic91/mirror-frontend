import React from 'react'
import '../CSS/Login.css';
import { Link, Redirect } from 'react-router-dom'


class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        <Redirect to='/' />
    }

    render(){
        return(
            <div className="login-container">
                <h1 className="mirror-header">MIRЯOR</h1>

            <form className="login-form" onSubmit={this.handleLogin}>
                <h1 className="sign-in-header"> Sign in</h1>
                <label>
                    <p>Username:</p>
                    <input 
                    type="text" 
                    name="username" 
                    value={this.state.username} 
                    onChange={this.handleChange}
                    placeholder="username"
                    />
                </label>
                <label>
                    <p>Password:</p>
                    <input 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    placeholder="password"
                    />
                </label>
                <div>
                    <button 
                    type="submit"
                    onSubmit={this.handleSubmit}
                    >Login</button>
                </div>
            </form>

            <div className="signup-link">
                <Link to="/signup">
                    <li >
                        Create an account
                    </li>
                </Link>
            </div>
            </div>
        )
    }
}

export default Login;