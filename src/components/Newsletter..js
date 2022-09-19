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
const Inputs=styled.div``
const Input=styled.input`
border-radius:5px;
padding:1em;
box-shadow:2px 2px 2px solid grey;`
const Button=styled.button`
margin-left:2em;
padding:.4em 1em;`


const Newsletter=()=>{
    return(
        <Container>
        <NewslettersHead>Subscribe to our Newsletter</NewslettersHead>
        <NewslettersPara>Subscribe to our Newsletter for updates on latest promotions and offers</NewslettersPara>
        <Inputs>
        <Input type="text" placeholder="Email Address" required/>
        <Button>
            <SendIcon/>
        </Button>
        </Inputs>

        </Container>
    )
}
export default Newsletter