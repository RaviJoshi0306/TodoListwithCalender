// TodoList.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TodoList = ({ todos, setTodos, setCalendarEvents }) => {
  const [newTodo, setNewTodo] = useState('');
  const [newTodoStartTime, setNewTodoStartTime] = useState(null);
  const [newTodoEndTime, setNewTodoEndTime] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '' && newTodoStartTime && newTodoEndTime) {
      const newEvent = {
        todo: newTodo,
        startTime: newTodoStartTime,
        endTime: newTodoEndTime
      };
      setTodos([...todos, newEvent]);
      setCalendarEvents(prevEvents => [...prevEvents, newEvent]); // Update the calendar events
      setNewTodo('');
      setNewTodoStartTime(null);
      setNewTodoEndTime(null);
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setCalendarEvents(prevEvents => {
      const updatedEvents = [...prevEvents];
      updatedEvents.splice(index, 1);
      return updatedEvents;
    });
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Event Name"
        />
        <DatePicker
          selected={newTodoStartTime}
          onChange={(date) => setNewTodoStartTime(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Start Time"
        />
        <DatePicker
          selected={newTodoEndTime}
          onChange={(date) => setNewTodoEndTime(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="End Time"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((event, index) => (
          <li key={index}>
            {event.todo} ({event.startTime.toString()} - {event.endTime.toString()})
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
