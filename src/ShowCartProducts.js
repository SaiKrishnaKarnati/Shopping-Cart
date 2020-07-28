import React from 'react'
import {connect} from 'react-redux'
import "./cart.css"
import { bindActionCreators } from "redux";
import {removeProductFromCart  } from "./store/actions";

const ShowCartProducts =(props) =>
{ 
    let itemprice =0;
    let deliveryfee=100;
   
props.cart.forEach(product=> {
    let price=parseInt(product.price);
    console.log(typeof product.price)
    itemprice=itemprice+price;
    
});
let quantity=props.quantity.reduce((a,b) =>a+b,0)


console.log(itemprice)
    return(
        
        <div className="background">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="col">
                     <div className="row">
                     <button type="button" class="btn btn-primary">
    My cart <span class="badge badge-light">{props.cart.length}</span>
</button>
                     </div><hr />
                     
                     {props.cart.map(cartProduct =>
                    {
                        
                        return(
                           
                            <div className="row">
                               
                                <img src={cartProduct.image.img1} width="180" />
                                <div className="col">
                                    <h2>{cartProduct.title}</h2>
                                    <p className="text-secondary">Mobile</p>
                                    <p className="text-success">In Stock</p> <br/>
                        <p>Quantity:{props.quantity[cartProduct.id -1]}</p>
                                    <button className="btn btn-warning " onClick={()=> props.removeProductFromCart(cartProduct)}>Remove</button>
                                    <br/>
                                </div>
                                <div className="col">
                                   
                                </div>
                                <hr/>
                            </div> 
                            
                        )
                        
                    }
                    )
                    
                }

                   
                    </div>
                </div>
                <div className="col-md-3"> 
                <div className="row">
                    <p className="text-secondary">&nbsp; PRICE DETAILS</p>
                    <hr/>
                    <br/>
                    
                </div>
                <div className="row">
                   {console.log(props.cart)}
                
            <p className="text">&nbsp;&nbsp;&nbsp;Price({props.cart.length} items) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-inr" aria-hidden="true"></i>
            {quantity *itemprice}  </p>
            <p className="text">&nbsp;&nbsp;&nbsp;Delivery fee &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-inr" aria-hidden="true"></i>
{deliveryfee} </p>
            <br/>
            <br/>
            <hr className="dot"/>
            <h5><strong>&nbsp;&nbsp;Total Amount &nbsp;&nbsp;&nbsp;<i class="fa fa-inr" aria-hidden="true"></i>
{(quantity*itemprice)+deliveryfee}</strong></h5>
                </div>
                </div>
            </div>
        </div>
        </div>
       
        
    )
    

}
const mapStatetoProps =(state) =>
({
    cart:state.cart,
    productDetails:state.Products,
   quantity:state.quantity


})
const mapDisptachtoProps =(dispatch) =>
       {
     return bindActionCreators({removeProductFromCart},dispatch) 
       }
export default connect(mapStatetoProps,mapDisptachtoProps)(ShowCartProducts)