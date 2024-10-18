import styled from 'styled-components'

const Container = styled.div`
    background-color:#eaf0f3 ;
    display: flex;
    padding: 100px 0px;
`
const Box1 = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px 0px;
`
const Box2 = styled.div`
    width: 100%;
`
const Container_Item = styled.div`
    text-align: center;
`
const Num = styled.h1`
    color: #2493DF;
    font-size: 96px;
    margin: 20px 0px;
`
const Box1Img = styled.img`
    border-radius: 100%;
    width: ${({ width }) => width === 'width' ? '80px' : '120px'};
    margin-left: ${({ width }) => width == 'width' ? '100px' : ''};
`
const Box2Img = styled(Box1Img)`
    margin-left: ${({ width }) => width == 'width' ? '100px' : '30px'};

`
const Wrapper = styled.div`
    background-color: white;
    padding: 50px;
    display: flex;
    justify-content:space-around;
`
const Name = styled.h1`
    font-size: 26px;
    color: #2D3846;
`
const P = styled.a`
    color: #2493DF;
`
export {
    Container,
    Box1,
    Box2,
    Container_Item,
    Num,
    Box1Img,
    Box2Img,
    Wrapper,
    Name,
    P,
}