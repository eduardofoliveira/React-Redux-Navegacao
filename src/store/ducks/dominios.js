/**
 * Types
 */
export const Types = {
  DOMAIN_LIST_REQUEST: 'domain/DOMAIN_LIST_REQUEST',
  DOMAIN_LIST_SUCCESS: 'domain/DOMAIN_LIST_SUCCESS',
  DOMAIN_LIST_FAILURE: 'domain/DOMAIN_LIST_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  list: [],
  error: '',
};

export default function dominios(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.DOMAIN_LIST_REQUEST:
      return state;
    case Types.DOMAIN_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload.domains,
        error: '',
      };
    case Types.DOMAIN_LIST_FAILURE:
      return {
        ...state,
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
  domainListRequest: () => ({
    type: Types.DOMAIN_LIST_REQUEST,
    payload: {},
  }),

  domainListSuccess: domains => ({
    type: Types.DOMAIN_LIST_SUCCESS,
    payload: { domains },
  }),

  domainListFailure: error => ({
    type: Types.DOMAIN_LIST_FAILURE,
    payload: { error },
  }),
};
