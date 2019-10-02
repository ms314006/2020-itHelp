"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions = __importStar(require("../action/todolist"));
var initState = {
    todoList: ['第一件事情', '第二件事情'],
    data: {},
};
var todoReducer = function (state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case actions.ADD_TODO:
            return __assign(__assign({}, state), { todoList: __spreadArrays(state.todoList, [
                    action.payload.todo,
                ]) });
        case actions.FETCH_DATA_SUCCESS:
            return __assign(__assign({}, state), { data: action.payload.data });
        default:
            return state;
    }
};
exports.default = todoReducer;
