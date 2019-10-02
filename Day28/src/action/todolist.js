"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_TODO = 'ADD_TODO';
exports.addTodo = function (todo) { return ({
    type: exports.ADD_TODO,
    payload: {
        todo: todo,
    },
}); };
exports.FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
exports.fetchDataBegin = function () { return ({
    type: exports.FETCH_DATA_BEGIN,
}); };
exports.FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
exports.fetchDataSuccess = function (data) { return ({
    type: exports.FETCH_DATA_SUCCESS,
    payload: {
        data: data,
    },
}); };
