import React from 'react'
import EntryContainer from '../containers/EntryContainer'
import styled from 'styled-components'
import '../CSS/Entries.css';

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
            this.setState({
                entries: entries
            })
        })
    }

    updateEntry = (updatedEntry) => {
      const newState = this.state.entries.map(entryObj => {
        if(entryObj.id === updatedEntry.id) {
          return updatedEntry
        } else {
          return entryObj
        }
      })
      this.setState({
        entries: newState
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
          <Main> 
            <h1 className="entry-header">Trip down memory lane:</h1>
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