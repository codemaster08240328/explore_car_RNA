import {createStore, applyMiddleware, combineReducers} from "redux";
import * as reducers from "./reducers/index";
import thunk from "redux-thunk";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const configureStore = createStoreWithMiddleware(reducer);



export default configureStore;