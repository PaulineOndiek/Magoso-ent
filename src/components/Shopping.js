// import { ShopSharp } from "@mui/icons-material"
import styled from "styled-components"
import {shop} from "../data"
const ShopContainer=styled.div``
const ImageContainer=styled.div``
const ShopInfo=styled.div``
const ShopText=styled.p``
const ShopDesc=styled.div``
const ShopPrice=styled.p``


const Shopping=()=>{
    return(
        <ShopContainer>
            {shop.map=((shops,index)=>{
            return(
                <>
                <ImageContainer>
                    <img src={shops.image} alt="a dress"/>
                </ImageContainer>
                <ShopInfo>
                <ShopText>{shops.name}</ShopText>
                <ShopDesc>{shops.description}</ShopDesc>
                <ShopPrice>{shops.Price}</ShopPrice>
                </ShopInfo>
                </>
            
            )})}
            
        </ShopContainer>
    )
}
export default Shopping