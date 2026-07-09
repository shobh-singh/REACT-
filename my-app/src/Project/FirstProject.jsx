import React, { useState } from "react";

function FirstProject() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setList([...list, { text: task, done: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  const toggleDone = (index) => {
    const newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Todo App</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: "none" }}>
        {list.map((item, index) => (
          <li key={index}>
            <span
              onClick={() => toggleDone(index)}
              style={{
                textDecoration: item.done ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              {item.text}
            </span>

            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FirstProject;