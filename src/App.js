// import { ReactDOM } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact"
import Shop from "./Pages/Shop"
import Products from "./Pages/Products"
import Categorise from "./Pages/Categorise"

function App() {
  return (

  <div>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/categorise" element={<Categorise/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
      
  );
}

export default App;

