"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var List = function (props) {
    var match = props.match;
    return (<div>{JSON.stringify(match)}</div>);
};
List.propTypes = {
    match: prop_types_1.default.shape({}),
};
List.defaultProps = {
    match: {},
};
exports.default = List;
