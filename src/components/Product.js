import styled from "styled-components"
import {useState} from 'react'

const Container=styled.div`
margin:0 auto;
width:60%;
box-shadow:0 0 5px grey;
`
const Forms=styled.div`
display:flex;
flex-direction:column;
gap:1.7em;
width:100%;
`
const Input=styled.input`
padding:1em 2em;
border-radius:5px;
outline:none;


`

const SelectOption=styled.select`
padding:1em;
`
const Button=styled.button`
padding:1em 2em;
background:green;
border-radius:5px;
color:orange;
border:none;
font-size:1rem;`


const Product=()=>{
    const[formData,setFormData]=useState(
        {
         productName:"",
         productPrice:"",
         productDescription:"",
         productDetailedDescription:"",
         productSelect:"",
         productImage:"",
         productGallery:[""]
        }
    )
    return(

        <Container>
           
        <Forms>
       <Input type="text" placeholder="Product Name" onChange={(e)=>setFormData({...formData,productName:e.target.value})}/>
       <Input type="number" placeholder="Product Price"  min="100" onChange={(e)=>setFormData({...formData,productPrice:e.target.value})}/>
       <textArea  placeholder="Description" rows="5" cols="10" onChange={(e)=>setFormData({...formData,productDescription:e.target.value})}/>
       <textArea placeholder="Detailed Description" cols="10" rows="5" onChange={(e)=>setFormData({...formData,productDetailedDescription:e.target.value})}/>
       
       <SelectOption onChange={(e)=>setFormData({...formData,productSelect:e.target.value})}>
    <option value="">--Please Choose an Option--</option>
    <option value="Dresses">Dresses</option>
    <option value="Pots">Pots</option>
    <option value="Weavery">Weavery</option>
    <option value="Decorations">Decorations</option>
    <option value="Sculpture">Sculpture</option>
    <option value="Beads">Beads</option>
     </SelectOption>
    

       <label> Product Image:<Input type="file"/></label>
       <label>Thumbnail:<Input type="file" multiple/></label>
       
       <Button onClick={()=>console.log(formData)}>Add Product</Button>
        
        </Forms>
        </Container>
    )
}
export default Product 