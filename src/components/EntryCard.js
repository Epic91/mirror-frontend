import React from 'react'
import { Table } from 'semantic-ui-react'

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
                            <button
                            className='view-button'
                            onClick={console.log('view button')}
                            >View</button>

                            <button
                            className='delete-button'
                            onClick={this.handleDelete}
                            >Delete</button>

                            <button
                            className='edit-button'
                            onClick={console.log('edit button')}
                            >Edit</button>
                            {/* onclick get clicked automatically on refresh */}
                            
                        </Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
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