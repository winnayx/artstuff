import styled from "styled-components";
import theme from "../styles/theme";
const { colors } = theme;

const MainViewContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  max-height: 500px;
  min-height: 340px;
  height: 30vh;
  padding: 0 32px 24px;
  overflow: hidden;
  color: ${colors.white};
`;

const OverviewSection = styled.div`
  margin-top: 40px;
  display: flex;
  height: 30px;
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
      <RecentlyViewed>
        <h1>Recently viewed artists</h1>
      </RecentlyViewed>
    </MainViewContainer>
  );
}

export default MainView;
