import { all } from 'redux-saga/effects';
import contentSaga from './content';

function* rootSaga() {
  yield all([
    contentSaga(),
  ]);
}

export default rootSaga;
