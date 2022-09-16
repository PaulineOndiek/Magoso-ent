import FeatureItem from '../components/FeatureItem';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PercentIcon from '@mui/icons-material/Percent';
import DiamondIcon from '@mui/icons-material/Diamond';
// import { LockClock } from "@mui/icons-material";
import styled from "styled-components";

const FeatureContainer=styled.div`
padding:1em 0;`
const Container=styled.div`
display:flex;
justify-content:space-between;
width:80%;
margin:0 auto;
// padding:0.5em;`
const Features=()=>{
    return(
        <FeatureContainer>
            <Container>
    <FeatureItem icon={<ScheduleIcon/>} text="24/7" BorderColor="green"/>
    <FeatureItem icon={<PercentIcon/>} text="Great Offer" BorderColor="Orange"/>
    <FeatureItem icon={<DiamondIcon/>} text="Quality" BorderColor="purple"/>
    </Container>
        </FeatureContainer>
    )
}
export default Features