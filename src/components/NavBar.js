import styled from "styled-components";
import theme from "../styles/theme";
const { colors } = theme;

const NavBarContainer = styled.div`
  background-color: ${colors.offwhite};
  height: 100%;
  min-height: 100vh;
  width: 232px;
`;

function NavBar() {
  return <NavBarContainer></NavBarContainer>;
}

export default NavBar;
