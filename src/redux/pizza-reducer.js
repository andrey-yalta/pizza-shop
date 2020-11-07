

import {pizzaAPI} from "../api/api";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_PIZZAS = "SET_PIZZAS";

let initialState = {
    pizzas:[],
    isFetching:false,
};

const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_PIZZAS:
            return {
                ...state,pizzas: action.pizzas,
            }
        default:
            return state;
    }
}
export default pizzaReducer;

export const toggleIsFetching = (isFetching) =>{
    return{type:TOGGLE_IS_FETCHING, isFetching}
}
export const setPizzas = (pizzas) =>{
    return {type:SET_PIZZAS,pizzas}
};

export const getPizzas = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true)); //эта херня нужная чтобы включать и выключать анимацию
        let data = await pizzaAPI.getPizzas();
        dispatch(toggleIsFetching(false));
        dispatch(setPizzas(data.pizzas));
    }
}