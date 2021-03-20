import React from 'react'
import '../CSS/Login.css';
import { Link } from 'react-router-dom'


class Login extends React.Component{
    render(){
        return(
            <div className="login-container">
                <h1 className="mirror-header">MIRЯOR</h1>
                
            <form className="login-form">
                <h1 className="sign-in-header"> Sign in</h1>
                <label>
                    <p>Username:</p>
                    <input type="text"/>
                </label>
                <label>
                    <p>Password:</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Login</button>
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