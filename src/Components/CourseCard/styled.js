import styled from "styled-components";

export const CardContainer = styled.div`
  width: 220px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 12px;
  background-color: #ffe5b4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
`;

export const CourseTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 10px 0;
  font-weight: 600;
`;

export const CourseStatus = styled.p`
  font-size: 14px;
  color: #f0a500;
  margin-top: 5px;
  font-weight: 500;
`;
