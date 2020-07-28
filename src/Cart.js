import React from 'react'
const Cart =() =>
{
    return(
        
                   
                    <div className="row">
                       
                        <img src={cartProduct.image.img1} width="180" />
                        <div className="col">
                            <h2>{cartProduct.title}</h2>
                            <p className="text-secondary">Mobile</p>
                            <p className="text-success">In Stock</p> <br/>
                            <button className="btn btn-warning ">Remove</button>
                        </div>
                        <div className="col">
                           
                        </div>
                        <hr/>
                    </div> 
                    
                
                
            
            
            
        

    )
    }
    export default Cart