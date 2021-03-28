import EntryCard from '../components/EntryCard'
import React from 'react'
import '../CSS/EntryCard.css';


const EntryContainer = (props) =>{
  return(
    <div className="entry-collection">
    {
      props.entries.map(entry => {
        return <EntryCard key={entry.id} entry={entry} updateEntry={props.updateEntry} deleteEntry={props.deleteEntry}/>
      })
    }
    </div>

  )
}


export default EntryContainer;
/* updateEntry={props.updateEntry} deleteEntry={props.deleteEntry} */