import {slides} from "../data"
import styled from "styled-components"
// import { sliderUnstyledClasses } from "@mui/base" 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import {useState} from 'react';

const SliderContainer=styled.div`
display:flex;
overflow:hidden;
`
const SliderItem=styled.div` 
position:relative;
width:100vw;
height:70vh;
transition:all .5s ease-in;
`
const ImageContainer=styled.div`
width:100vw;
height:100%;
`
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
`
const SliderInfo=styled.div`
position:absolute;
top:50%;
transform:translateY(-50%);
left:50%;
transform:translateX(-50%);

`
const ArrowIcons=styled.div`
position:absolute;
top:50%;
transform:translateY(-50%);
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
background:red;
width:40px;
height:40px;
vertical-align:center;
left:${props=>props.direction==="left" ? 0 : 96.4}%;
cursor:pointer;
`

const SliderHeading=styled.h2``
const SliderDescription=styled.p``
const Button=styled.button`
padding:1em 2em;
border:none;
`

const Slider=()=>{
    const [activeIndex, SetActiveIndex]=useState(0)
    let handleSlide=(side)=>{
        // alert(`You have clicked the ${side} arrow`)
        if (side==="left"){
            SetActiveIndex(activeIndex>0 ? activeIndex-1:5)

        }
        if(side==="right"){
            SetActiveIndex(activeIndex<5?activeIndex+1:0)
        }

    }
    return(
        <SliderContainer>
{
    slides.map((slide,index)=>{
        return(
            <SliderItem key={index}style={{transform:`translateX(${activeIndex*-100}vw)`}} >
                <ArrowIcons  direction="left" onClick={()=>handleSlide("left")}>
                <ArrowBackIcon/>
                </ArrowIcons>
                <ArrowIcons  direction="right" onClick={()=>handleSlide("right")}>
                <ArrowForwardIcon/>

                </ArrowIcons>
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