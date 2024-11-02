import React from "react";
import styled from "styled-components";
import {
  CardContainer,
  CourseStatus,
  CourseTitle,
  IconWrapper,
} from "./styled";

const CourseCard = ({ title, status, icon }) => {
  return (
    <CardContainer>
      <IconWrapper>
        <img src={icon} alt="Course Icon" />
      </IconWrapper>
      <CourseTitle>{title}</CourseTitle>
      <CourseStatus>{status}</CourseStatus>
    </CardContainer>
  );
};

export default CourseCard;
