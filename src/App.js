// // App.js
// import React, { useState } from 'react';
// import TodoList from './TodoList';
// import CalendarComponent from './Calandar';
// import './App.css';
// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [calendarEvents, setCalendarEvents] = useState([]);

//   return (
//     <div className="pageContainer">
//       <h1>ToDo List and Calendar Integration</h1>
//       <TodoList todos={todos} setTodos={setTodos} setCalendarEvents={setCalendarEvents} />
//       <CalendarComponent todos={todos} calendarEvents={calendarEvents} />
//     </div>
//   );
// };

// export default App;

// App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import CalendarComponent from './Calandar';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedTodos = [...todos];
    const [draggedTodo] = updatedTodos.splice(result.source.index, 1);
    updatedTodos.splice(result.destination.index, 0, draggedTodo);

    setTodos(updatedTodos);
    setCalendarEvents(updatedTodos);
  };

  return (
    <div className="pageContainer">
      <h1>ToDo List and Calendar Integration</h1>
      <TodoList todos={todos} setTodos={setTodos} setCalendarEvents={setCalendarEvents} handleDragEnd={handleDragEnd} />
      <CalendarComponent todos={todos} calendarEvents={calendarEvents} />
    </div>
  );
};

export default App;
