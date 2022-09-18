import styled from "styled-components"
const Container=styled.div``
const ContactInput=styled.div``
const ContactArea=styled.textarea``


const contactUs=()=>{
    return(
        <ContactContainer>
            <Container>
                <ContactInput>
                <input type="text" placeholder="First Name"></input>
                <input type="text" placeholder="Last Name"></input>
                <input type="email" placeholder="Email Address"></input>
                <input type="text" placeholder=""></input>
                <ContactArea><textarea></textarea></ContactArea>
                </ContactInput>
            </Container>
        </ContactContainer>
    )
}
export default ContactUs