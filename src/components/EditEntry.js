import React from 'react'

class EditEntry extends React.Component{
        constructor(){
            super()
                this.state = {
                    subject: '',
                    emotion: '',
                    topic: '',
                    highlight: '',
                    date:'',
                    body: '',
                    user_id: 1,
                    prompt_id: 1,                
                }
            }

            handleChange = (e) => {
                this.setState({
                    [e.target.name]: e.target.value
                })
            }
    
            handleSubmit = (e) => {
                e.preventDefault()
    
                const newEntry = this.state
    
                const reqObj = {
                    method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body:  JSON.stringify(newEntry)
                  }
                  console.log(reqObj)
                  
                  fetch(`http://localhost:3000/entries/${this.props.entry.id}`, reqObj)
                  .then(resp => resp.json())
                  .then(newEntry => {
                      this.props.handleSubmit()
                    //   debugger
                        this.props.updateEntry(newEntry)
                    
                    // console.log(newEntry, '-----')
                    })
                    this.setState({
                        subject: '',
                        emotion: '',
                        date:'',
                        body: '',
                        topic: '',
                        highlight: '',
                    })
                }
         
            render() {
            return (
                <form className='entry-form' onSubmit={this.handleSubmit}>
                    <p>Subject:</p>
                    <input
                    name='subject'
                    value={this.state.subject}
                    // type='text'
                    placeholder={this.props.entry.subject}
                    onChange={this.handleChange}
                    />
    
                    <p>What is one good thing that happened today? Big or small :)</p>
                    <input
                    name='highlight'
                    value={this.state.highlight}
                    type='text'
                    placeholder='Enter highlight here'
                    onChange={this.handleChange}
                    />
    
                    <p>Date:</p>
                    <input
                    name='date'
                    value={this.state.date}
                    type='text'
                    placeholder='Enter Date here'
                    onChange={this.handleChange}
                    />
                    
                    <label for="emotion">How are you feeling?:</label>
                    <select name="emotion" value={this.state.value} onChange={this.handleChange}>
                        <option value="select">Select</option>
                        <option value="angry">Angry 😡 </option>
                        <option value="anxious">Anxious 😰</option>
                        <option value="depressed">Depressed 😥</option>
                        <option value="good">Good 🙂</option>
                        <option value="furious">Furious 🤬</option>
                        <option value="happy">Happy 😃</option>
                        <option value="okay">Okay 😐</option>
                        <option value="sad">Sad 🙁</option>
                        <option value="stressed">Stressed 😓</option>
                    </select>
    
                    <p>
                    <label for="topic">What is making you feel this way?:</label>
                    <select name="topic" value={this.state.value} onChange={this.handleChange}>
                    <option value="">Choose one</option>
                    <option value="sad">Family </option>
                    <option value="anxious">Finance</option>
                    <option value="depressed">Friends</option>
                    <option value="good">Health</option>
                    <option value="furious">Marriage</option>
                    <option value="happy">Relationship</option>
                    <option value="sad">School</option>
                    <option value="stressed">Work</option>
                    </select>
                    </p>
    
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

export default EditEntry
