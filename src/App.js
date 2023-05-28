// App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import CalendarComponent from './Calandar';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);

  return (
    <div>
      <h1>ToDo List and Calendar Integration</h1>
      <TodoList todos={todos} setTodos={setTodos} setCalendarEvents={setCalendarEvents} />
      <CalendarComponent todos={todos} calendarEvents={calendarEvents} />
    </div>
  );
};

export default App;
