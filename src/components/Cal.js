import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../CSS/App.css';



function Cal() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="Calendar">
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Cal;