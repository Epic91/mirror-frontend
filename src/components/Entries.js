import React from 'react'
import EntryContainer from '../containers/EntryContainer'
import EntryForm from './EntryForm'
import '../CSS/Entries.css';


// import Highlights from './Highlights'


class Entries extends React.Component{
    constructor(){
        super()
        this.state = {
            entries: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/entries')
        .then(resp => resp.json())
        .then(entries => {
            // console.log('entries', entries)
            this.setState({
                entries: entries
            })
        })
    }

    addEntry = (newEntry) => {
      this.setState({
        entries: [...this.state.entries, newEntry]
      })
    }

    updateEntry = (updatedEntry) => {
        const updatedEntries = this.state.toys.map(entryObj => {
          if (entryObj.id === updatedEntry.id) {
            return updatedEntry
          } else {
            return entryObj
          }
        })
    
        this.setState({
          entries: updatedEntries
        })
      }

      deleteEntry = (id) => {
        const updatedEntries = this.state.entries.filter(e => e.id !== id )
    
        this.setState({
          toys: updatedEntries
        })
      }

    render(){
        return(
        <div className="entries">
          <EntryContainer entries={this.state.entries} />
          <EntryForm addEntry={this.addEntry}/>
        </div>
        )
    }
}

export default Entries;
// Render the entries from the backend here:
// Display all the entries with subject and date.
// Each entry should have a view edit and delete link
// Filter:
//  -
// updateEntry={this.updateEntry} deleteEntry={this.deleteEntry}