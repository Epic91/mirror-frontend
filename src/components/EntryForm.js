import React from 'react'

class EntryForm extends React.Component{
    constructor(){
        super()
            this.state = {
                subject: '',
                emotion: '',
                date:'',
                body: '',
                errormessage:'',
                prompts: []
            }
        }
        componentDidMount(){
            fetch('http://localhost:3000/prompts')
            .then(resp => resp.json())
            .then(prompts => {
                this.setState({
                    prompts: prompts
                })
            })
        }

        myChangeHandler = e => {
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
                body:  JSON.stringify(this.state)
              }
              
              fetch('http://localhost:3000/entries', reqObj)
              .then(resp => resp.json())
              .then(data => {
                  if (data.error){
                      alert(data.error)
                  } else {
                    alert("Your entry has been submitted :)");
                      }
                  }
                )
            }
            // Need to work on errors 
            // The data isnt going to the db
            //Clear the form
            // Need to update the database
            // Need to style

        render() {
        return (
            <form className='entry-form' onSubmit={this.handleSubmit}>
                <p>Subject:</p>
                <input
                type='text'
                placeholder='Max 50 characters'
                name='subject'
                onChange={this.myChangeHandler}
                />

                <p>Emotion:</p>
                <input
                type='text'
                placeholder='Enter emotion here'
                name='emotion'
                onChange={this.myChangeHandler}
                />

                <p>Date:</p>
                <input
                type='text'
                placeholder='Enter Date here'
                name='Date'
                onChange={this.myChangeHandler}
                />

                <div className="prompt-drop-down">
                    <p>Prompts:</p>
                    <select>{this.state.prompts.map((obj) => {
                        return <option key={obj.id}>{obj.question}</option>})
                    }</select>
                </div>

                <div className='form-body'>
                    <textarea
                    type='text'
                    placeholder='Vent your heart out!'
                    name='body'
                    onChange={this.myChangeHandler}
                    />
                </div>

                <button 
                className='entry-submit-button'
                type='submit' 
                handleSubmit={this.handleSubmit}>Submit</button>     
            </form>
            )
        }
    }
  
export default EntryForm;