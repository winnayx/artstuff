import Homepage from "./Homepage";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

function App() {
  const AppContainer = styled.div`
    height: 100%;
    min-height: 100vh;
  `;

  return (
    <AppContainer>
      <GlobalStyle />
      <Homepage />
    </AppContainer>
  );
}

export default App;
