

// import { LocalPostOffice } from "@mui/icons-material"
import styled from "styled-components"
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const FooterContainer=styled.div`
background:orange;
margin-top:3em;
`
const Container=styled.div`
margin:0 auto;
width:80%;
display:flex;
align-items:start;
justify-content:space-between;
color:green;

`
const FooterFirst=styled.div``
const FooterSecond=styled.div``
const FooterHead=styled.h3``
const FooterPara=styled.p``
const FooterThird=styled.div``
const FooterFourth=styled.div``
const FooterUl=styled.p``
const FooterList=styled.p`list-style-type:none;`
const FooterCopyright=styled.div``
const Footer=()=>{
    return(
        <FooterContainer>
        <Container>
            <FooterFirst>
            <FooterHead>Magoso Ent. </FooterHead>
        <FooterPara>The number one E-commerce website <br/>in the South of Limpopo</FooterPara>
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
        <FooterFourth>
            <FooterHead>Contact Us</FooterHead>
            <FooterUl>
                <FooterList>
                    <LocationOnIcon/>
                    Located Off Hospital Road,UpperHill </FooterList>
                <FooterList>
                <LocalPhoneIcon/>
                    Mobile:+254 721346578</FooterList>
                <FooterList>
                    <LocalPostOfficeIcon/>
                    Email Address:info@magoso.ent
                </FooterList>
                <FooterList>
                   
                </FooterList>
            </FooterUl>

        </FooterFourth>
        <FooterCopyright>
        

        </FooterCopyright>
        </Container>
    
        </FooterContainer>
    )
}
export default Footer