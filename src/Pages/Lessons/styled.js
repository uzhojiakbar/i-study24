import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../Utils/media";

export const MyCourse = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 30px;
`;

MyCourse.Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

MyCourse.Courses = styled.h1`
  width: 900px;
  margin: 0 auto;
  padding: 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  ${media.tabletMax} {
    width: 90%;
  }
`;

MyCourse.Card = styled(NavLink)`
  border-radius: 12px;
  padding: 20px;
  width: 200px;
  height: 250px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  }
`;

MyCourse.Icon = styled.div`
  font-size: 50px;
  margin-bottom: 10px;
  min-height: 100px;
`;

MyCourse.Name = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;

  text-transform: capitalize;
`;

MyCourse.Desc = styled.p`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  height: 300px;
  overflow: hidden;
`;
