import styled from "styled-components"
import {useState} from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const LoggedinContainer=styled.div`
margin:0 auto;
width:80%;
display:flex;
justify-content:space-between;`
const Login=styled.div``
const Loggedinputs=styled.div`
display:flex;
`
const LoggedImage=styled.div`
background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url("https://images.pexels.com/photos/5709659/pexels-photo-5709659.jpeg?cs=srgb&dl=pexels-sam-lion-5709659.jpg&fm=jpg");
height:100vh;
width:50vw;
 background-repeat: no-repeat;
 background-position: center center;
 background-size: cover;
//  background-attachment: fixed;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:orange;
font-size:1.5rem;

`
const Input=styled.input`
padding:1em;
width:100%;
margin-bottom:1em;
border:none;
border-bottom:3px solid lightgrey;
outline:none;
&:focus{
    border-bottom-color:green;
}
`
const Button=styled.button`
padding:.8em 13em;
background:green;
color:yellow;
border:none;

`
const Checkboxbutton=styled.button`
padding:1em 2em;
background:green;
color:white;
border:none;
border-radius:5px;`


const LoggedinHead=styled.h1`
text-align:center;

`
const LoggedinPara=styled.p`
text-align:center;
`

const Checkbox=styled.div`
display:flex;
text-align
`
const CheckboxPara=styled.div``
const CheckboxInput=styled.input``
const Paragraph=styled.div``
const Inputs=styled.div`
display:flex;
justify-content:space-between;
`
const CreateAccount=styled.div`
display:flex;
justify-content:space-between;`
const Icons=styled.div`
cursor:pointer;`

const Copyright=styled.div``



const Loggedin=()=>{
    const[show,setShow]=useState(false)
    return(
     
        
        <LoggedinContainer>
            <Login>
        <LoggedinHead>Magoso Enterprises</LoggedinHead>
        <LoggedinPara>LOGIN</LoggedinPara>
        <Loggedinputs>
            <Input type="email" placeholder="E-mail" required/>
            </Loggedinputs>
            <Loggedinputs>
            <Input type={show?"text":"password"}placeholder="Passsword" required/>
            <Icons onClick={()=>setShow(prev=>!prev)}>
            </Icons>
            
            </Loggedinputs>
            <Button>Login</Button>
            <Inputs>
            <Checkbox>
            <CheckboxInput type="checkbox"/>
            <CheckboxPara>Remember me</CheckboxPara>
            </Checkbox>
            <Paragraph>
            <LoggedinPara>Forgot your password?</LoggedinPara>
            </Paragraph>
            </Inputs>
            <CreateAccount>
            <CheckboxPara>New to Magoso Enterprises?</CheckboxPara>
            <Checkboxbutton>Create Account </Checkboxbutton>
            </CreateAccount>
            <Copyright>Magoso Enterprises &copy; 2022</Copyright>
        </Login>
        <LoggedImage>
        
        <LoggedinHead>WELCOME TO </LoggedinHead>
        <LoggedinPara>Magoso Enterprises</LoggedinPara>
        <LoggedinPara>The home of Reliable Shopping </LoggedinPara>
         </LoggedImage>
         
         
</LoggedinContainer>

    )
}
export default Loggedin