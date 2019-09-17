import * as actions from '../action/todolist';

const initState = {
  todoList: ['第一件事情', '第二件事情'],
  data: {},
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload.todo,
        ],
      };
    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default todoReducer;
