import styled from "styled-components"
const FeatureItemContainer=styled.div`box-shadow:1px 1px 1px lightGrey;
border:1px solid lightGrey;
width:fit-content;
display:flex;
align-items:center;
border-radius:5px;
padding:1em;
gap:1em;`
const FeatureItemText=styled.h3`
`

const FeatureItem=({text, icon, BorderColor})=>{
    return(
        <FeatureItemContainer style={{borderTop:`5px solid ${BorderColor}`}}>
        {icon}
            <FeatureItemText>
{text}
            </FeatureItemText>

        </FeatureItemContainer>
    )
}
export default FeatureItem
