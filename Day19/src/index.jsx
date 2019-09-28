import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {
  Switch, Route, Link, HashRouter,
} from 'react-router-dom';
import Content from './component/Content';
import TodoList from './component/TodoList';
import store from './store';

import List from './component/List';

const Main = () => (
  <div>
    <ul>
      <li><Link to="/">首頁</Link></li>
      <li><Link to="/todolist">待辦事項</Link></li>
    </ul>
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/todolist" component={TodoList} />
      <Route path="/list/:taskName" component={List} />
    </Switch>
  </div>
);

ReactDom.render(
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
