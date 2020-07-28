"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Cart = () => {
    return (<div className="row">
                       
                        <img src={cartProduct.image.img1} width="180"/>
                        <div className="col">
                            <h2>{cartProduct.title}</h2>
                            <p className="text-secondary">Mobile</p>
                            <p className="text-success">In Stock</p> <br />
                            <button className="btn btn-warning ">Remove</button>
                        </div>
                        <div className="col">
                           
                        </div>
                        <hr />
                    </div>);
};
exports.default = Cart;
