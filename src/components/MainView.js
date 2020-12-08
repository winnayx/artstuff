import User from "./User";
import styled from "styled-components";
import theme from "../styles/theme";
const { colors } = theme;

const MainViewContainer = styled.div`
  height: 100%;
  width: 100%;
  float: left;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const OverviewSection = styled.div`
  margin-top: 40px;
  display: flex;
  min-height: 230px;
  padding: 0 16px;
  background: ${colors.gray};
`;

const RecentlyViewed = styled(OverviewSection)`
  background: green;
`;

function MainView() {
  return (
    <MainViewContainer>
      <User />
      <OverviewSection>
        <h1>Public viewlists</h1>
      </OverviewSection>
      <OverviewSection>
        <h1>Recently viewed artists</h1>
      </OverviewSection>
      <OverviewSection>
        <h1>Followers</h1>
      </OverviewSection>
      <OverviewSection>
        <h1>Following</h1>
      </OverviewSection>
    </MainViewContainer>
  );
}

export default MainView;
