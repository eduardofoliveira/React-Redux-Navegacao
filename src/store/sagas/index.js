import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from '../ducks/login';
import { login, logout } from './login';
import { Types as UsuariosTypes } from '../ducks/usuarios';
import {
  listarUsuarios, deleteUser, addUser, editUser,
} from './usuarios';

export default function* rootSaga() {
  yield all([takeLatest(LoginTypes.LOGIN_REQUEST, login)]);
  yield all([takeLatest(UsuariosTypes.USUARIOS_LIST_REQUEST, listarUsuarios)]);
  yield all([takeLatest(UsuariosTypes.DELETE_USER_REQUEST, deleteUser)]);
  yield all([takeLatest(UsuariosTypes.ADD_USER_REQUEST, addUser)]);
  yield all([takeLatest(UsuariosTypes.EDIT_USER_REQUEST, editUser)]);
  yield all([takeLatest(LoginTypes.LOGOUT_REQUEST, logout)]);
}
