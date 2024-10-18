import styled from "styled-components";
const Container = styled.div`
    background-color: #18171D;
    padding-bottom: 20px;
    `
const ContainerItem = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 30px;
    padding: 64px 60px;
`
const Title = styled.p`
    color: white;
    font-weight: 600;
`
const Subtext = styled.p`
    color: #BAC5D5;
    font-size: 20px;
    margin-top: 20px;
    cursor: pointer;
`
const Select = styled.select`
    width: 140px;
    padding: 5px 10px;
`
const BottomBox = styled.div`
    padding: 30px;
    background-color: #201d2a;
    border-top: 0.5px solid #3a305b;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    gap: 30px;
`
const IconConatoner = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const IconItem = styled.div`
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid white;
    border-radius: 5px;
    padding: 3px 5px;
    background-color: black;
    width: 140px;
`
const P1 = styled.p`
    font-size: 8px;
`
const P2 =styled.p`
    font-size: 14px;
    
`

const A = styled.a`
    color: white;
    font-weight: bold;
    display: block;
`
const Card = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
`
const Img = styled.img`
    width: 30px;
`
const Bottomtitle = styled.p`
    font-weight: bold;
    color: #5A6776;
`
const Text = styled(Bottomtitle)`
    font-weight: 400;
`
const FooterBotBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 30px 20px 20px;
`
const FootBoxItem = styled.div`
    display: flex;
    gap: 10px;
`

export {
    FootBoxItem,
    Container,
    ContainerItem,
    Title,
    Subtext,
    Select,
    BottomBox,
    A,
    Card,
    Img,
    Bottomtitle,
    FooterBotBox,
    Text,
    IconItem,
    IconConatoner,
    P1,
    P2,
}