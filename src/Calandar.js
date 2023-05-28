// // Calendar.js
// import React, { useState,useEffect } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';

// const CalendarComponent = ({ todos }) => {
//   const [calendarEvents, setCalendarEvents] = useState([]);

//   useEffect(() => {
//     const events = todos.map((todo) => ({
//       title: todo.todo,
//       start: todo.startTime,
//       end: todo.endTime,
//       allDay: true,
//     }));
//     setCalendarEvents(events);
//   }, [todos]);

//   return (
//     <div>
//       <h2>Calendar</h2>
//       <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={calendarEvents} />
//     </div>
//   );
// };

// export default CalendarComponent;

// Calendar.js
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarComponent = ({ todos, setTodos }) => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    const events = todos.map((todo, index) => ({
      id: index,
      title: todo.todo,
      start: todo.startTime,
      end: todo.endTime,
      allDay: true,
    }));
    setCalendarEvents(events);
  }, [todos]);

  const handleEventDrop = (eventDropInfo) => {
    const updatedEvents = [...calendarEvents];
    const droppedEvent = updatedEvents.find(event => event.id === eventDropInfo.event.id);
    if (droppedEvent) {
      droppedEvent.start = eventDropInfo.event.start;
      droppedEvent.end = eventDropInfo.event.end;
      setCalendarEvents(updatedEvents);

      const updatedTodos = [...todos];
      const droppedTodo = updatedTodos.find(todo => todo.todo === droppedEvent.title);
      if (droppedTodo) {
        droppedTodo.startTime = eventDropInfo.event.start;
        droppedTodo.endTime = eventDropInfo.event.end;
        setTodos(updatedTodos);
      }
    }
  };

  return (
    <div>
      <h2>Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
        editable={true}
        droppable={true}
        eventDrop={handleEventDrop}
      />
    </div>
  );
};

export default CalendarComponent;
