import React , {useState , useEffect} from "react"
import "./header.css"
import {Link} from "react-router-dom"



function Header(){
    return(
        <div className="header">
         <Link className="logo" to = "/">Fit Store</Link>
          <div className="navegacao">
         <Link className="home" to = "/">Home</Link>
         <Link className = "carrinho"to = "/carrinho">Carrinho</Link>
          </div>
        </div>
    )
}

export default Header;