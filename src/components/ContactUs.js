import styled from "styled-components"
const ContactContainer=styled.div`
`
const Container=styled.div`
margin:0 auto;
width:80%;
display:flex;
flex-direction:column;
gap:2em;`
// const ContactInput=styled.div``
const nameInput=styled.div``
const emailInput=styled.input``
// const ContactArea=styled.textarea``
const button=styled.button``



const ContactUs=()=>{
    return(
        <ContactContainer>
            <Container>
                <nameInput>                
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                </nameInput>
                <emailInput>

                <input type="email" placeholder="Email Address"/>
                <input type="text" placeholder="Phone Number"/>
                </emailInput>
                <textarea placeholder="What can we do for you?"></textarea>
                <button>Submit</button>
                
               
            </Container>
        </ContactContainer>
    )
}
export default ContactUs