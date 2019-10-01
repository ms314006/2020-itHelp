import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_DATA_BEGIN, fetchDataSuccess } from '../action/todolist';
import { getContent } from '../api/content';

export function* fetchData() {
  const data = yield call(getContent);
  yield put(fetchDataSuccess(data));
}

function* mySaga() {
  yield takeEvery(FETCH_DATA_BEGIN, fetchData);
}

export default mySaga;
