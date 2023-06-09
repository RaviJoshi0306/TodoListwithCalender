// // TodoList.js
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import styles from './TodoList.module.css';

// const TodoList = ({ todos, setTodos, setCalendarEvents }) => {
//   const [newTodo, setNewTodo] = useState('');
//   const [newTodoStartTime, setNewTodoStartTime] = useState(null);
//   const [newTodoEndTime, setNewTodoEndTime] = useState(null);

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== '' && newTodoStartTime && newTodoEndTime) {
//       const newEvent = {
//         todo: newTodo,
//         startTime: newTodoStartTime,
//         endTime: newTodoEndTime
//       };
//       setTodos([...todos, newEvent]);
//       setCalendarEvents(prevEvents => [...prevEvents, newEvent]); // Update the calendar events
//       setNewTodo('');
//       setNewTodoStartTime(null);
//       setNewTodoEndTime(null);
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//     setCalendarEvents(prevEvents => {
//       const updatedEvents = [...prevEvents];
//       updatedEvents.splice(index, 1);
//       return updatedEvents;
//     });
//   };

//   return (
//     <div className={styles.todoContainer}>
//       <h2 className={styles.heading}>ToDo List</h2>
//       <div className={styles.inputContainer}>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           placeholder="Event Name"
//           className={styles.input}
//         />
//         <DatePicker
//           selected={newTodoStartTime}
//           onChange={(date) => setNewTodoStartTime(date)}
//           showTimeSelect
//           dateFormat="Pp"
//           placeholderText="Start Time"
//           className={styles.input}
//         />
//         <DatePicker
//           selected={newTodoEndTime}
//           onChange={(date) => setNewTodoEndTime(date)}
//           showTimeSelect
//           dateFormat="Pp"
//           placeholderText="End Time"
//           className={styles.input}
//         />
//         <button onClick={handleAddTodo} className={styles.addButton}>Add</button>
//       </div>
//       <ul className={styles.todoList}>
//         {todos.map((event, index) => (
//           <li key={index} className={styles.todoItem}>
//             {event.todo} ({event.startTime.toString()} - {event.endTime.toString()})
//             <button onClick={() => handleDeleteTodo(index)} className={styles.deleteButton}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;




// 2nd update



// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import styles from './TodoList.module.css';

// const TodoList = ({ todos, setTodos, setCalendarEvents }) => {
//   const [newTodo, setNewTodo] = useState('');
//   const [newTodoStartTime, setNewTodoStartTime] = useState(null);
//   const [newTodoEndTime, setNewTodoEndTime] = useState(null);

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== '' && newTodoStartTime && newTodoEndTime) {
//       const newEvent = {
//         todo: newTodo,
//         startTime: newTodoStartTime,
//         endTime: newTodoEndTime
//       };
//       setTodos([...todos, newEvent]);
//       setCalendarEvents(prevEvents => [...prevEvents, newEvent]); // Update the calendar events
//       setNewTodo('');
//       setNewTodoStartTime(null);
//       setNewTodoEndTime(null);
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//     setCalendarEvents(prevEvents => {
//       const updatedEvents = [...prevEvents];
//       updatedEvents.splice(index, 1);
//       return updatedEvents;
//     });
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) {
//       return;
//     }
    
//     const items = Array.from(todos);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);
    
//     setTodos(items);
//     setCalendarEvents(items);
//   };

//   return (
//     <div className={styles.todoContainer}>
//       <h2 className={styles.heading}>ToDo List</h2>
//       <div className={styles.inputContainer}>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           placeholder="Event Name"
//           className={styles.input}
//         />
//         <DatePicker
//           selected={newTodoStartTime}
//           onChange={(date) => setNewTodoStartTime(date)}
//           showTimeSelect
//           dateFormat="Pp"
//           placeholderText="Start Time"
//           className={styles.input}
//         />
//         <DatePicker
//           selected={newTodoEndTime}
//           onChange={(date) => setNewTodoEndTime(date)}
//           showTimeSelect
//           dateFormat="Pp"
//           placeholderText="End Time"
//           className={styles.input}
//         />
//         <button onClick={handleAddTodo} className={styles.addButton}>Add</button>
//       </div>
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="todoList">
//           {(provided) => (
//             <ul className={styles.todoList} {...provided.droppableProps} ref={provided.innerRef}>
//               {todos.map((event, index) => (
//                 <Draggable key={index} draggableId={event.todo} index={index}>
//                   {(provided) => (
//                     <li
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       className={styles.todoItem}
//                     >
//                       {event.todo} ({event.startTime.toString()} - {event.endTime.toString()})
//                       <button onClick={() => handleDeleteTodo(index)} className={styles.deleteButton}>
//                         Delete
//                       </button>
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default TodoList;



// 3rd update

// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import styles from './TodoList.module.css';

// const TodoList = ({ todos, setTodos, handleDragEnd }) => {
//   const [newTodo, setNewTodo] = useState('');
//   const [newTodoStartTime, setNewTodoStartTime] = useState(null);
//   const [newTodoEndTime, setNewTodoEndTime] = useState(null);

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== '' && newTodoStartTime && newTodoEndTime) {
//       const newEvent = {
//         todo: newTodo,
//         startTime: newTodoStartTime,
//         endTime: newTodoEndTime,
//       };
//       setTodos([...todos, newEvent]);
//       setNewTodo('');
//       setNewTodoStartTime(null);
//       setNewTodoEndTime(null);
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className={styles.todoContainer}>
//       <h2 className={styles.heading}>ToDo List</h2>
//       <div className={styles.inputContainer}>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           placeholder="Event Name"
//           className={styles.input}
//         />
//         <DatePicker
//           selected={newTodoStartTime}
//           onChange={(date) => setNewTodoStartTime(date)}
//           showTimeSelect
//           dateFormat="Pp"
//           placeholderText="Start Time"
//           className={styles.input}
//         />
//         <DatePicker
//           selected={newTodoEndTime}
//           onChange={(date) => setNewTodoEndTime(date)}
//           showTimeSelect
//           dateFormat="Pp"
//           placeholderText="End Time"
//           className={styles.input}
//         />
//         <button onClick={handleAddTodo} className={styles.addButton}>
//           Add
//         </button>
//       </div>
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="todoList">
//           {(provided) => (
//             <ul className={styles.todoList} {...provided.droppableProps} ref={provided.innerRef}>
//               {todos.map((event, index) => (
//                 <Draggable key={index} draggableId={index.toString()} index={index}>
//                   {(provided) => (
//                     <li
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       className={styles.todoItem}
//                     >
//                       {event.todo} ({event.startTime && event.startTime.toString()} - {event.endTime && event.endTime.toString()})
//                       <button onClick={() => handleDeleteTodo(index)} className={styles.deleteButton}>
//                         Delete
//                       </button>
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default TodoList;




import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './TodoList.module.css';

const TodoList = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState('');
  const [newTodoStartTime, setNewTodoStartTime] = useState(null);
  const [newTodoEndTime, setNewTodoEndTime] = useState(null);
  const [editIndex, setEditIndex] = useState(-1);
  const [editStartTime, setEditStartTime] = useState(null);
  const [editEndTime, setEditEndTime] = useState(null);
  const [draggedStartTime, setDraggedStartTime] = useState(null);
  const [draggedEndTime, setDraggedEndTime] = useState(null);
  const [error, setError] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleAddTodo = () => {
    if (
      newTodo.trim() !== '' &&
      newTodoStartTime &&
      newTodoEndTime &&
      newTodoStartTime < newTodoEndTime
    ) {
      const newEvent = {
        todo: newTodo,
        startTime: newTodoStartTime,
        endTime: newTodoEndTime,
      };
      setTodos([...todos, newEvent]);
      setNewTodo('');
      setNewTodoStartTime(null);
      setNewTodoEndTime(null);
    } else {
      setError('Invalid start and end time. Please check your input.');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    const { startTime, endTime } = todos[index];
    setEditIndex(index);
    setEditStartTime(startTime);
    setEditEndTime(endTime);
  };

  const handleSaveEdit = () => {
    if (editStartTime && editEndTime && editStartTime < editEndTime) {
      const updatedTodos = [...todos];
      const updatedTodo = {
        ...updatedTodos[editIndex],
        startTime: editStartTime,
        endTime: editEndTime,
      };
      updatedTodos.splice(editIndex, 1, updatedTodo);
      setTodos(updatedTodos);
      setEditIndex(-1);
      setEditStartTime(null);
      setEditEndTime(null);
    } else {
      setError('Invalid start and end time. Please check your input.');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
    setEditStartTime(null);
    setEditEndTime(null);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.index === destination.index) return;
  
    const updatedTodos = Array.from(todos);
    const [draggedTodo] = updatedTodos.splice(source.index, 1);
    updatedTodos.splice(destination.index, 0, draggedTodo);
  
    const draggedStartTime = draggedTodo.startTime;
    const draggedEndTime = draggedTodo.endTime;
  
    const updatedTodosWithTime = updatedTodos.map((todo, index) => {
      if (index === destination.index) {
        const newStartTime = new Date(draggedStartTime);
        const newEndTime = new Date(draggedEndTime);
  
        // Update start and end dates based on the destination date
        newStartTime.setFullYear(destination.date.getFullYear());
        newStartTime.setMonth(destination.date.getMonth());
        newStartTime.setDate(destination.date.getDate());
  
        newEndTime.setFullYear(destination.date.getFullYear());
        newEndTime.setMonth(destination.date.getMonth());
        newEndTime.setDate(destination.date.getDate());
  
        // Calculate remaining time based on the new end day
        const currentTime = new Date();
        const timeDifference = newEndTime.getTime() - currentTime.getTime();
        const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const remainingMinutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const remainingSeconds = Math.floor((timeDifference / 1000) % 60);
  
        return {
          ...todo,
          startTime: newStartTime,
          endTime: newEndTime,
          remainingDays,
          remainingHours,
          remainingMinutes,
          remainingSeconds,
        };
      }
      return todo;
    });
  
    setTodos(updatedTodosWithTime);
  };
  

  const handleDragStart = (start) => {
    const { startTime, endTime } = todos[start.source.index];
    setDraggedStartTime(startTime);
    setDraggedEndTime(endTime);
  };

  const formatDateTime = (date) => {
    if (date instanceof Date) {
      return date.toLocaleString();
    }
    return '';
  };
  const CountdownTimer = ({ endTime }) => {
    if (endTime === null) {
      return null; // or you can return a placeholder message or alternative content
    }
  
    const timeDifference = endTime.getTime() - currentTime.getTime();
    const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const remainingMinutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const remainingSeconds = Math.floor((timeDifference / 1000) % 60);
  
    return (
      <div className={styles.todoCountdown}>
        Remaining Time: {remainingDays}d {remainingHours}h {remainingMinutes}m {remainingSeconds}s
      </div>
    );
  };
  
  const renderTodoItems = () => {
    const sortedTodos = todos.slice().sort((a, b) => a.startTime - b.startTime);

    return sortedTodos.map((todo, index) => (
      <Draggable key={index} draggableId={index.toString()} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={styles.todoItem}
          >
            <div className={styles.todoText}>{todo.todo}</div>
            {index === editIndex ? (
              <div className={styles.editFields}>
                <DatePicker
                  selected={editStartTime}
                  onChange={(date) => setEditStartTime(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  placeholderText="Start Time"
                  className={styles.datePicker}
                />
                <DatePicker
                  selected={editEndTime}
                  onChange={(date) => setEditEndTime(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  placeholderText="End Time"
                  className={styles.datePicker}
                />
                <button onClick={handleSaveEdit} className={styles.saveButton}>
                  Save
                </button>
                <button onClick={handleCancelEdit} className={styles.cancelButton}>
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div className={styles.todoTime}>
                  {formatDateTime(todo.startTime)} - {formatDateTime(todo.endTime)}
                </div>
                <div className={styles.todoActions}>
                  <button onClick={() => handleEditTodo(index)}>Edit</button>
                  <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                </div>
                <CountdownTimer endTime={todo.endTime} />
              </>
            )}
          </div>
        )}
      </Draggable>
    ));
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
          className={styles.datePicker}
        />
        <DatePicker
          selected={newTodoEndTime}
          onChange={(date) => setNewTodoEndTime(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="End Time"
          className={styles.datePicker}
        />
        <button onClick={handleAddTodo} className={styles.addButton}>
          Add Event
        </button>
      </div>
      {error && <div className={styles.error}>{error}</div>}
      <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {renderTodoItems()}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;

