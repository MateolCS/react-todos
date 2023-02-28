import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StyledMain, Wrapper } from "./styles/App.styled";
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <StyledMain>
        <Wrapper>
          <h1>React Styled Components</h1>
        </Wrapper>
      </StyledMain>
      <Footer />
    </React.Fragment>
  );
};

export default App;
