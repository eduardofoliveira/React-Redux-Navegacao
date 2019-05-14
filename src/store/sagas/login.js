import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { Creators as LoginActions } from '../ducks/login';

export function* login() {
  try {
    yield put(push('/profile'));

    yield put(LoginActions.loginSuccess('Usuário logado com sucesso !'));
  } catch (error) {
    yield put(LoginActions.loginFailure('Erro ao conectar com servidor'));
  }
}
