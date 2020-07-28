"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//App.js
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./Header"));
const Products_1 = __importDefault(require("./Products"));
const react_router_dom_1 = require("react-router-dom");
const ShowProduct_1 = __importDefault(require("./ShowProduct"));
const ShowCartProducts_1 = __importDefault(require("./ShowCartProducts"));
const App = () => {
    return (<div>
              <react_router_dom_1.BrowserRouter>
         
            <Header_1.default />
            <react_router_dom_1.Route path="/Products" exact component={Products_1.default}/>
            <react_router_dom_1.Route path="/Products/:id" component={ShowProduct_1.default}/>
            <react_router_dom_1.Route path="/ShowCartProducts" exact component={ShowCartProducts_1.default}/>
            
        
           
            </react_router_dom_1.BrowserRouter>
            </div>);
};
exports.default = App;
