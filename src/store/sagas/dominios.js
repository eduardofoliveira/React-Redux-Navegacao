import { put, call } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as dominiosActions } from '../ducks/dominios';

export function* lista() {
  try {
    const { data } = yield call(api.get, '/domain');

    console.log(data);

    yield put(dominiosActions.domainListSuccess(data));
  } catch (error) {
    if (error.response) {
      yield put(dominiosActions.domainListFailure(JSON.stringify(error.response)));
    } else {
      yield put(dominiosActions.domainListFailure('Erro ao conectar com servidor'));
    }
  }
}
