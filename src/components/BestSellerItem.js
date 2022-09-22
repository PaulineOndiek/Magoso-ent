import { bestSellers } from "../data"
import styled from "styled-components"
// import { Translate } from "@mui/icons-material";


const BestSellerItem=styled.div`
&:hover{
  transform:scale(1.1)
};
border-radius:5px;
box-shadow:0px 0px 3px grey;
cursor:pointer;
width:25%;
padding:1em;
transition:all .5s ease-in;
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
cursor:pointer
`
const Button=styled.button`
background:orange;
margin-right:2em;
padding:.5em;
border-radius:5px;
border:none;
margin-left:1em;
color:green;
cursor:pointer;
`


const BestSellerItems = () => {
    return (
      <>
      <SellerHeading>Best Sellers</SellerHeading>
  
      <BestSellerContainer>
        {bestSellers.slice(0,3).map((seller, index) => {
          return (
              
              <BestSellerItem key={index}>
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