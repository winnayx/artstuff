import styled from "styled-components";
import theme from "../styles/theme";
import profile from "../assets/profilepic.JPG";

const { colors, fontSizes } = theme;

function User() {
  const UserContainer = styled.div`
    display: flex;
    align-items: center;
    max-height: 500px;
    min-height: 340px;
    height: 30vh;
    padding: 0 32px 24px;
    overflow: hidden;
    color: ${colors.white};
    background: ${colors.offOrange};
  `;

  const UserAvatar = styled.div`
    width: 192px;
    height: 192px;
    min-width: 192px;
    margin-right: 24px;
    img {
      border-radius: 100%;
    }
  `;
  const UserInfo = styled.div``;

  const Username = styled.h1`
    color: ${colors.pink};
    &:hover,
    &:focus {
      color: ${colors.offPink};
    }
    font-size: ${fontSizes.xxxl};
  `;

  const Stats = styled.h4`
    color: ${colors.pink};
    &:hover,
    &:focus {
      color: ${colors.offPink};
    }
  `;

  return (
    <UserContainer>
      <UserAvatar>
        <img src={profile} alt="avatar" />
      </UserAvatar>
      <UserInfo>
        <Stats>PROFILE</Stats>
        <Username>Winnie</Username>
        <Stats>237 Public Viewlists • 96 Followers • 36 Following</Stats>
      </UserInfo>
    </UserContainer>
  );
}

export default User;
