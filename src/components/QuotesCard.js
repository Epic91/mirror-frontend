import React from 'react'
// import { Card } from 'semantic-ui-react'
import '../CSS/QuotesCard.css';
import EntryForm from './EntryForm';


function QuotesCard(props) {
    return (
      <EntryForm createEntry={props.createEntry}/>
    )
}

export default QuotesCard;

