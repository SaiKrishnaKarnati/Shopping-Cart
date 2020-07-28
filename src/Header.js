import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"
import ShowCartProducts from "./ShowCartProducts"
import  Products from "./Products"

const Header = () =>
{
    return(
        <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
       <Link to={"/Products"}>
        <h2 className="shop">Shop</h2>
        </Link>
        <Link to={"/ShowCartProducts"}>
        <i className="fa fa-shopping-cart item fa-2x" aria-hidden="true" ></i>
        </Link>

      
        
      </nav>
</div>                
    )

}
export default Header