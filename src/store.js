import { configureStore, applymiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
("redux-devtools-extension");
import { thunk } from "redux-thunk";
import RootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = configureStore(
  RootReducer,
  initialState,
  composeWithDevTools(applymiddleware(...middleware))
);

export default store;
