

import {pizzaAPI} from "../api/api";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_PIZZAS = "SET_PIZZAS";
const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
const SET_SELECTED_SORT_BY = "SET_SELECTED_SORT_BY";

let initialState = {
    pizzas:[],
    isFetching:false,
    SelectedCategory:null,
    SelectedSortBy:0,
    categories: ["Мясные", "Вегетерианские", "Острые","Гриль", "Закрытые"],
    sortsArray:[ { name: 'популярности', type: 'popular', order: 'desc' },
                 { name: 'цене', type: 'price', order: 'desc' },
                 { name: 'алфавит', type: 'name', order: 'asc' }]

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
        case SET_SELECTED_CATEGORY:
            return {
                ...state,SelectedCategory: action.SelectedCategory,
            }
        case SET_SELECTED_SORT_BY:
            return {
                ...state,SelectedSortBy: action.SelectedSortBy,
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
export const setSelectedCategory = (SelectedCategory) =>{
    return {type:SET_SELECTED_CATEGORY,SelectedCategory}
};
export const setSelectedSortBy = (SelectedSortBy) =>{
    return {type:SET_SELECTED_SORT_BY,SelectedSortBy}
};

export const getPizzas = (category,SelectedSortBy) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true)); //эта херня нужная чтобы включать и выключать анимацию
        let data = await pizzaAPI.getPizzas(category,SelectedSortBy);
        dispatch(toggleIsFetching(false));
        dispatch(setPizzas(data));
    }
}