import React from 'react'
import EntryCard from '../components/EntryCard'
// import EntryForm from '../components/EntryForm';
import '../CSS/EntryCard.css';


const EntryContainer = (props) =>{
  return(
      <div className="entry-collection">
        <div>

        {
          props.entries.map(entry => {
            return <EntryCard key={entry.id} entry={entry} updateEntry={props.updateEntry} deleteEntry={props.deleteEntry}/>
          })
          
        }
        </div>
      </div>
  )
}


export default EntryContainer;
