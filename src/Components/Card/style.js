import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #eaf0f3;
  width: 100%;
`;
const WrapperBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding-top: 50px;
  margin: 0px 50px 30px;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 8px 32px 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  width: 110%;
`;
const Title = styled.div`
  color: #2d3846;
  font-size: 40px;
  margin-top: 15px;
  font-weight: bold;
`;
const Text = styled.p`
  color: #6b7f99;
  font-size: 20px;
  margin-top: 15px;
  line-height: 30px;
`;
const Btn = styled.button`
  width: 223px;
  height: 48px;
  color: white;
  color: white;
  background-color: #2493df;
  font-size: 18px;
  font-weight: bold;
  border: none;
  margin-top: 25px;
  border-radius: 5px;
  &:hover{
    background-color: #58b5f3;
  } 
`;
const Wrappdesc = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const WrapperChild = styled.div`
  gap: 30px;
  margin: 20px 50px;
  display: flex;
  padding-bottom: 50px;
`;
const WrapItem = styled.div`
  /* display: flex; */
  /* justify-content : space-between; */
`;
const Card2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 773px;
  background: white;
  border-radius: 8px;
  padding: 18px 32px 32px;
  align-items: center;
  height: 100%;
`;
const Card3 = styled.div`
  background-color: white;
  border-radius: 8px;
`;
const Card2Desc = styled.p`
 
  font-size: 20px;
  margin-top: 15px;
  line-height: 30px;
`;
const ImgConteiner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
const ImgConteinerItem1 = styled.img`
  width: 136px;
  height: 136px;
`;
const ImgConteinerItem2 = styled.img`
  width: 100%;
`;
const ImgConteinerItem3 = styled.img`
  width: 100%;
`;
const Btn2 = styled.button`
  width: 223px;
  height: 48px;
  color: white;
  color: white;
  background-color: #40BF9C;
  font-size: 18px;
  font-weight: bold;
  border: none;
  margin-top: 25px;
  border-radius: 5px;
  &:hover{
    background-color: #4febbe;
  } 
`
// =======================================================
// =======================================================
export {
  Btn2,
  Card2Desc,
  ImgConteinerItem1,
  ImgConteinerItem2,
  ImgConteinerItem3,
  ImgConteiner,
  Card3,
  WrapItem,
  Wrapper,
  WrapperBox,
  Card,
  Image,
  Btn,
  Title,
  Text,
  Wrappdesc,
  WrapperChild,
  Card2,
};
