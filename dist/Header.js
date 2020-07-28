"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Header.css");
const react_router_dom_1 = require("react-router-dom");
const Header = () => {
    return (<div>
        <nav className="navbar  navbar-expand-sm bg-primary navbar-dark">
       <react_router_dom_1.Link to={"/Products"}>
        <h2 className="shop">Shop</h2>
        </react_router_dom_1.Link>
        <react_router_dom_1.Link to={"/ShowCartProducts"}>
        <i className="fa fa-shopping-cart item fa-2x" aria-hidden="true"></i>
        </react_router_dom_1.Link>

      
        
      </nav>
    </div>);
};
exports.default = Header;
