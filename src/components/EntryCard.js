import React from 'react'
import { Table } from 'semantic-ui-react'

class EntryCard extends React.Component{

    // handleDelete = () => {
    //     const reqObj = {
    //       method: 'DELETE',
    //     }
    
        
    //     fetch(`http://localhost:3000/entries/${this.props.entry.id}`, reqObj)
    //     .then(resp => resp.json()) 
    //     .then(data => {
    //       this.props.deleteEntry(this.props.entry.id)
    //     })
    //   }

    render(){
        const {subject, date} = this.props.entry
        return(
            <div>
                {/* Table header needs to be singular only the cells should repeat */}
                  <Table celled selectable>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Subject</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>{subject}</Table.Cell>
                        <Table.Cell>{date}</Table.Cell>
                        <Table.Cell>
                            {/* Todo:
                                    -Need to create a button or link to view, edit or delete each entry */}
                            {/* <button className="delete-entry" onClick={this.handleDelete}>Delete</button> */}
                        </Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default EntryCard;