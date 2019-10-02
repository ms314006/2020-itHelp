"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var todolist_1 = require("../../action/todolist");
var Content = function () {
    var dispatch = react_redux_1.useDispatch();
    var data = react_redux_1.useSelector(function (state) { return state.data; });
    return (<div data-testid="contentBlock">
      <div data-testid="contentData">
        {data ? JSON.stringify(data) : '暫無資料'}
      </div>
      <button type="button" onClick={function () { dispatch(todolist_1.fetchDataBegin()); }} data-testid="fetchContentDataBtn">
        獲得資料
      </button>
    </div>);
};
exports.default = Content;
