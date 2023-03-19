import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ReadyTable({
  readyState,
  backLogState,
  optionBtn,
  setDescriptionTask,
  descriptionTask,
}) {
  const [backLogTask, setBackLogTask] = [...backLogState];
  const [readyTasks, setReadyTasks] = [...readyState];
  const [isActive, setIsActive] = useState(false);
  const [stateAddBtn, setstateAddBtn] = useState(false);

  useEffect(() => {
    setReadyTasks(
      readyTasks.map((task) => {
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

    setReadyTasks(
      readyTasks.concat([
        {
          id: task.id,
          name: task.name,
          description: task.description,
        },
      ])
    );
    setBackLogTask(backLogTask.filter((value) => value !== task));
  }
  return (
    <div className="task-list">
      <span className="task-header">Ready</span>
      <div className="task-items">
        {readyTasks.map((task) => {
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
            {backLogTask.map((task, index) => {
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
          style={backLogTask.length ? null : { ...optionBtn }}
          disabled={backLogTask.length ? false : true}
          onClick={() => setstateAddBtn(!stateAddBtn)}
        >
          +Add card
        </button>
      </div>
    </div>
  );
}

export default ReadyTable;
