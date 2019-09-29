import { put, call } from 'redux-saga/effects';
import { fetchDataSuccess } from '../../src/action/todolist';
import { fetchData } from '../../src/sagas/content';
import { getContent } from '../../src/api/content';

describe('content sagas', () => {
  test('FetchData_Execute_ApiFlow', () => {
    const generator = fetchData();

    const callGetDataApi = generator.next().value;
    expect(callGetDataApi).toEqual(call(getContent));

    const successGetData = generator.next('mockResponse').value;
    expect(successGetData).toEqual(put(fetchDataSuccess('mockResponse')));

    const victoryGetData = generator.next().done;
    expect(victoryGetData).toEqual(true);
  });
});
