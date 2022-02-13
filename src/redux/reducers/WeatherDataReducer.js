/**
 * Estado inicial de la store de redux con los datos del tiempo.
 * @type {(object|array)}
 */

const initialState = {
  city: null,
  list: null,
};

/**
 *
 * @param {(object|array)} state - Estado inicial de la store de redux.
 * @param {object} action - Accion a ser ejecutada por el reducer.
 */
const UserDataReducer = (action, state = initialState) => {
  if (action.type === "SET_WEATHER_DATA") {
    return {
      ...state,
      city: action.payload.city,
      list: action.payload.list,
    };
  } else {
    return state;
  }
};

export default UserDataReducer;
