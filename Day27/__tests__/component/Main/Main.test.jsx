import React from 'react';
import { createStore } from 'redux';
import * as ReactRedux from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import reducer from '../../../src/reducer/todolist';
import Main from '../../../src/component/Main';

expect.extend({ toBeInTheDocument });

const { Provider } = ReactRedux;

const generateComponent = (component, initState) => {
  const store = createStore(reducer, initState);
  const history = createMemoryHistory();
  return render(
    <Provider store={store}>
      <Router history={history}>
        {component}
      </Router>
    </Provider>,
  );
};

describe('Main', () => {
  test('Main_ClickTodoLisstLink_RenderTodoList', () => {
    const { getByTestId } = generateComponent(<Main />);
    const todolostLink = getByTestId('todolistLink');
    fireEvent.click(todolostLink);
    expect(getByTestId('todolistBlock')).toBeInTheDocument();
  });
});
