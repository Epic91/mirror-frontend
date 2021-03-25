import React from 'react'
import EntryContainer from '../containers/EntryContainer'


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

    // updateEntry = (updatedEntry) => {
    //     const updatedEntries = this.state.entries.map(entryObj => {
    //       if (entryObj.id === updatedEntry.id) {
    //         return updatedEntry
    //       } else {
    //         return entryObj
    //       }
    //     })
    
    //     this.setState({
    //       toys: updatedEntries
    //     })
    //   }
    
    //   deleteEntry = (id) => {
    //     const updatedEntries = this.state.entries.filter(e => e.id !== id )
    
    //     this.setState({
    //       entries: updatedEntries
    //     })
    //   }

    render(){
        return(
            <EntryContainer entries={this.state.entries} />
                // {/* deleteEntry={this.deleteEntry} */}
            )
        }
    }

export default Entries;
// Render the entries from the backend here:
// Display all the entries with subject and date.
// Each entry should have a view edit and delete link
// Filter:
//  -