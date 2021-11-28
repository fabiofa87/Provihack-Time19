import * as React from "react";

import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Body />
      <Footer />
    </AppContainer>
  );
}

export default App;
