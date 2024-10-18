import styled from "styled-components";
const Container = styled.div`
    background: #1E1F28;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
const FormContainer = styled.div`
    margin: 0 50px;
    width: 484px;
    padding:0px 32px;
    `
const FormCont = styled.form`
    background: #F2F5F7;
    padding: 32px;
    border-radius: 8px;
`
const H1 = styled.div`
    color: white;
    font-size: 32px;
    font-weight: bold;
`
const Title = styled.h2`
    font-size: 26px;
    font-weight: bold;
    color: #2D2846;
    text-align: center;
`
const Span = styled.span`
    font-size: 20px;
    color: #2D3846;
`
const Input = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
`
const Btn = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    background-color: #5e5ef9;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    margin-top: 20px;
    &:hover{
        background: #7777ff;
    }
`
const Subtext = styled.div`
    color: #6B7F99;
    margin-top: 20px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 1px;
`
const A = styled.a`
    color: #2493DF;
    cursor: pointer;
`
const Hrbox = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
`
const Hr1 = styled.div`
    width: 100%;
    height: .5px;
    background-color: #747474;
`
const Subtext2 = styled.p`
    color: #666666;
    margin-top: 20px;
    text-align: center;
`
const SubCard = styled.div`
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2,1fr );
    gap: 15px;
`
const Subcard1 = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    border: 0.5px solid black;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
`
const Img = styled.img`
    width: 25px;
`
export {
    Container,
    FormContainer,
    FormCont,
    H1,
    Title,
    Input,
    Span,
    Btn,
    Subtext,
    Subtext2,
    A,
    Hr1,
    Hrbox,
    SubCard,
    Subcard1,
    Img,
}