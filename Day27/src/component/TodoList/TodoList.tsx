import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addTodo } from '../../action/todolist';

const Task = (props) => {
  const { task } = props;
  return (
    <li>
      <Link to={`/list/${task}`}>
        {task}
      </Link>
    </li>
  );
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
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoList);
  const [newTodo, setNewTodo] = useState('');
  return (
    <div data-testid="todolistBlock">
      <span>{`代辦事項數：${todoList.length}`}</span>
      <div>
        <input value={newTodo} onChange={(e) => { setNewTodo(e.target.value); }} />
        <button type="button" onClick={() => { dispatch(addTodo(newTodo)); }}>
          新增事項
        </button>
      </div>
      <TodoListPage />
      <CurrentTask />
    </div>
  );
};

export default Main;
