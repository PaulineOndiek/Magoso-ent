// import { ShopSharp } from "@mui/icons-material"
import styled from "styled-components"
// import {shop} from "../data"
const ShopContainer=styled.div`
margin:0 auto;
width:80%;
`
const Container=styled.div`
display:flex;

`
const ImageContainer=styled.div`
width:50%;`
const ShopInfo=styled.div`
// margin-left:3em;
width:50%;`
const ShopText=styled.p``
const ShopDesc=styled.div``
const ShopPrice=styled.p``
const SelectOption=styled.select``
const SelectedPara=styled.p``




const Shopping=()=>{
    return(
           <ShopContainer>
            <Container>
                <ImageContainer>
                <img src="https://images.pexels.com/photos/6192554/pexels-photo-6192554.jpeg?cs=srgb&dl=pexels-rodnae-productions-6192554.jpg&fm=jpg" alt="a dress" width="70%"/>
                </ImageContainer>
                <ShopInfo>
                <ShopText>Dress</ShopText>
                <ShopDesc>Image of an African Designed Dress</ShopDesc>
                <ShopPrice>Kshs. 2,500</ShopPrice>
                <SelectOption>
                 
                   
    <option value="" selected>Size </option>
    <option value="">Small</option>
    <option value="Medium">Medium</option>
    <option value="large">Large</option>
    <option value="Extra Large">Extra Large</option>
     </SelectOption>
     <SelectedPara>Selected Color</SelectedPara>
     <label>Color</label><input type="color" Placeholder/>
              
                </ShopInfo>
                </Container>
            
            
        </ShopContainer>
    )
}
export default Shopping