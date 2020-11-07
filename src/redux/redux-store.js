import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunkMiddleware from "redux-thunk";
// import  {reducer as formReducer} from "redux-form"
import pizzaReducer from "./pizza-reducer";


let reducers = combineReducers({
    homePage:pizzaReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;