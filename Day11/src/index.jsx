import React from 'react';
import ReactDom from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';

const Task = (props) => {
  const { task } = props;
  return <li>{task}</li>;
};

Task.propTypes = {
  task: PropTypes.string,
};

Task.defaultProps = {
  task: '',
};

const TodoList = () => {
  const todoList = useSelector(state => state.todoList);
  return todoList.map(task => (
    <ul key={task}>
      <Task task={task} />
    </ul>
  ));
};

const TodoListPage = () => (
  <div>
    <div>其他內容什麼的</div>
    <TodoList />
  </div>
);

const CurrentTask = () => {
  const todoList = useSelector(state => state.todoList);
  return <div>{`下一件事要做：${todoList[0]}`}</div>;
};

const Main = () => {
  const todoList = useSelector(state => state.todoList);
  return (
    <div>
      <span>{`代辦事項數：${todoList.length}`}</span>
      <TodoListPage />
      <CurrentTask />
    </div>
  );
};

ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'),
);
