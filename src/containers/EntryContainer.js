import EntryCard from '../components/EntryCard'
import React from 'react'

const EntryContainer = (props) => {
    return(
      <div id="entry-collection">
      {
        props.entries.map(entry => {
          return <EntryCard key={entry.id} entry={entry} updateEntry={props.updateEntry} deleteEntry={props.deleteEntry} />
        })
      }
      </div>
    );
  }
  
  export default EntryContainer;