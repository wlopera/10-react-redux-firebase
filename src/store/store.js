import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import trunk from "redux-thunk";

import { authReducer } from "../reducers/authReducer";

const reducers = combineReducers({
  auth: authReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(trunk))
);
