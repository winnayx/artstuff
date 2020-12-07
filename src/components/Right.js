import styled from "styled-components";
import theme from "../styles/theme";
const { colors } = theme;

const RightContainer = styled.div`
  background-color: ${colors.offwhite};
`;
function Right() {
  return <RightContainer></RightContainer>;
}

export default Right;
