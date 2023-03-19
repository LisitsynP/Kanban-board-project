import React, { useState } from "react";
import { Link } from "react-router-dom";

function Description(props) {
  const [descriptionTask, setDescriptionTask] = [
    props.descriptionTask,
    props.setDescriptionTask,
  ];
  const [textarea, setTextarea] = useState(descriptionTask.description);
  const [isActive, setIsActive] = useState(false);
  function changeDescription() {
    const newDescription = {
      name: descriptionTask.name,
      id: descriptionTask.id,
      description: textarea,
    };
    setDescriptionTask(newDescription);
    setIsActive(!isActive);
  }

  return (
    <div className="description-conteiner">
      <div className="description-header">
        <h3>{descriptionTask.name}</h3>
        <Link to="/">
          <button className="description-close-btn">
            <div className="description-close-left close"></div>
            <div className="description-close-right close"></div>
          </button>
        </Link>
      </div>
      <p style={{ display: `${isActive ? "none" : "block"}` }}>
        {descriptionTask.description}
      </p>
      <textarea
        className="description-area"
        style={{ display: `${isActive ? "block" : "none"}` }}
        onChange={(e) => setTextarea(e.target.value)}
        value={textarea}
      />
      <button
        className="btn description-btn-change"
        onClick={(e) => changeDescription()}
      >{`${isActive ? "Apply changes" : "Change description"}`}</button>
    </div>
  );
}

export default Description;
