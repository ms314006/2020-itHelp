import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import todoReducer from '../reducer/todolist';

const store = createStore(
  todoReducer, applyMiddleware(logger),
);

export default store;
