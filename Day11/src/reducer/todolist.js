const initState = {
  todoList: ['第一件事情', '第二件事情'],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todoReducer;
