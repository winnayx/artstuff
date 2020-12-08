import MainView from "./MainView";
import NavBar from "./NavBar";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  const AppContainer = styled.div`
    height: 100%;
    min-height: 100vh;
    display: flex;
  `;

  return (
    <AppContainer fluid className="fill">
      <GlobalStyle />
      <NavBar />
      <MainView />
    </AppContainer>
  );
}

export default App;
