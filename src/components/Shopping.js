import { ShopSharp } from "@mui/icons-material"
import styled from "styled-components"
const ShopContainer=styled.div``
ImageContainer=styled.div``
ShopInfo=styled.div``
ShopText=styled.p``
ShopDesc=styled.p``
ShopPrice=styled.p``


const Shopping=()=>{
    return(
        <ShopContainer>
            shop.map=((shops, index)
            return{
                <>
                <ImageContainer>
                    <img src={shops.image}/>
                </ImageContainer>
                <ShopInfo>
                <ShopText>{shops.name}</ShopText>
                <ShopDesc>{shops.description}</ShopDesc>
                <ShopPrice>{shops.Price}</ShopPrice>
                </ShopInfo>
                </>
            
            })

    
            <Shopimg></Shopimg>
            <ShopHead></ShopHead>
            <ShopPara></ShopPara>
        
        </ShopContainer>
    )
}
export default Shopping