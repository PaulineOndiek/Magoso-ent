import styled from "styled-components"
const SelectOption=styled.select``


const Categorised=()=>{
    return(
        <>
        <label>Filter Products:Sizes</label><SelectOption>
            <option value="">Size</option>
            <option value="Small">S</option>
            <option value="Medium">M</option>
            <option value="Large">L</option>
            <option value="Extra Large">XL</option>
        </SelectOption>

        <SelectOption>
            <option value="">Color</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
        </SelectOption>

        <label>Filter Products:Sizes</label><SelectOption>
            <option value="">Price</option>
            <option value="Price">Highest to Lowest</option>
            <option value="Price">Lowest to Highest</option>
            


        </SelectOption>
        </>
    )
}
export default Categorised