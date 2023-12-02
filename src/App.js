import React from "react";
import { useState } from "react";
import "./App.css";

function App() {

  const [taskList, setTaskList] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (taskText) => {
    if (taskText.trim() !== "") {
      const newTask = {
        taskId: Math.random(),
        taskText,
      };
      setTaskList([...taskList, newTask]);
      setInput("");
    }
  };

  const deleteTask = (taskId) => {
    const newTaskList = taskList.filter((task) => task.taskId !== taskId);
    setTaskList(newTaskList);
  };

  return (
    <>
      <div className="big-phone">
        <h1>To Do List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-btn" onClick={() => addTask(input)}>
          +
        </button>

        <div className="small-phone">
          <ol className="task-list">
            {taskList.map((task) => (
              <li className="task-item" key={task.taskId}>
                {task.taskText}
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.taskId)}
                >
                  -
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
