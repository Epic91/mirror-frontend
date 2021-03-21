import React from 'react'

class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className="login-container">
                <h1 className="mirror-header">MIRЯOR</h1>
                
            <form className="login-form">
                <h1 className="sign-in-header"> Sign Up</h1>
                <label>
                    <p>Email:</p>
                    <input 
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="email@email.com"
                    />
                </label>
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
                        >Sign Up
                    </button>                
                </div>
            </form>
            </div>
        )
    }
}

export default SignUp;