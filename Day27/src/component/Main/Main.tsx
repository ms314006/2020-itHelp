import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Content from '../Content';
import TodoList from '../TodoList';
import List from '../List';

const Main = () => (
  <div>
    <ul>
      <li>
        <Link to="/" data-testid="homeLink">
          首頁
        </Link>
      </li>
      <li>
        <Link to="/todolist" data-testid="todolistLink">
          待辦事項
        </Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/todolist" component={TodoList} />
      <Route path="/list/:taskName" component={List} />
    </Switch>
  </div>
);

export default Main;
