import styled from "styled-components";
import theme from "../styles/theme";
const { colors } = theme;

const NavBarContainer = styled.div`
  background-color: ${colors.offWhite};
  height: 100%;
  min-height: 100vh;
  min-width: 232px;
  width: 232px;
  overflow: scroll;
`;

function NavBar() {
  return (
    <NavBarContainer>
      <p>
        One advanced diverted domestic sex repeated bringing you old. Possible
        procured her trifling laughter thoughts property she met way. Companions
        shy had solicitude favourable own. Which could saw guest man now heard
        but. Lasted my coming uneasy marked so should. Gravity letters it
        amongst herself dearest an windows by. Wooded ladies she basket season
        age her uneasy saw. Discourse unwilling am no described dejection
        incommode no listening of. Before nature his parish boy. Folly words
        widow one downs few age every seven. If miss part by fact he park just
        shew. Discovered had get considered projection who favourable. Necessary
      </p>
    </NavBarContainer>
  );
}

export default NavBar;
