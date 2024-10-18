import styled from 'styled-components'

const Container = styled.div`
    background-color: white;
    padding: 128px 0px 72px;
`
const ContainerItem = styled.div`
    width: 60%;
    margin: auto;
`
const Btn = styled.button`
  padding: 0 50px;
  height: 48px;
  color: white;
  color: white; 
  background-color: #2493df;
  font-size: 16px;
  font-weight: bold;
  border: none;
  margin-top: 25px;
  border-radius: 5px;
  &:hover{
    background-color: #58b5f3;
  } 
  `
const H1 = styled.h1`
      color: #2D3846;
      font-size: 64px;
      margin-top: 30px;
      text-align: center;
`
const H3 = styled.h3`
    color: #2493df;
    font-size: 80px;
    font-weight: 400;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
const WrapTitle = styled.div`
    text-align: center;
`
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    `
const ImageContainer = styled.div`
    width: 736px;
    height: 320px;
    border-radius: 15px;
    position: relative;
`
const ImgSmall = styled.div`
    width: 211px ;
    height: 61px;
    padding: 16px;
    position: absolute;
    background-color: white;
    display: flex;
    gap: 10px;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 0 10px silver;
    top: 30%;
    right: -15%;
`
const Image1 = styled.img`
    width: 40px;
    height: 40px;
`
const P = styled.p`
    padding: 0 0 0 8px;
    color: #2D3846;
    font-weight: bold;
`
const ImgSmall1 = styled(ImgSmall)`
    left: -20%;
    top: 60%;
`
const Apos = styled(ImgSmall)`
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-family: mono;
    color: #2493df;
    padding: 0;
    top: -15%;
    left: 70%;

`
export {
    Container,
    ContainerItem,
    Btn,
    H3,
    H1,
    WrapTitle,
    BtnWrap,
    Image,
    ImageContainer,
    ImgSmall,
    ImgSmall1,
    Image1,
    P,
    Apos,
}