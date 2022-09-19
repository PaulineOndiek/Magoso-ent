import styled from "styled-components"
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
const Container=styled.div``
const FooterFirst=styled.div``
const FooterHead=styled.h3``
const FooterPara=styled.p``
const FooterSecond=styled.div``
const FooterUl=styled.ul``
const FooterList=styled.li``
const Footers=()=>{
    return()=>{
        <Container>
            <FooterFirst>
            <FooterHead>Magoso Ent. </FooterHead>
        <FooterPara>The number one E-commerce website in the South of Limpopo</FooterPara>
        </FooterFirst>
        <FooterSecond>
            <FooterHead>For Customers</FooterHead>
            <FooterUl>
                <FooterList>How to order</FooterList>
                <FooterList>Payment Methods</FooterList>
                <FooterList>My Account</FooterList>
                <FooterList>Track Orders</FooterList>
            </FooterUl>
        </FooterSecond>
        <FooterThird>
            <FooterHead>Quick Links</FooterHead>
            <FooterUl>
                <FooterList>Shop</FooterList>
                <FooterList>About Us</FooterList>
                <FooterList>Return Policy </FooterList>
                <FooterList>Terms and Conditions</FooterList>
            </FooterUl>
        </FooterThird>
        </Container>
    }
}
export default Footers