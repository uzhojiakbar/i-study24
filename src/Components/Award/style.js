import styled from "styled-components";
const Container = styled.div`
    background-color: #F2F3F7;
    padding: 80px 32px;
`
const ContainerItem = styled.div`
    margin-top:70px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 35px;
    padding:  0 50px;
`
const Card = styled.div`
    padding: 20px;
    text-align: center;
`
const H2 = styled.h2`
    color: #6B7F99;
`
const P = styled.p`
    color:#6B7F99 ;
    font-size: 12px;
    margin-top: 10px;
`

export {
    Container,
    ContainerItem,
    Card,
    H2,
    P,
}