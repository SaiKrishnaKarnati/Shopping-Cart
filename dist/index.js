"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const App_1 = __importDefault(require("./App"));
require("bootstrap/dist/css/bootstrap.min.css");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const reducer_1 = __importDefault(require("./store/reducer"));
const store = redux_1.createStore(reducer_1.default);
react_dom_1.default.render(<react_redux_1.Provider store={store}><App_1.default /></react_redux_1.Provider>, document.getElementById('root'));
