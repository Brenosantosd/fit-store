import { BrowserRouter, Routes, Route } from "react-router-dom";



import Carrinho from "./pages/Carrinho";
import Home from "./pages/Home";
import Erro from "./pages/Erro"; 
import Header from "./components/Header";
import Footer from "./Footer";



function RoutesApp(){
    return(
      <BrowserRouter>
    
      <Header/>
      <Routes>
     <Route path = "/" element = {<Home/>}/>
     <Route path = "/carrinho" element = {<Carrinho/>}/>
     <Route path = "*" element = {<Erro/>}/>
      </Routes> 
      <Footer/>      
      </BrowserRouter>
    )
}

export default RoutesApp; 