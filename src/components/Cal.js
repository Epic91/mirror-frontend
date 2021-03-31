import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components'
import 'react-calendar/dist/Calendar.css';
import '../CSS/Cal.css';

function Cal() {
  const [value, onChange] = useState(new Date());

  return (

    // <Container>
        <Calendar
        className='calendar'
          onChange={onChange}
          value={value}
          />

  );
}


export default Cal;

