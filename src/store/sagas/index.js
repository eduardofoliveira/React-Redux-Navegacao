import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from '../ducks/login';
import { login } from './login';
import { Types as UsuariosTypes } from '../ducks/usuarios';
import { listarUsuarios, deleteUser } from './usuarios';

export default function* rootSaga() {
  yield all([takeLatest(LoginTypes.LOGIN_REQUEST, login)]);
  yield all([takeLatest(UsuariosTypes.USUARIOS_LIST_REQUEST, listarUsuarios)]);
  yield all([takeLatest(UsuariosTypes.DELETE_USER_REQUEST, deleteUser)]);
}
