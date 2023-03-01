import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormModal from "./components/FormModal";
import {
  StyledMain,
  Wrapper,
  StyledOpenModalButton,
} from "./styles/App.styled";
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleAddToDo = (newTask) => {
    setTasks([...tasks, newTask]);
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
          {showModal && (
            <FormModal
              showModal={showModal}
              AddTask={handleAddToDo}
              hideModal={setShowModal}
            />
          )}
          <StyledOpenModalButton
            onClick={() => {
              setShowModal(true);
            }}
          />
        </Wrapper>
      </StyledMain>
      <Footer />
    </React.Fragment>
  );
};

export default App;
