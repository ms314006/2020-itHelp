"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_logger_1 = __importDefault(require("redux-logger"));
var redux_saga_1 = __importDefault(require("redux-saga"));
var sagas_1 = __importDefault(require("../sagas"));
var todolist_1 = __importDefault(require("../reducer/todolist"));
var sagaMiddleware = redux_saga_1.default();
var store = redux_1.createStore(todolist_1.default, redux_1.applyMiddleware(sagaMiddleware, redux_logger_1.default));
sagaMiddleware.run(sagas_1.default);
exports.default = store;
