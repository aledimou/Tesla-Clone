import React from 'react'
import styled from 'styled-components'
import Section from "./Section"

const Home = () => {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="images/model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                downArrow="images/down-arrow.svg"    
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="images/model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"              
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="images/model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"              
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="images/model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"              
            />
            <Section 
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="images/solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"              
            />
            <Section 
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof!"
                backgroundImg="images/solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"              
            />
            <Section 
                title="Accessories"
                description=""
                backgroundImg="images/accessories.jpg"
                leftBtnText="Shop Now"
                rightBtnText=""              
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`