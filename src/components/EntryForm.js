import React from 'react'
import '../CSS/App.css';


class EntryForm extends React.Component{
    constructor(){
        super()
            this.state = {
                subject: '',
                emotion: '',
                emotion_image: '',
                topic: '',
                topic_image: '',
                highlight: '',
                date:'',
                body: '',
                user_id: 1,
                prompt_id: 1
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
              console.log(reqObj)
              
              fetch('http://localhost:3000/entries', reqObj)
              .then(resp => resp.json())
              .then(newEntry => {
                //   console.log(newEntry, '-----')
                //   this.props.createEntry(newEntry)
                })
                this.setState({
                    subject: '',
                    emotion: '',
                    date:'',
                    body: '',
                    topic: '',
                    highlight: ''
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

                <p>How are you feeling today?</p>
                <input
                name='emotion'
                value={this.state.emotion}
                type='text'
                placeholder='Enter emotion here'
                onChange={this.handleChange}
                />

                <p>What is making you feel this way?</p>
                <input
                name='topic'
                value={this.state.topic}
                type='text'
                placeholder='Enter a topic here'
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
                
                {/* <label for="cars">How are you feeling?:</label>
                <select name="emotions" id="emotion" onSelect={this.handleSelect} >
                <option value="select">Select</option>
                <option value="sad">Angry 😡 </option>
                <option value="anxious">Anxious 😰</option>
                <option value="depressed">Depressed 😥</option>
                <option value="good">Good 🙂</option>
                <option value="furious">Furious 🤬</option>
                <option value="happy">Happy 😃</option>
                <option value="okay">Okay 😐</option>
                <option value="sad">Sad 🙁</option>
                <option value="stressed">Stressed 😓</option>
                </select> */}

                {/* <p>
                <label for="cars">What is making you feel this way?:</label>
                <select name="topics" id="topic">
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
                </p> */}




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