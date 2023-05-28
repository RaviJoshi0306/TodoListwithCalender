// TodoList.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './TodoList.module.css';

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
    <div className={styles.todoContainer}>
      <h2 className={styles.heading}>ToDo List</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Event Name"
          className={styles.input}
        />
        <DatePicker
          selected={newTodoStartTime}
          onChange={(date) => setNewTodoStartTime(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Start Time"
          className={styles.input}
        />
        <DatePicker
          selected={newTodoEndTime}
          onChange={(date) => setNewTodoEndTime(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="End Time"
          className={styles.input}
        />
        <button onClick={handleAddTodo} className={styles.addButton}>Add</button>
      </div>
      <ul className={styles.todoList}>
        {todos.map((event, index) => (
          <li key={index} className={styles.todoItem}>
            {event.todo} ({event.startTime.toString()} - {event.endTime.toString()})
            <button onClick={() => handleDeleteTodo(index)} className={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
