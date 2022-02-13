/**
 * Estado inicial de la store de redux con los datos del usuario.
 * @type {(object|array)}
 */

const initialState = {
  lat: null,
  lon: null,
};

/**
 *
 * @param {(object|array)} state - Estado inicial de la store de redux.
 * @param {object} action - Accion a ser ejecutada por el reducer.
 */
const UserDataReducer = (action, state = initialState) => {
  if (action.type === "SET_USER_DATA") {
    return {
      ...state,
      lat: action.payload.lat,
      lon: action.payload.lon,
    };
  } else {
    return state;
  }
};

export default UserDataReducer;
