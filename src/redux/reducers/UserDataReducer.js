/**
 * Estado inicial de la store de redux con los datos del usuario.
 * @type {(object|array)}
 */

const initialState = {
  lat: null,
  lon: null,
  error: null,
};

/**
 *
 * @param {(object|array)} state - Estado inicial de la store de redux.
 * @param {object} action - Accion a ser ejecutada por el reducer.
 */
const userDataReducer = (action, state = initialState) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
    case "SET_USER_DATA_ERROR":
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default userDataReducer;
