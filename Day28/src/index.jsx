"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var store_1 = __importDefault(require("./store"));
var Main_1 = __importDefault(require("./component/Main"));
var index_scss_1 = __importDefault(require("./index.scss"));
react_dom_1.default.render(<react_redux_1.Provider store={store_1.default}>
    <react_router_dom_1.HashRouter>
      <div className={index_scss_1.default.mainBlock}>
        <Main_1.default />
      </div>
    </react_router_dom_1.HashRouter>
  </react_redux_1.Provider>, document.getElementById('root'));
