/**
 * Types
 */
export const Types = {
  LOGIN_REQUEST: 'login/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'login/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'login/LOGIN_FAILURE',

  LOGOUT_REQUEST: 'login/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'login/LOGOUT_SUCCESS',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  logged: false,
  user_account: null,
  error: '',
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return state;
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        logged: true,
        user_account: action.payload.user,
        error: '',
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        logged: false,
        user_account: null,
        error: action.payload.error,
      };

      /**
     * Logout
     */

    case Types.LOGOUT_REQUEST:
      return state;
    case Types.LOGOUT_SUCCESS:
      return {
        ...state,
        logged: false,
        user_account: null,
        error: '',
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  loginAttempt: user => ({
    type: Types.LOGIN_REQUEST,
    payload: { user },
  }),

  loginSuccess: user => ({
    type: Types.LOGIN_SUCCESS,
    payload: { user },
  }),

  loginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error },
  }),

  logoutRequest: () => ({
    type: Types.LOGOUT_REQUEST,
    payload: {},
  }),

  logoutSuccess: () => ({
    type: Types.LOGOUT_SUCCESS,
    payload: {},
  }),
};
