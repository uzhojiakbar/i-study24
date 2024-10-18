import styled from "styled-components";

const HeroContainer = styled.section`
  text-align: center;
  background-color: var(--header-backdound);
  color: white;
  min-height: 600px;
  height: fit-content;
  padding: 150px 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: ${({ outline }) =>
    outline === "y" ? "transparent" : "var(--btn-bg)"};
  border: 1px solid
    ${({ outline }) => (outline === "y" ? "var(--btn-bg)" : "transparent")};
  color: ${({ outline }) => (outline === "y" ? "var(--btn-bg)" : "white")};
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: ${({ outline }) => (outline === "y" ? "white" : "white")};
    /* background-color: var(--btn-hover-bg); */
    background-color: ${({ outline }) =>
      outline === "y" ? "var(--btn-bg)" : "transparent"};
    border: 1px solid
      ${({ outline }) => (outline === "y" ? "transparent" : "var(--btn-bg)")};
    color: ${({ outline }) => (outline === "y" ? "white" : "var(--btn-bg)")};
  }
`;

export { Button, HeroContainer, Title, Subtitle };
