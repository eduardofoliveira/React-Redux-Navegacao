import { put, call } from 'redux-saga/effects';
import swal from 'sweetalert';
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
