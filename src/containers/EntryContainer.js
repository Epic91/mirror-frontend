import EntryCard from '../components/EntryCard'
import React from 'react'
import '../CSS/EntryCard.css';


class EntryContainer extends React.Component{
  render(){

    const renderEntries = () => {
      return this.props.entries.map(entry => {
        return <EntryCard key={entry.id} entry={entry} />
    })
  }
  
  return(
    <div className="entry-container">
      <div className="subj-date-header">
        <h1>Subject  Date   </h1>
      </div>
      {
        renderEntries()
      }
    </div>
    );
  }
}

export default EntryContainer;
/* updateEntry={props.updateEntry} deleteEntry={props.deleteEntry} */