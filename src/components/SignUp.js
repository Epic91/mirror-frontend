import React from 'react'

class SignUp extends React.Component{
    render(){
        return(
            <div className="login-container">
                <h1 className="mirror-header">MIRЯOR</h1>
                
            <form className="login-form">
                <h1 className="sign-in-header"> Sign Up</h1>
                <label>
                    <p>Email:</p>
                    <input type="text"/>
                </label>
                <label>
                    <p>Username:</p>
                    <input type="text"/>
                </label>
                <label>
                    <p>Password:</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Sign Up</button>
            </div>
            </form>
            </div>        )
    }
}

export default SignUp;