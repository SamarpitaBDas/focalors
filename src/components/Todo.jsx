import React, { useState } from 'react';
import styled from 'styled-components';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Handle adding new tasks
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Handle task completion toggle
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Handle Enter key press to add task
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className='card-inner'>
          <Header>TO-DO</Header>
          <TaskList>
            {tasks.map((task, index) => (
              <TaskItem key={index}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <TaskText completed={task.completed}>{task.text}</TaskText>
              </TaskItem>
            ))}
          </TaskList>
          <TaskInputContainer>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyDown} // Add key down handler
              placeholder="Add a new task..."
            />
            <button onClick={handleAddTask}>Add Task</button>
          </TaskInputContainer>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 17em;
    height: 20em;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: rgba(255, 255, 255, 0.15);
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1em;
    box-sizing: border-box;
  }

  .card-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    transform-style: preserve-3d;
  }
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 1em;
  font-family: 'Keania One', cursive;
  color: white;
`;

const TaskInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto; /* Ensures input & button stay at the bottom */
  position: absolute;
  bottom: 10px;
  width: 100%;
  input {
    width: 70%;
    padding: 0.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    background: #fff;
  }

  button {
    width: 25%;
    padding: 0.5em;
    border-radius: 5px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: #0056b3;
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 2em; /* Provide space before the input and button */
  overflow-y: auto;
  height: calc(100% - 70px); /* Ensures the task list fills up the remaining space in the card */
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;

const TaskText = styled.span`
  margin-left: 10px;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: ${(props) => (props.completed ? 'gray' : 'black')};
`;

export default Todo;
