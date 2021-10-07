import React from 'react'
import styled from "styled-components"

function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order online for Touchless Delivery</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
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
    background-image: url('/images/model-S.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`


const Buttons = styled.div`

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    
    
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

`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`