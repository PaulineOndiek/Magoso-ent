import  Slider  from "../components/Slider"
import Nav from "../components/Nav"
import Feature from "../components/Features"
import Categories from "../components/Categories"
import BestSeller from "../components/BestSeller"
import Newsletter from "../components/Newsletter."
import Footer from "../components/Footer"



const Home=()=>{
return(
    <div>
        <Nav/> 
        <Slider/>
        <Feature/>
        <Categories/>
        <BestSeller/>
        <Newsletter/>
        <Footer/>
    </div>
)
}
export default Home 