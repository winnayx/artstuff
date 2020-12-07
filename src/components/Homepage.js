import styled from "styled-components";
import theme from "../styles/theme";

const HomepageContainer = styled.div`
  padding: 10px;
`;

function Homepage() {
  return (
    <HomepageContainer>
      <h1>Hello cheeky</h1>
    </HomepageContainer>
  );
}

export default Homepage;
