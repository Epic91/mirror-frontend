import EntryCard from '../components/EntryCard'
import React from 'react'

class EntryContainer extends React.Component{
  render(){

    const renderEntries = () => {
      return this.props.entries.map(entry => {
        return <EntryCard key={entry.id} entry={entry} />
    })
  }
  
  return(
    <div className="entry-container">
      {
        renderEntries()
      }
    </div>
    );
  }
}

export default EntryContainer;
/* updateEntry={props.updateEntry} deleteEntry={props.deleteEntry} */