import { put, call } from 'redux-saga/effects';
import swal from 'sweetalert';
import { push } from 'connected-react-router';
import api from '../../services/api';

import { Creators as usuariosActions } from '../ducks/usuarios';

export function* listarUsuarios() {
  try {
    const { data } = yield call(api.get, '/user');

    yield put(usuariosActions.listSuccess(data));
  } catch (error) {
    usuariosActions.listFailure(error);
  }
}

export function* deleteUser(action) {
  try {
    const retorno = yield swal({
      title: 'Deletar usuário',
      text: 'Tem certeza que desenha deletar o usuario ?',
      icon: 'warning',
      buttons: ['Cancelar', 'Deletar'],
      dangerMode: true,
    });

    if (retorno) {
      const { data } = yield call(api.delete, `/user/${action.payload.id}`);

      swal(data.status, {
        icon: 'success',
      });

      yield put(usuariosActions.deleteUserSuccess({ id: action.payload.id }));
    }
  } catch (error) {
    yield swal('Erro ao remover usuário', {
      icon: 'error',
    });
    usuariosActions.deleteUserFailure(error);
  }
}

export function* addUser(action) {
  try {
    const { user } = action.payload;

    yield call(api.post, '/user', user);

    yield put(push('/app/users'));
  } catch (error) {
    if (error.response) {
      yield put(usuariosActions.addUserFailure(error.response.data.errors[0].message));
    } else {
      yield put(usuariosActions.addUserFailure('Erro ao conectar com servidor'));
    }
  }
}

export function* editUser(action) {
  try {
    const { user } = action.payload;

    const { data } = yield call(api.put, `/user/${user.id}`, user);

    yield put(usuariosActions.editUserSuccess(data.status));
    yield put(push('/app/users'));
  } catch (error) {
    if (error.response) {
      yield put(usuariosActions.editUserFailure(error.response.data.errors[0].message));
    } else {
      yield put(usuariosActions.editUserFailure('Erro ao conectar com servidor'));
    }
  }
}
