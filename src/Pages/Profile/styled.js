import styled from "styled-components";

const ProfileWrapper = styled.div`
  padding: 40px 20px;
  text-align: center;
  max-width: 100vw;
  max-height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 10px;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    border-radius: 0;
  }
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;

  text-transform: capitalize;
`;

const Info = styled.p`
  font-size: 16px;
  margin: 5px 0;
  opacity: 0.8;
`;

const StreakSection = styled.div`
  color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1b2a3a;

  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
`;

const StreakItem = styled.div`
  text-align: center;

  span {
    display: block;
    font-size: 14px;
    opacity: 0.7;
  }

  .streak-value {
    font-size: 18px;
    font-weight: bold;
  }
`;

const Button = styled.button`
  background-color: #f39c12;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e67e22;
  }
`;

export {
  ProfileWrapper,
  Avatar,
  Name,
  Info,
  StreakSection,
  StreakItem,
  Button,
};
