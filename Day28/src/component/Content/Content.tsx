import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataBegin } from '../../action/todolist';

const Content = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  return (
    <div data-testid="contentBlock">
      <div data-testid="contentData">
        {data ? JSON.stringify(data) : '暫無資料'}
      </div>
      <button
        type="button"
        onClick={() => { dispatch(fetchDataBegin()); }}
        data-testid="fetchContentDataBtn"
      >
        獲得資料
      </button>
    </div>
  );
};

export default Content;
