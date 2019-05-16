/**
 * Types
 */
export const Types = {
  USUARIOS_LIST_REQUEST: 'usuarios/USUARIOS_LIST_REQUEST',
  USUARIOS_LIST_SUCCESS: 'usuarios/USUARIOS_LIST_SUCCESS',
  USUARIOS_LIST_FAILURE: 'usuarios/USUARIOS_LIST_FAILURE',

  DELETE_USER_REQUEST: 'usuarios/DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS: 'usuarios/DELETE_USER_SUCCESS',
  DELETE_USER_FAILURE: 'usuarios/DELETE_USER_FAILURE',

  ADD_USER_REQUEST: 'usuarios/ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'usuarios/ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'usuarios/ADD_USER_FAILURE',

  EDIT_USER_REQUEST: 'usuarios/EDIT_USER_REQUEST',
  EDIT_USER_SUCCESS: 'usuarios/EDIT_USER_SUCCESS',
  EDIT_USER_FAILURE: 'usuarios/EDIT_USER_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  list: [],
  error: '',
};

export default function usuarios(state = INITIAL_STATE, action) {
  switch (action.type) {
    /**
     * Lista Usuarios
     */

    case Types.USUARIOS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.USUARIOS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.users,
        error: '',
      };
    case Types.USUARIOS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

      /**
     * Deletar Usuário
     */

    case Types.DELETE_USER_REQUEST:
      return {
        ...state,
        error: '',
      };
    case Types.DELETE_USER_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const { id } = action.payload.id;

      return {
        list: state.list.filter(user => user.id !== id),
        error: '',
      };
    case Types.DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

      /**
     * Adicionar Usuário
     */

    case Types.ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.push(action.payload.user),
        error: '',
      };
    case Types.ADD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

      /**
     * Editar Usuário
     */

    case Types.EDIT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case Types.EDIT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  listRequest: () => ({
    type: Types.USUARIOS_LIST_REQUEST,
    payload: {},
  }),

  listSuccess: users => ({
    type: Types.USUARIOS_LIST_SUCCESS,
    payload: { users },
  }),

  listFailure: error => ({
    type: Types.USUARIOS_LIST_FAILURE,
    payload: { error },
  }),

  deleteUserRequest: id => ({
    type: Types.DELETE_USER_REQUEST,
    payload: { id },
  }),

  deleteUserSuccess: id => ({
    type: Types.DELETE_USER_SUCCESS,
    payload: { id },
  }),

  deleteUserFailure: error => ({
    type: Types.DELETE_USER_FAILURE,
    payload: { error },
  }),

  addUserRequest: user => ({
    type: Types.ADD_USER_REQUEST,
    payload: { user },
  }),

  addUserSuccess: user => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { user },
  }),

  addUserFailure: error => ({
    type: Types.ADD_USER_FAILURE,
    payload: { error },
  }),

  editUserRequest: user => ({
    type: Types.EDIT_USER_REQUEST,
    payload: { user },
  }),

  editUserSuccess: user => ({
    type: Types.EDIT_USER_SUCCESS,
    payload: { user },
  }),

  editUserFailure: error => ({
    type: Types.EDIT_USER_FAILURE,
    payload: { error },
  }),
};
