import React from 'react'
import EntryContainer from '../containers/EntryContainer'
import styled from 'styled-components'
// import Filter from './Filter'
import '../CSS/Entries.css';

class Entries extends React.Component{
    constructor(){
        super()
        this.state = {
            entries: [],
            // filter: ''
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

    // createEntry = (newEntry) => {
    //   this.setState({
    //     entries: [...this.state.entries, newEntry]
    //   })
    // }
    // updateFilter = (e) => {
    //   this.setState({
    //     filter: e.target.value
    //   })
    // }

    // entriesToShow = () => {
    //   let updatedEntries = this.state.entries

    //   if(this.state.filter === 'date'){
    //     updatedEntries.sort(function(entryA, entryB){
    //       if( entryA < entryB) {
    //         return -1;
    //       }
    //       if( entryA > entryB) {
    //         return 1;
    //       }
    //       return 0;
    //     });
    //   } else if(this.state.filter === 'topic'){
    //     updatedEntries.sort(function(entryA, entryB){
    //       if (entryA < entryB){
    //         return -1;
    //       }
    //       if (entryA < entryB){
    //         return 1;
    //       }
    //       return 0;
    //     })
    //   }
    //   console.log(updatedEntries)
    //   return updatedEntries
    // }


    updateEntry = (updatedEntry) => {
        const updatedEntries = this.state.entries.map(entryObj => {
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
          entries: updatedEntries
        })
      }

    render(){
        return(
          <Container>
            <h1 className="entry-header">Trip down memory lane:</h1>
            <Main>
              {/* <Filter updateFilter={this.updatedFilter}/> */}
              <div className="entries">
                <EntryContainer entries={this.state.entries} updateEntry={this.updateEntry} deleteEntry={this.deleteEntry}/>
              </div>
            </Main>
          </Container>
        )
    }
}

export default Entries;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #b1cbbb;
`

const Main = styled.div`

`



// Render the entries from the backend here:
// Display all the entries with subject and date.
// Each entry should have a view edit and delete link
// Filter:
//  -
// updateEntry={this.updateEntry} deleteEntry={this.deleteEntry}