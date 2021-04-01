import React from 'react'
import '../CSS/EntryForm.css';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


class EntryForm extends React.Component{
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
                prompt_id: 1
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
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body:  JSON.stringify(newEntry)
              }
            //   console.log(reqObj)
              
              fetch('http://localhost:3000/entries', reqObj)
              .then(resp => resp.json())
              .then(data => {
                  this.props.history.push('/entries')
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
            
            render() {
                return (
                    <div className='entry-container'>
                        <h1 className='entry-form-header'>Let's talk about it</h1>
                        <form className='entry-form' onSubmit={this.handleSubmit}>
                            <div className="text-fields">  
                                <input
                                name='subject'
                                value={this.state.subject}
                                type='text-form'
                                placeholder='Subject'
                                onChange={this.handleChange}
                                />

                                <input
                                name='highlight'
                                value={this.state.highlight}
                                type='highlight'
                                placeholder='What is one good thing that happened today? Big or small :)'
                                onChange={this.handleChange}
                                />

                                <input
                                name='date'
                                value={this.state.date}
                                type='date'
                                placeholder='Date'
                                onChange={this.handleChange}
                                />
                            </div>
                            
                            <div className="drop-down-field">
                            <p className='emotion-header'>How are you doing right now?</p>
                                <select name="emotion" value={this.state.value} onChange={this.handleChange}>
                                    <option value="select">Select</option>
                                    <option value="Angry 😡">Angry 😡 </option>
                                    <option value="Anxious 😰">Anxious 😰</option>
                                    <option value="Depressed 😥">Depressed 😥</option>
                                    <option value="Good 🙂">Good 🙂</option>
                                    <option value="Furious 🤬">Furious 🤬</option>
                                    <option value="Happy 😃">Happy 😃</option>
                                    <option value="Okay 😐">Okay 😐</option>
                                    <option value="Sad 🙁">Sad 🙁</option>
                                    <option value="Stressed 😓">Stressed 😓</option>
                                </select>
                            </div>

                            <div className='drop-down-field'>
                            <p className='topic-header'>What is making you feel this way?</p>
                                <select name="topic" value={this.state.value} onChange={this.handleChange}>
                                <option value="">Select</option>
                                <option value="Family 🏡">Family 🏡 </option>
                                <option value="Finance 💰">Finance 💰</option>
                                <option value="Friends 🤝🏾">Friends 🤝🏾</option>
                                <option value="Health 🏥">Health 🏥</option>
                                <option value="Marriage 💍">Marriage 💍</option>
                                <option value="Relationship ❤️">Relationship ❤️</option>
                                <option value="School 🎒">School 🎒</option>
                                <option value="Work 💼">Work 💼</option>
                                </select>
                            </div>
                            
                            <div className="context-container">
                                <textarea
                                className ='form-body'
                                name='body'
                                value={this.state.body}
                                type='text'
                                placeholder='Vent your heart out!'
                                onChange={this.handleChange}
                                />
                            </div>
                            <Button handleSubmit={this.handleSubmit}>Submit</Button>
                        </form>
                    </div>
                    )
                }
            }

  
export default EntryForm;