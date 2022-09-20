import { bestSellers } from "../data"
import styled from "styled-components"

const BestSellerItem=styled.div`

cursor:pointer;
width:25%;

`
const BestSellerAmount=styled.div``
const ImageContainer=styled.div`
width:100%;
height:400px;

`
const SellerHeading=styled.h3`
text-align:center;
font-size:2rem;`
const BestSellerName=styled.div`
`
const BestSellerText=styled.h3``
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
`
const BestSellerContainer=styled.div`
display:flex;
height:fit-content;
justify-content:center;
gap:2em;
`
const CartButton=styled.button`
background:green;
padding:.5em;
border-radius:5px;
border:none;
color:white;
`
const Button=styled.button`
background:orange;
margin-right:2em;
padding:.5em;
border-radius:5px;
border:none;
margin-left:1em;
color:green;
`


const BestSellerItems = () => {
    return (
      <>
      <SellerHeading>Best Sellers</SellerHeading>
  
      <BestSellerContainer>
        {bestSellers.slice(0,3).map((seller, index) => {
          return (
             
              <BestSellerItem>
                <ImageContainer>
                  <Image src={seller.image} />
                </ImageContainer>
                <BestSellerName>
                <BestSellerText>{seller.name} </BestSellerText>
                <BestSellerAmount>Kshs.{seller.Price}/=</BestSellerAmount>
                    <CartButton>Add to Cart</CartButton>
                    <Button>Buy Now</Button>
                  
                </BestSellerName>
              </BestSellerItem>
            
          );
        })}
        </BestSellerContainer>
        </>
      
    );
  };

 
export default BestSellerItems