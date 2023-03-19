import {React} from "react";
import { Routes, Route} from "react-router-dom";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import Description from "./Pages/Description";
import Layout from "./components/Layout";
import useLocalStorage from "./hooks/useLocalStorage"

function App() {
  const backLogList = [
    {
      id: 1,
      name: "Login page – performance issues",
      description: "Optimize the logging function",
    },
    {
      id: 2,
      name: "Sprint bugfix",
      description: "Fix all the bugs",
    },
  ];
  const [descriptionTask, setDescriptionTask] = useLocalStorage({}, "descriptionTask")
  const [amountActive, setAmountActive] = useLocalStorage(0, "amountActive")
  const [amountFinished, setAmountFinished] = useLocalStorage(0, "amountFinished")

  return (
    <>
      <Routes>
        <Route path="/" element={
        <Layout amountActive={amountActive}
        amountFinished={amountFinished} />
        }>
          <Route index element={
            <TaskBoard backLogList={backLogList}
              descriptionTask={descriptionTask} 
              setDescriptionTask={setDescriptionTask} 
              setAmountActive={setAmountActive}
              setAmountFinished={setAmountFinished}
              />
          } />
          <Route path="/description/:id" element={
            <Description descriptionTask={descriptionTask} setDescriptionTask={setDescriptionTask}/>
          } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
