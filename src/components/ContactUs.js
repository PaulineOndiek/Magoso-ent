import styled from "styled-components"
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactContainer=styled.div`
margin:0 auto;
width:80%;
`
const Container=styled.div`
display:flex;
flex-direction:column;
gap:2em;
width:60%;
`


const Button=styled.button`
background:green;
color:orange;
border:none;
padding:1em 2em;
border-radius:5px;
`
const Input=styled.input`
padding:1em 6em;
border-radius:5px;
`
const ContactHead=styled.h2``
const ContactPara=styled.p``
const ContactEmail=styled.div`
display:flex;
align-items:center;`
const ContactPhone=styled.div`display:flex;
align-items:center;
`
const ContactAddress=styled.div`
display:flex;
align-items:center;`
const ContactForm=styled.div`
display:flex;
flex-direction:column;
gap:2em;
box-shadow:0 0 3em grey;
border-radius:5px;
padding:1em;`
const ContactDetail=styled.div``



const ContactUs=()=>{
    return(
        <ContactContainer>
            <Container>
                <ContactForm>
                  <div  style={{display:"flex",gap:"3em"}}>             
                <Input type="text" placeholder="First Name"/>
                <Input type="text" placeholder="Last Name"/>
                </div>
                <div style={{display:"flex",gap:"3em"}}>
                <Input type="email" placeholder="Email Address"/>
                <Input type="text" placeholder="Phone Number"/>
                </div>
                <textarea placeholder="What can we do for you?"></textarea>
                <Button>Submit</Button>
                </ContactForm>

                <ContactDetail>
                <ContactHead>Contact Info:</ContactHead>
                <ContactAddress>
                <LocationOnIcon/>
                <ContactPara>Address: Located Off Hospital Road upperhill</ContactPara>
                </ContactAddress>
                
                              

                <ContactPhone>
                <LocalPhoneIcon/>
                <ContactPara>Mobile:+254 721346578</ContactPara>
                </ContactPhone>
                <ContactEmail>
                <LocalPostOfficeIcon/>
                <ContactPara> Email Address: info@magoso.ent</ContactPara>
               
                </ContactEmail>
                
                </ContactDetail>


               
            </Container>
        </ContactContainer>
    )
}
export default ContactUs