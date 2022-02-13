/**
 * Estado inicial de la store de redux con los datos del tiempo.
 * @type {(object|array)}
 */

const initialState = {
  city: null,
  list: null,
  error: null,
};

/**
 *
 * @param {(object|array)} state - Estado inicial de la store de redux.
 * @param {object} action - Accion a ser ejecutada por el reducer.
 */
const weatherDataReducer = (action, state = initialState) => {
  switch (action.type) {
    case "SET_WEATHER_DATA":
      return {
        ...state,
        city: action.payload.city,
        list: action.payload.list,
      };
    case "SET_WEATHER_DATA_ERROR":
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default weatherDataReducer;
