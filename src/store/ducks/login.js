/**
 * Types
 */
export const Types = {
  LOGIN_REQUEST: 'login/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'login/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'login/LOGIN_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  logged: false,
  user_account: null,
  error: null,
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
        error: null,
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        logged: false,
        user_account: null,
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
  loginAttempt: user => ({
    type: Types.LOGIN_REQUEST,
    payload: { user },
  }),

  loginSuccess: msg => ({
    type: Types.LOGIN_SUCCESS,
    payload: { msg },
  }),

  loginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error },
  }),
};
