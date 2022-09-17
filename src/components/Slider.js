import {slides} from "../data"
import styled from "styled-components"
// import { sliderUnstyledClasses } from "@mui/base" 



const SliderContainer=styled.div`
width:100%;
height:100%;
`
const SliderItem=styled.div` 
position:relative;
width:100vw;
height:70vh;`
const ImageContainer=styled.div`dd .
// myc@myc-ThinkPad-X1-Carbon:~/Desktop/Magoso-ent$ git commit -m "Worked on the features and FeatureItem C"

width:100%;
height:100%;`
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
// object-position:left top 5%;
`
const SliderInfo=styled.div`
position:absolute;
top:0;
left:0;`
const SliderHeading=styled.h2``
const SliderDescription=styled.p``
const Button=styled.button``

const Slider=()=>{
    return(
        <SliderContainer>
{
    slides.map((slide,index)=>{
        return(
            <SliderItem>
                <ImageContainer>
                    <Image src={slide.image}/>
                </ImageContainer>
                <SliderInfo>
                    <SliderHeading>{slide.name}</SliderHeading>
                    <SliderDescription>{slide.description}</SliderDescription>
                    <Button>Shop{slide.name}</Button>
                </SliderInfo>
            </SliderItem>
        )
    })
}
        </SliderContainer>
    )
}
export default Slider