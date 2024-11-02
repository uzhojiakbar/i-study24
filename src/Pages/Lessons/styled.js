import styled from "styled-components";

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
  display: grid;
  grid-template-columns: repeat(4, 200px);
  gap: 20px;
  justify-content: center;
`;

MyCourse.Card = styled.div`
  border-radius: 12px;

  padding: 20px;
  min-height: 200px;
  cursor: pointer;

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

MyCourse.Icon = styled.div`
  font-size: 50px;
  margin-bottom: 10px;
`;

MyCourse.Name = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

MyCourse.Desc = styled.p`
  font-size: 18px;
  color: #ffcc00;
  font-weight: 500;
`;
