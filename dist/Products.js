"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
require("./Box.css");
//import ProductDetails from "./Data/ProductDetails.json"
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
const renderProduct = (card, index) => {
    return (<react_router_dom_1.Link to={`/Products/${card.id}`}>
        <react_bootstrap_1.Card style={{ width: "25rem" }} key={index} className="box">
  <react_bootstrap_1.Card.Img variant="top" src={card.image.img1} style={{ width: "40", height: "20vw" }}/>
  <react_bootstrap_1.Card.Body>
    <react_bootstrap_1.Card.Title>{card.title}</react_bootstrap_1.Card.Title>
    <react_bootstrap_1.Card.Text>
     {card.content}
    </react_bootstrap_1.Card.Text>
   
  </react_bootstrap_1.Card.Body>
    </react_bootstrap_1.Card>
    </react_router_dom_1.Link>);
};
const Products = (props) => {
    console.log(props.Productdata);
    return (<div className="grid">
            {props.Productdata.map(renderProduct)}
              </div>);
};
const mapStatetoProps = state => ({
    Productdata: state.Products
});
exports.default = react_redux_1.connect(mapStatetoProps)(Products);
