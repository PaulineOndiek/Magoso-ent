import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';
const Container=styled.div`
text-align:center;
width:80%;
margin:0 auto;`
const NewslettersHead=styled.h3`
font-size:2rem;
`
const NewslettersPara=styled.p``
const Inputs=styled.div`
display:flex;
align-items:center;
justify-content:center;`
const Input=styled.input`
border-radius:5px;
padding:1em;
background:green;
color:orange;
border:none;
`
const Button=styled.button`
margin-left:1em;
padding:.4em 1em;
background:orange;
border:none;
border-radius:3px;`


const Newsletter=()=>{
    return(
        <Container>
        <NewslettersHead>Subscribe to our Newsletter</NewslettersHead>
        <NewslettersPara>Subscribe to our Newsletter for updates on latest promotions and offers</NewslettersPara>
        <Inputs>
        <Input type="text" value="Email Address" required/>
        <Button>
            <SendIcon/>
        </Button>
        </Inputs>

        </Container>
    )
}
export default Newsletter