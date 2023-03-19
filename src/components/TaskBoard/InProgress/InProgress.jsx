import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function InProgress({
  readyState,
  inProgressState,
  optionBtn,
  setDescriptionTask,
  descriptionTask,
}) {
  const [inProgressTasks, setInProgressTasks] = [...inProgressState];
  const [readyTasks, setReadyTasks] = [...readyState];
  const [isActive, setIsActive] = useState(false);
  const [stateAddBtn, setstateAddBtn] = useState(false);

  useEffect(() => {
    setInProgressTasks(
      inProgressTasks.map((task) => {
        if (task.id === descriptionTask.id) {
          return (task = descriptionTask);
        }
        return task;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [descriptionTask]);

  function taskSwitch(task) {
    setIsActive(false);
    setstateAddBtn(false);
    setInProgressTasks(
      inProgressTasks.concat([
        {
          id: task.id,
          name: task.name,
          description: task.description,
        },
      ])
    );
    setReadyTasks(readyTasks.filter((value) => value !== task));
  }

  return (
    <div className="task-list">
      <span className="task-header">InProgress</span>
      <div className="task-items">
        {inProgressTasks.map((task, index) => {
          return (
            <Link
              to={`/description/${task.id}`}
              className="task-item"
              key={index}
              onClick={(e) => setDescriptionTask(task)}
            >
              {task.name}
            </Link>
          );
        })}
      </div>
      <div
        className="dropdown_conteiner"
        style={{ display: `${stateAddBtn ? "block" : "none"}` }}
      >
        <button
          className="dropdown_btn"
          onClick={(e) => setIsActive(!isActive)}
        >
          <span>⮟</span>
        </button>
        {isActive && (
          <ul className="dropdown_list">
            {readyTasks.map((task, index) => {
              return (
                <li
                  className="dropdown_item"
                  key={index}
                  onClick={(e) => taskSwitch(task)}
                >
                  {task.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="task-add_btn">
        <button
          className="add-ready-btn btn"
          style={readyTasks.length ? null : { ...optionBtn }}
          disabled={readyTasks.length ? false : true}
          onClick={() => setstateAddBtn(!stateAddBtn)}
        >
          +Add card
        </button>
      </div>
    </div>
  );
}

export default InProgress;
