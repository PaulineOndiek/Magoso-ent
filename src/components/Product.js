import styled from "styled-components"
import {useState} from 'react'
import {db} from 'Firebase'

const ImagesContainer=styled.div`
display:flex;
gap:.5em;
overflow:scroll;


` 

    

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
const SelecttOffer=styled.select``
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
         productSalePrice:"",
         productDescription:"",
         productDetailedDescription:"",
         productOffer:"Not on Offer",
         productCategory:"",
         productImage:"",
         productGallery:[]
        } 
    )
        const[img, setImg]=useState("")
        const [image, setimage]=useState([])
    
    const images=(e, type)=>{
        const files=e.target.files
        Array.from(files).forEach(file=>{
            const fileReader=new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload=()=>{
                if (type==="single"){
                    setFormData(prev=>({...prev,productImage:fileReader.result}))
                    setImg(fileReader.result)

                }

                else{
    
                    setFormData(prev=>({...prev,productGallery:[...prev.productGallery,fileReader.result]}))
                    setimage(prev=>[...prev,fileReader.result])
                }
            }
        })
        //         const base64=(file)=>{
        //     return new Promise((resolve, reject)=>{
        //         const fileReader = new FileReader()
        //         fileReader.readAsDataURL(file)
        //         fileReader.onload=()=>resolve(fileReader.result)
        //         fileReader.onerror=(error)=>reject(error)
        //     })
        // }

    //     const file=e.target.files[0]
    //     const fileReader=new FileReader()
    //     fileReader.readAsDataURL(file)
    //     fileReader.onload=()=>{
    //         console.log(fileReader.result)
        // setImg(fileReader.result)
    // }
    //     fileReader.onerror=(error)=>{
    //         console.log(error)
    //     }
    }

    return(
        <Container>
        <Forms>
       <Input type="text" placeholder="Product Name" onChange={(e)=>setFormData({...formData,productName:e.target.value})}/>
       <Input type="number" placeholder="Product Price"  min="100" onChange={(e)=>setFormData({...formData,productPrice:parseInt(e.target.value)})}/>
       <Input type="number" placeholder="Sale Price" min="100" onChange={(e)=>setFormData({...formData, productSalePrice:parseInt(e.target.value)})}/>
       <SelecttOffer onChange={(e)=>setFormData({...formData,productOffer:e.target.value})}>
        <option value="Offer">Offer</option>
        <option value="Not on offer">Not on Offer</option>
       </SelecttOffer>
       <textArea  placeholder="Description" rows="5" cols="10" onChange={(e)=>setFormData({...formData,productDescription:e.target.value})}></textArea>
       <textArea placeholder="Detailed Description" cols="10" rows="5" onChange={(e)=>setFormData({...formData,productDetailedDescription:e.target.value})}></textArea>
       
       <SelectOption onChange={(e)=>setFormData({...formData,productCategory:e.target.value})}>
    <option value="">--Please Choose an Option--</option>
    <option value="Dresses">Dresses</option>
    <option value="Pots">Pots</option>
    <option value="Weavery">Weavery</option>
    <option value="Decorations">Decorations</option>
    <option value="Sculpture">Sculpture</option>
    <option value="Beads">Beads</option>
     </SelectOption>
    
          
       <label> Product Image:<Input type="file" onChange={(e)=>images(e, "single")}/></label>
       <Img src={img}/>
       <label>Product Gallery:<Input type="file" multiple onChange={(e)=>images(e, "multiple")}/></label>
       <ImagesContainer>
       {
       image.map(imaged=>{
        return(
            <Img src={imaged}/>
        )
       })
    }
       </ImagesContainer>
       <Button onClick={()=>console.log(formData)}>Add Product</Button>
        
        </Forms>
        </Container>
    )
}
export default Product 