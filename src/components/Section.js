import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
function Section({title, description, leftBtnText, rightBtnText,backgroundImg, downArrow}) {
    return (
        <Wrap bgImage = {backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText &&
                        <RightButton>
                    {rightBtnText}
                    </RightButton> }
                </ButtonGroup>
            </Fade>
            <DownArrow src={downArrow}/>
            </Buttons>  
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
  
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    font-size: 1.2rem;
`

const Buttons = styled.div`

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    
    @media (max-width:768px){
        flex-direction: column;
    }
    
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    color: #ffff;
    height: 40px;
    width: 256px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 0.9em;
    margin-right: 15px;
    margin-left: 30px;
    cursor: pointer;
    
`

//ref to Left button (inherit css)
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.85;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`