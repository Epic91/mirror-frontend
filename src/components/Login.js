import React from 'react'

class Login extends React.Component{
    render(){
        return(
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
        )
    }
}

export default Login;