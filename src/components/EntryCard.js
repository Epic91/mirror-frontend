import React, { Component } from 'react'
import '../CSS/EntryCard.css';
import EditEntry from './EditEntry'
import { Segment, Icon } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'

class EntryCard extends Component{
  state = {
    editForm: false
  }

  handleDelete = () => {
    const reqObj = {
      method: 'DELETE'
    }

    fetch(`http://localhost:3000/entries/${this.props.entry.id}`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      console.log(data, 'data')
      this.props.deleteEntry(this.props.entry.id)
    })
  }

  handleEdit = () => {
    this.setState({
      editForm: !this.state.editForm
    })
  }

  handleSubmit = () => {
    this.setState({
      editForm: false
    })
  }

    render(){
      const { subject, date, body, emotion, topic} = this.props.entry
        return(
          <div className="scroll">
            <div className='all-content'>
              <div className="subject-date-container">
              <Segment padded>
                <h1 className= "subject">{subject}</h1>
                <h4 className="date">Date: {date}</h4>
                <h5 className="emotion">Emotion: {emotion}</h5>
                <h5 className= "topic">Topic: {topic}</h5>
                <br></br>
                <h5 className="mainbody">{body}</h5>

                {this.state.editForm ? <EditEntry entry={this.props.entry} updateEntry={this.props.updateEntry} handleSubmit={this.handleSubmit}/> : null}       

                {/* <Button secondary onClick={this.handleEdit}>Edit</Button> */}
                <Icon onClick={this.handleEdit} name='edit' size='large'/>
                <Icon onClick={this.handleDelete} name='trash' size='large'/>
                {/* <Button primary onClick={this.handleDelete}>trash</Button> */}
              </Segment>
              </div>        
            </div>
          </div>
        )
    }
}

export default EntryCard;