import {categories} from "../data";
import styled from "styled-components";

const CategoryItem=styled.div``
const ImageContainer=styled.div``
const Image=styled.div``
const CategoryText=styled.h3``
const Button=styled.button``


const CategoryItems=()=>{
    return(<div>
        {
            categories.map((category,index)=>{
                return(
                    <CategoryItem>
                        <ImageContainer>
                            <Image src={category.image}/>
                        </ImageContainer>
                            <CategoryText>{category.name}</CategoryText>
                            <Button>Shop{category.name}</Button>
                    
                    </CategoryItem>
                )
            })
        }
       </div> 
    )
}


export default CategoryItems