import styled from "styled-components"
const Container = styled.div`
    background-color: #2D3846;
    padding: 50px;

`
const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 80px;
    color: white;
    font-weight: bold;
    justify-content: center;
`
const TitleIcon = styled.div`
    background: #FBB461;
    padding: 5px 25px;
    font-size: 30px;
    color: #814806;
    border-radius: 50px;
`
const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
    margin-top: 30px;
    margin: 50px 50px;
    `
const CardItem = styled.div`
    border: 2px solid #4a5c72;
    padding: 30px 20px;
    border-radius: 10px;

`
const H1 = styled.h1`
    font-size: 32px;
    color: white;

`
const CardNum = styled.h1`
    font-size: 70px;
    color:#FBB461 ;
    margin-top: 20px;
`
const Carddesc = styled.p`
    color: #C8D2DB;
    font-size: 19px;
    margin-top: 20px;
    line-height: 30px;
`
const H2 = styled.h2`
    color: #FBB461;
    display: flex;
    align-items: center;
    gap: 10px;
`
const Subtext = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;

`
const Subtext2 = styled.div`
    display: flex;
    justify-content: center;
    /* margin: 0 100px; */
    gap: 20px;
    margin-top: 30px;
`
const Btn = styled.button`
    background-color: #FFA310; 
    color: black;
    font-weight: bold;
    margin-top: 50px;
    width: 500px;
    height: 60px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
`
const Box = styled.div`
    display: flex;
    justify-content: center;
`
const Spann = styled.span`
    font-weight: bold;
`
export {
    Spann,
    Box,
    Btn,
    Container,
    Subtext,
    Subtext2,
    Title,
    TitleIcon,
    Card,
    H1,
    CardNum,
    CardItem,
    Carddesc,
    H2,
}