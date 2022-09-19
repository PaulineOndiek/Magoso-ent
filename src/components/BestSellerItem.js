import { bestSellers } from "../data"
import styled from "styled-components"

const BestSellerItem=styled.div`
cursor:pointer;
`
const BestSellerAmount=styled.div``
const ImageContainer=styled.div`
width:250px;
height:250px;
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
justify-content:center;
flex-wrap:wrap;

`
const CartButton=styled.button`
padding:1em;
`
const Button=styled.button``


const BestSellerItems = () => {
    return (
      <>
      <SellerHeading>Best Sellers</SellerHeading>
  
      <BestSellerContainer>
        {bestSellers.map((seller, index) => {
          return (
             
              <BestSellerItem>
                <ImageContainer>
                  <Image src={seller.image} />
                </ImageContainer>
                <BestSellerName>
                <BestSellerText>{seller.name} </BestSellerText>
                <BestSellerAmount>{seller.Price}</BestSellerAmount>
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