import styled from "styled-components";

const CoruselBox = styled.div`
  margin: 0 30px;
  height: 1px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 35px;

  background-color: transparent;
  color: #e5e5e5;
  width: fit-content;
  margin: 0 auto;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const Coruselwrap = styled.div`
  width: 100px;
  padding: 10px;
  overflow: hidden;
  overflow: auto;
`;
const CoruselCard = styled.div`
  background: #eaf0f3;
  padding: 24px 8px 16px;
  border-radius: 8px;
  width: 99%;
  height: 184px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  margin-top: 20px;
`;
const ImagWidth = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100%;
`;
const Cardtext = styled.h2`
  font-size: 20px;
  color: #2d3846;
`;
const Wrapper = styled.div`
  background-color: transparent;
  padding: 20px 0px 100px 0px;

  position: relative;
  top: -200px;
`;
export {
  CoruselBox,
  Title,
  CoruselCard,
  Coruselwrap,
  ImagWidth,
  Cardtext,
  Wrapper,
};
