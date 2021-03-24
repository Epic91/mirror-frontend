import React from 'react'
import { Table } from 'semantic-ui-react'


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
        .then(data => {
            console.log('data', data)
            // iterate through the data and display a card
        })
    }
    render(){
        
        return(
            <h1>This is the Entries Page</h1>

            // Render the entries from the backend here:
            // Display all the entries with subject and date.
            // Each entry should have a view edit and delete link
            // Filter:
            //  -
        )
    }
}

export default Entries;