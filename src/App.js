//App.js
import React from "react";
import Header  from "./Header";
import Products from "./Products";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import ShowProduct from "./ShowProduct"
import ShowCartProducts from "./ShowCartProducts"
import Footer from "./Footer";
import Showproduct from "./ShowProduct";
const App =()=>
{
    return(
      
        <div>
              <Router >
         
            <Header />
            <Route path="/Products" exact component={Products} />
            <Route path="/Products/:id" component={ShowProduct} />
            <Route path="/ShowCartProducts" exact component={ShowCartProducts} />
            
        
           
            </Router>
            </div>
          
    )
}
export default App;




