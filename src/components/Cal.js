import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components'
import 'react-calendar/dist/Calendar.css';
import '../CSS/Cal.css';

function Cal() {
  const [value, onChange] = useState(new Date());

  return (

    <Container>
      <div className="calendar">
        <Calendar
          onChange={onChange}
          value={value}
          />
        <div className="entries-filter">
          <h2>Filtered entries here:</h2>
        </div>
        <div className="highlights-filter">
          <h2>Filtered highlights here:</h2>
        </div>
      </div>
    </Container>
  );
}

export default Cal;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ee7752;

`
