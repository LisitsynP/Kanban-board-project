import { React } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import BackLogTabel from "./BackLogTabel/BackLogTabel";
import ReadyTable from "./ReadyTabel/ReadyTable";
import InProgress from "./InProgress/InProgress";
import Finished from "./Finished/Finished";

function TaskBoard({ backLogList, setDescriptionTask, setAmountFinished, setAmountActive,descriptionTask }) {
  const [backLogTask, setBackLogTask] = useLocalStorage(backLogList,"backLogList");
  const [readyTasks, setReadyTasks] = useLocalStorage([], "readyTasks");
  const [inProgressTasks, setInProgressTasks] = useLocalStorage([],"inProgressTasks");
  const [finishedTasks, setFinishedTasks] = useLocalStorage([],"finishedTasks");
  const optionBtn = {
    textDecoration: "line-through",
    cursor: "default",
  };
  setAmountActive(backLogTask.length)
  setAmountFinished(finishedTasks.length)
  return (
    <>
      <div className="main-container">
        <BackLogTabel
          backLogState={[backLogTask, setBackLogTask]}
          setDescriptionTask={setDescriptionTask}
          descriptionTask={descriptionTask}
          setAmountActive={setAmountActive}
        />

        <ReadyTable
          setDescriptionTask={setDescriptionTask}
          descriptionTask={descriptionTask}
          readyState={[readyTasks, setReadyTasks]}
          backLogState={[backLogTask, setBackLogTask]}
          optionBtn={optionBtn}
        />
        <InProgress
          readyState={[readyTasks, setReadyTasks]}
          inProgressState={[inProgressTasks, setInProgressTasks]}
          setDescriptionTask={setDescriptionTask}
          descriptionTask={descriptionTask}
          optionBtn={optionBtn}
        />
        <Finished
          finishedState={[finishedTasks, setFinishedTasks]}
          inProgressState={[inProgressTasks, setInProgressTasks]}
          setDescriptionTask={setDescriptionTask}
          descriptionTask={descriptionTask}
          optionBtn={optionBtn}
        />
      </div>
    </>
  );
}

export default TaskBoard;
