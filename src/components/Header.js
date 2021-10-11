import React,{useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {


    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <a >
                <img src= "images/logo.svg" alt= "Tesla Logo"/>
            </a>
            <Menu>
            <a href ="#">Model S</a>
            <a href ="#">Model Y</a>
            <a href ="#">Model 3</a>
            <a href ="#">Model X</a>
            </Menu>
            <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            {!isOpen && <CustomMenu  onClick={()=>{setIsOpen(true)}}/>}
            </RightMenu>
            <BurgerNav show={isOpen}>
                <CustomCloseContainer>
                <CustomClose onClick={()=>{setIsOpen(false)}}/>
                </CustomCloseContainer>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
display: flex;
aling-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        
    }
`

const CustomMenu = styled(MenuIcon)`
    display:flex;
    cursor: pointer;
`


const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    opacity: 0.7;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display:flex;
    flex-direction:column;
    text-align: start;
    transform: ${props => props.show? "translateX(0)": "translateX(100%)"};
    transition: 500ms;
    li{
        padding: 20px 2px;
        border-bottom: 2px solid rgba(0, 0, 0, .2);

        a{
            font-weight: 700;
        }
    }
   
`

const CustomCloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
    display: flex;
    cursor: pointer;
   
    
    
`