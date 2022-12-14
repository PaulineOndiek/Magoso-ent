import {getStorage, ref, uploadString} from "firebase/storage"
import styled from "styled-components"
import {useState} from 'react'
import {db} from '../firebase'
import {addDoc, collection} from "firebase/firestore"
// import { clear } from "@testing-library/user-event/dist/clear"
const ImagesContainer=styled.div`
display:flex;
gap:.5em;
overflow:scroll;
` 
const Img=styled.img`
width:20%;
height:20%;`
  

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
            const storage=getStorage()
            const storageRef=ref(storage, file.name)
            console.log(file.name)
            const fileReader=new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload=()=>{
                if (type==="single"){
                    uploadString(storageRef, fileReader.result, 'data_url').then((snapshot)=>{
                        console.log("uploaded a data_url string!")
                        setFormData(prev=>({...prev,productImage:`https://firebasestorage.googleapis.com/v0/b/magoso-ent-d1c60.appspot.com/o/${file.name}?alt=media&token=41abac4c-f568-42c9-b5f0-2cdcdc87d5a3`}))

                    })
                    setImg(fileReader.result)

                }

                else{
                    uploadString(storageRef, fileReader.result, 'data_url').then((snapshot)=>{
                        console.log("uploaded a data_url string!")
                        setFormData(prev=>({...prev,productGallery:[...prev , productGallery,`https://firebasestorage.googleapis.com/v0/b/magoso-ent-d1c60.appspot.com/o/${file.name}?alt=media&token=41abac4c-f568-42c9-b5f0-2cdcdc87d5a3`]}))

                    })

                    
                    setimage(prev=>[...prev,fileReader.result])
                }
            }
        })
    }
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
    
    const handleAddProduct= async()=>{
        try{
        await addDoc(collection(db, "Product"), formData)
            console.log("Product Saved:")
            setFormData({
              productName:"",
         productPrice:"",
         productSalePrice:"",
         productDescription:"",
         productDetailedDescription:"",
         productOffer:"Not on Offer",
         productCategory:"",
         productImage:"",
         productGallery:[]  
            })
        }
        
        catch(error){
        console.log("error adding document:", error)
        }


    }

    return(
        <Container>
        <Forms>
       <Input type="text" value={formData.productName} placeholder="Product Name" onChange={(e)=>setFormData({...formData,productName:e.target.value})}/>
       <Input type="number" value={formData.productPrice}placeholder="Product Price"  min="100" onChange={(e)=>setFormData({...formData,productPrice:parseInt(e.target.value)})}/>
       <Input type="number" value={formData.productSalePrice}placeholder="Sale Price" min="100" onChange={(e)=>setFormData({...formData, productSalePrice:parseInt(e.target.value)})}/>
       <SelecttOffer value={formData.productOffer}onChange={(e)=>setFormData({...formData,productOffer:e.target.value})}>
        <option value="Offer">Offer</option>
        <option value="Not on offer">Not on Offer</option>
       </SelecttOffer>
       <textArea  placeholder="Description" value={formData.productDescription}rows="5" cols="10" onChange={(e)=>setFormData({...formData,productDescription:e.target.value})}></textArea>
       <textArea placeholder="Detailed Description" value={formData.productDetailedDescription}cols="10" rows="5" onChange={(e)=>setFormData({...formData,productDetailedDescription:e.target.value})}></textArea>
       
       <SelectOption value={formData.productCategory}onChange={(e)=>setFormData({...formData,productCategory:e.target.value})}>
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
       <Button onClick={handleAddProduct}>Add Product</Button>
        
        </Forms>
        </Container>
    )
}
export default Product 