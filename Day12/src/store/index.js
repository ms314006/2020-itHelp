import { createStore } from 'redux';
import todoReducer from '../reducer/todolist';

const store = createStore(todoReducer);

export default store;
