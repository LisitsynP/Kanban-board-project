import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BackLogTabel({ backLogState, setDescriptionTask, descriptionTask }) {
  const [backLogTask, setBackLogTask] = [...backLogState];
  const [inputValue, setInputValue] = useState("");
  const [inputState, setInputState] = useState(false);
  useEffect(() => {
    setBackLogTask(
      backLogTask.map((task) => {
        if (task.id === descriptionTask.id) {
          return (task = descriptionTask);
        }
        return task;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [descriptionTask]);
  function addTask() {
    if (inputValue.length > 0 && +inputValue !== 0) {
      setBackLogTask(
        backLogTask.concat([
          {
            id: Date.now(),
            name: inputValue,
            description: "This task has no description",
          },
        ])
      );
      setInputState(false);
      setInputValue("");
    }
  }
  return (
    <div className="task-list">
      <span className="task-header">Backlog</span>
      <div className="task-items">
        {backLogTask.map((task) => {
          return (
            <Link
              to={`/description/${task.id}`}
              className="task-item"
              key={task.id}
              onClick={(e) => setDescriptionTask(task)}
            >
              {task.name}
            </Link>
          );
        })}
      </div>
      <div
        className="task-input"
        style={{ display: `${inputState ? "block" : ""}` }}
      >
        <input
          className="task-input_item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div className="task-add_btn">
        <button
          className="add-card-btn btn"
          style={{ display: `${inputState ? "none" : ""}` }}
          onClick={() => setInputState(true)}
        >
          +Add card
        </button>
        <button
          className="submit-card-btn btn"
          style={{ display: `${inputState ? "block" : ""}` }}
          onClick={addTask}
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default BackLogTabel;
