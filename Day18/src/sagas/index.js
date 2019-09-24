import { all } from 'redux-saga/effects';
import toodlistSaga from '../action/todolist';

function* rootSaga() {
  yield all([
    toodlistSaga(),
  ]);
}

export default rootSaga;
