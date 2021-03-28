import React from 'react'
import '../CSS/EntryCard.css';


class EntryCard extends React.Component{

    handleDelete = () => {
        const reqObj = {
          method: 'DELETE',
        }
    
        fetch(`http://localhost:3000/entries/${this.props.entry.id}`, reqObj)
        .then(resp => resp.json()) 
        .then(data => {
          this.props.deleteEntry(this.props.entry.id)
        })
      }

    render(){
        const {subject, date} = this.props.entry
        return(
        <div>
          <div className="subject-date-container">
            <input 
            type="text"
            value={subject} 
            />
            <input 
            type="text" 
            value={date} 
            />
            <button
            className="entry-buttons"
            onClick={console.log('view button')}
            >View</button>

            <button
            className="entry-buttons"
            onClick={this.handleDelete}
            >Delete</button>

            <button
            className="entry-buttons"
            onClick={console.log('edit button')}
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