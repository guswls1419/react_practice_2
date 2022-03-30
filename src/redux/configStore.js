import { DEFAULT_BREAKPOINTS } from "react-bootstrap/esm/ThemeProvider";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import skilled from "./modules/skilled";

const middlewares = [thunk];
const rootReducer = combineReducers({skilled});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;