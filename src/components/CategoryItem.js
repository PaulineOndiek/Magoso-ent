import { categories } from "../data";
import styled from "styled-components";


const CategoryItem = styled.div`
  position: relative;
  cursor:pointer;
  box-shadow:2px 2px 6px grey;
  

`
const CategoryContainer = styled.div`
  
display: flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:1em;
  

`
const CategoryHeading=styled.h3`
text-align:center;
font-size:2rem;`
const CategoryName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background:rgba(0, 0, 0, .6);
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`
const ImageContainer = styled.div`
  width: 400px;
  height: 400px;

`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CategoryText = styled.h3`
  color: white;
  font-size: 2rem;
`;

const CategoryItems = () => {
  return (
    <>
    <CategoryHeading> Browse Categories </CategoryHeading>

    <CategoryContainer>

      {categories.map((category, index) => {
        return (
           
            <CategoryItem key={index}>
              <ImageContainer>
                <Image src={category.image} />
              </ImageContainer>
              <CategoryName>
                <CategoryText>{category.name}</CategoryText>
              </CategoryName>
            </CategoryItem>
          
        );
      })}
      </CategoryContainer>
      
      </>
  );
};

export default CategoryItems;
