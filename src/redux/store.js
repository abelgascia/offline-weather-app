import { createStore } from "redux";
import dataReducer from "./reducers/dataReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "primary",
  storage,
};

const persistReduce = persistReducer(persistConfig, dataReducer);

export default () => {
  let store = createStore(persistReduce);
  let persistor = persistStore(store);
  return { store, persistor };
};
