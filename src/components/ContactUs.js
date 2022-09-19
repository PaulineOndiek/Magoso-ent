import styled from "styled-components"
const ContactContainer=styled.div``
const Container=styled.div`
margin:0 auto;
width:80%;`
const ContactInput=styled.div``
const ContactArea=styled.textarea``


const ContactUs=()=>{
    return(
        <ContactContainer>
            <Container>
                <ContactInput>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="email" placeholder="Email Address"/>
                <input type="text" placeholder="Phone Number"/>
                <ContactArea><textarea></textarea></ContactArea>
                </ContactInput>
            </Container>
        </ContactContainer>
    )
}
export default ContactUs