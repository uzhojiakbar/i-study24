import { RiCloseFill } from "react-icons/ri";
import styled from "styled-components";

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  min-height: 80px;

  height: fit-content;
`;

const NavbarContainer = styled.nav`
  color: white;
  width: 100%;
  position: relative;

  margin: 0 auto;
  max-width: 1920px;
  width: 100vw;
`;

const Logo = styled.div`
  font-size: 24px;
  cursor: pointer;
  padding: 10px 15px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
`;

const NavLink = styled.div`
  color: white;
  text-decoration: none;
  user-select: none;
  font-size: 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  .back {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .main {
    position: relative;
    top: 80px;
    left: 0; /* Markazlash uchun */
    transform: translateX(25%);

    width: 70vw;
    min-height: 80vh;
    max-height: 80vh;

    background-color: white;
    border-radius: 20px;
    z-index: 10; /* Menu boshqa elementlar ustida ko'rinishi uchun */
  }
`;

const CloseIcon = styled(RiCloseFill)`
  color: black;

  position: absolute;

  right: 10px;
  top: 10px;

  cursor: pointer;

  width: 40px;
  height: 40px;

  transition: 0;

  &:hover {
    transition: 0.1 ease-in;
    color: red;
  }
`;

const ProfileBar = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: rgba(201, 193, 193, 0.2);
  border-radius: 50%;

  &:hover {
    background-color: rgba(201, 193, 193, 0.4);
  }

  &:active {
    background-color: rgba(201, 193, 193, 0.1);
  }

  > img {
    width: 80%;
    height: 80%;
  }
  > b {
    font-size: 20px;
  }
`;

const GoToProfileButton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  > .name {
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 900;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  > .name-desc {
    text-transform: capitalize;
    color: gray;
  }
`;

const ProfileBarButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 5px;

  color: ${({ logout }) => (logout === "true" ? "red" : "black")};
`;

export {
  NavWrapper,
  CloseIcon,
  NavbarContainer,
  NavLink,
  NavLinks,
  Logo,
  Menu,
  ProfileBar,
  GoToProfileButton,
  ProfileBarButton,
};
