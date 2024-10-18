import styled from 'styled-components'
const Container = styled.div`
    background-color:#eaf0f3 ;
    padding: 100px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`
const Title = styled.h1`
    font-size: 64px;
    color: #2D3846;
    display: flex;
    align-items: center;
    gap: 16px;
`
const Span = styled.div`
    font-family: monospace;
    font-weight: 500;
    color: #2493DF;
    background-color:#c0e3f6;
    padding: 0px 5px;
    border-radius: 8px;
    display: flex;
    align-items: center;
`
const Card = styled.div`
    background-color: white;
    padding: 20px;
    padding-top: 100px;
    text-align: center;
    position: relative  ;

`
const Btn = styled.button`
  width: 350px;
  height: 48px;
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
const CardWrapp = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 50px;
    width: 100%;
    padding: 0 100px;
    margin-top: 110px;
`
const Img = styled.img`
    width: 100%;
    position: absolute;
    top: -35%;
    left: 50%;
    transform: translateX(-50%);
`
const H1 = styled.h1`
      color: #2d3846;
  font-size: 40px;
  margin-top: 15px;
  font-weight: bold;
`
export {
    Container,
    Title,
    Span,
    Card,
    Btn,
    CardWrapp,
    Img,
    H1
}