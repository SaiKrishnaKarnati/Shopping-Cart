import React from "react";
import {connect} from "react-redux";

import "./Box.css";

//import ProductDetails from "./Data/ProductDetails.json"

import {Link} from "react-router-dom"
import {Card} from "react-bootstrap"
const renderProduct =(card,index) =>{

    return(
        <Link to={`/Products/${card.id}`}>
        <Card style={{width:"25rem"}}  key={index} className="box">
  <Card.Img variant="top" src={card.image.img1} style={{width:"40",height:"20vw"}} />
  <Card.Body>
    <Card.Title>{card.title}</Card.Title>
    <Card.Text>
     {card.content}
    </Card.Text>
   
  </Card.Body>
</Card>
</Link>
    )

}

const Products =(props) =>
{
    console.log(props.Productdata)

    
   
    return(
        <div className="grid">
            {props.Productdata.map(renderProduct)}
              </div>
    ) 
}
const mapStatetoProps = state =>
({
Productdata:state.Products
})
export default connect(mapStatetoProps)(Products);