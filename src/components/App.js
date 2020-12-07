import Homepage from "./Homepage";
import Left from "./Left";
import Right from "./Right";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  const AppContainer = styled.div`
    height: 100%;
    min-height: 100vh;
  `;

  return (
    <AppContainer fluid className="fill">
      <GlobalStyle />
      {/* Should I use bootstrap layout here or use styled-components */}
      {/* <Row>
        <Col>
          <Left />
        </Col>
        <Col>
          <Homepage />
        </Col>
        <Col>
          <Right />
        </Col>
      </Row> */}
    </AppContainer>
  );
}

export default App;
