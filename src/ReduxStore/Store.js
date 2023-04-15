import { legacy_createStore as createStore } from "redux";
import dataReducer from "../Reducer/Reducer";

export const store = createStore(
  dataReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
