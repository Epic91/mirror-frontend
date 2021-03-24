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

    handleSubmit = e => {
        e.preventDefault()

        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:  JSON.stringify(this.state)
          }
          
          fetch('http://localhost:3000/api/v1/auth', reqObj)
          .then(resp => resp.json())
          .then(data => {
              if (data.error){
                  alert(data.error)
              } else {
                  console.log('something')

                  }
              }
            )
        }

        // Things to do:
        //  -Need to somehow tell the backend that only when a user is signing up they need to use the email attribute
        //  -Render the users dashboard
    


    render(){
        return(
            <div className="login-container">
                <h1 className="mirror-header">MIRЯOR</h1>
                
            <form className="login-form" handleSubmit={this.handleSubmit}>
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