import React, { Component } from 'react'
import '../CSS/EntryCard.css';


class EntryCard extends Component{

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
    const { entries, id} = this.props.entry

    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        entries: entries + 1
      })
    }

    fetch(`http://localhost:3000/entries/${id}`, reqObj)
    .then(resp => resp.json()) 
    .then(updatedEntry => {
      console.log('data', updatedEntry)
      this.props.updateEntry(updatedEntry)
    })
  }

    render(){

      const { subject, date, body, emotion, topic} = this.props.entry
        return(
        <div className='all-content'>
          <div className="subject-date-container">

            <h1>{subject}</h1>
            <h3>{date}</h3>
            <h4>{body}</h4>
            <h4>{emotion}</h4>
            <h4>{topic}</h4>
              {/* <input 
              type="text"
              value={subject} 
              /> */}


              {/* <input 
              type="text" 
              value={date} 
              /> */}


              {/* <input 
              type="text"
              value={body} 
              /> */}


              {/* <input 
              type="text"
              value={emotion}
              /> */}


              {/* <input 
              type="text"
              value={topic}
              /> */}

            <button
            className="entry-buttons"
            onClick={this.handleDelete}
            >Delete</button>


            <button
            className="entry-buttons"
            onClick={this.handleEdit}
            >Edit</button>
            
          </div>        
        </div>
        )
    }
}

export default EntryCard;

// To do:
// Table header needs to be singular
// event handler for view and edit button
// Delete button doesnt delete
// Automatic click needs to be fixed
// SIDENOTE:
// Might need to create own tabel and not semantic