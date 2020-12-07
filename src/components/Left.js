import styled from "styled-components";
import theme from "../styles/theme";
const { colors } = theme;

const LeftContainer = styled.div`
  background-color: ${colors.offwhite};
`;

function Left() {
  return <LeftContainer></LeftContainer>;
}

export default Left;
