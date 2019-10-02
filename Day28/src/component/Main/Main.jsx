"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Content_1 = __importDefault(require("../Content"));
var TodoList_1 = __importDefault(require("../TodoList"));
var List_1 = __importDefault(require("../List"));
var Main = function () { return (<div>
    <ul>
      <li>
        <react_router_dom_1.Link to="/" data-testid="homeLink">
          首頁
        </react_router_dom_1.Link>
      </li>
      <li>
        <react_router_dom_1.Link to="/todolist" data-testid="todolistLink">
          待辦事項
        </react_router_dom_1.Link>
      </li>
    </ul>
    <react_router_dom_1.Switch>
      <react_router_dom_1.Route exact path="/" component={Content_1.default}/>
      <react_router_dom_1.Route path="/todolist" component={TodoList_1.default}/>
      <react_router_dom_1.Route path="/list/:taskName" component={List_1.default}/>
    </react_router_dom_1.Switch>
  </div>); };
exports.default = Main;
