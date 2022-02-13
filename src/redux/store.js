import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userDataReducer from "./reducers/UserDataReducer";
import weatherDataReducer from "./reducers/WeatherDataReducer";

const persistConfig = {
  key: "primary",
  storage,
};

const persistReduce = persistReducer(
  persistConfig,
  userDataReducer,
  weatherDataReducer
);

export default () => {
  let store = createStore(persistReduce);
  let persistor = persistStore(store);
  return { store, persistor };
};
