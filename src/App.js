import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormModal from "./components/FormModal";
import ToDoContainer from "./components/ToDoContainer";
import { StyledMain, Wrapper, StyledTaskGroup } from "./styles/App.styled";
const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddToDo = (newTask) => {
    setTasks([...tasks, newTask]);
    console.log(tasks);
  };

  const handleTaskUpdate = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <React.Fragment>
      <Header />
      <StyledMain>
        <Wrapper>
          <StyledTaskGroup>
            <ToDoContainer
              title={"To Do"}
              tasksList={tasks.filter((task) => task.isCompleted !== true)}
              handleTaskStatusChange={handleTaskUpdate}
            />
            <ToDoContainer
              title={"Completed"}
              tasksList={tasks.filter((task) => task.isCompleted === true)}
              handleTaskStatusChange={handleTaskUpdate}
            />
          </StyledTaskGroup>
          <FormModal AddTask={handleAddToDo} />
        </Wrapper>
      </StyledMain>
      <Footer />
    </React.Fragment>
  );
};

export default App;
