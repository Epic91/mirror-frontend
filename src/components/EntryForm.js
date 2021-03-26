import React from 'react'

class EntryForm extends React.Component{
    constructor(){
        super()
            this.state = {
                subject: '',
                emotion: '',
                date:'',
                body: '',
                // errormessage:'',
                // prompts: []
            }
        }
        
        // componentDidMount(){
        //     fetch('http://localhost:3000/prompts')
        //     .then(resp => resp.json())
        //     .then(prompts => {
        //         this.setState({
        //             prompts: prompts
        //         })
        //     })
        // }

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        handleSubmit = (e) => {
            e.preventDefault()

            const newEntry = this.state

            const reqObj = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body:  JSON.stringify(newEntry)
              }
              
              fetch('http://localhost:3000/entries', reqObj)
              .then(resp => resp.json())
              .then(newEntry => {
                  console.log(this.props, '-----')
                  this.props.addEntry(newEntry)
                })
                this.setState({
                    subject: '',
                    emotion: '',
                    date:'',
                    body: ''
                })
            }
            //   if (newEntry.error){
            //       alert(newEntry.error)
            //   } else {
            //     alert("Your entry has been submitted :)");
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
                name='subject'
                value={this.state.subject}
                // type='text'
                placeholder='Max 50 characters'
                onChange={this.handleChange}
                />

                <p>Emotion:</p>
                <input
                name='emotion'
                value={this.state.emotion}
                type='text'
                placeholder='Enter emotion here'
                onChange={this.handleChange}
                />

                <p>Date:</p>
                <input
                name='Date'
                value={this.state.date}
                type='text'
                placeholder='Enter Date here'
                onChange={this.handleChange}
                />

                {/* <div className="prompt-drop-down">
                    <p>Prompts:</p>
                    <select>{this.state.prompts.map((obj) => {
                        return <option key={obj.id}>{obj.question}</option>})
                    }</select>
                </div> */}

                <div className='form-body'>
                    <textarea
                    name='body'
                    value={this.state.body}
                    type='text'
                    placeholder='Vent your heart out!'
                    rows={10}
                    onChange={this.handleChange}
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