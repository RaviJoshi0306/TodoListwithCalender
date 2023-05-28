// Calendar.js
import React, { useState,useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarComponent = ({ todos }) => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    const events = todos.map((todo) => ({
      title: todo.todo,
      start: todo.startTime,
      end: todo.endTime,
      allDay: true,
    }));
    setCalendarEvents(events);
  }, [todos]);

  return (
    <div>
      <h2>Calendar</h2>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={calendarEvents} />
    </div>
  );
};

export default CalendarComponent;
