"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ProductDetails_json_1 = __importDefault(require("./Data/ProductDetails.json"));
const react_redux_1 = require("react-redux");
const actions_1 = require("./store/actions");
const actions_2 = require("./store/actions");
const redux_1 = require("redux");
const actions_3 = require("./store/actions");
require("./showproduct.css");
var mydatas = new Array();
var x = 0;
const Addproducts = (id) => {
    console.log(id);
    mydatas[x] = id;
    x = x + 1;
    localStorage["mydatas"] = JSON.stringify(mydatas);
    localStorage.setItem('product_id', JSON.stringify(mydatas));
};
const Showproduct = (props) => {
    console.log(props.Productdata);
    return (<div>

      {ProductDetails_json_1.default.map(data => {
        if (data.id === props.match.params.id)
            return (<div className="container ">
                <div className="row">
                  <div className="col-md-6">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src={data.image.img1} className="d-block w-100" alt="FIrst Image"/>
                        </div>
                        <div className="carousel-item">
                          <img src={data.image.img2} className="d-block w-100" alt="Second Image"/>
                        </div>

                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>

                    </div>

                  </div>
                  <div className="col-md-6"><br />
                    <div className="row">
                      <h2>{data.title}</h2><br />

                    </div>
                    <div className="row">
                      <h2 className="display-3">{data.price}</h2>

                    </div>
                    <div className="row">
                      <blockquote className="blockquote">
                        <p className="mb-0">{data.details}</p>

                      </blockquote>

                    </div>
                    {props.quantity[data.id - 1] != 0 &&
                <div className="row">
                  <button className="btn btn-primary btn-circle" onClick={() => props.increaseproductcount(data)}><i class="fa fa-plus" aria-hidden="true"></i>
                </button><input type="text" className="inputbox" size="4" value={props.quantity[data.id - 1]}/>
                      <button className="btn btn-danger countbtn" onClick={() => props.decreaseproductcount(data)}><i class="fa fa-minus" aria-hidden="true"></i>
                </button>
                {console.log(props.quantity[3])}
                    </div>}
                    <br /><br /><br />
                    <div className="row">
                      {console.log(data.id)}
                      <button className="btn btn-primary" onClick={() => props.addProducttoCart(data)}><i className="fa fa-cart-plus" aria-hidden="true"></i>&nbsp;&nbsp;Add to cart</button>&nbsp;&nbsp;
      <button className="btn btn-md btn-danger ml-4 text-light"><i className="fa fa-mobile fa-lg" aria-hidden="true"></i>


&nbsp;&nbsp;Buy now</button>
                    </div>
                  </div>
                </div>
              </div>);
    })}
    {console.log(props.cart)}
    </div>);
};
const mapStatetoProps = state => ({
    Productdata: state.Products,
    cart: state.cart,
    quantity: state.quantity
});
const mapDisptachtoProps = (dispatch) => {
    return redux_1.bindActionCreators((Object.assign({}, { addProducttoCart: actions_1.addProducttoCart }, { increaseproductcount: actions_2.increaseproductcount }, { decreaseproductcount: actions_3.decreaseproductcount })), dispatch);
};
exports.default = react_redux_1.connect(mapStatetoProps, mapDisptachtoProps)(Showproduct);
