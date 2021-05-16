const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const ADD_PIZZA_TO_CART = "ADD_PIZZA_TO_CART";
const CLEAR_CART = "CLEAR_CART";
const REMOVE_ITEM = "REMOVE_ITEM";
const MINUS_CART_ITEM = "MINUS_CART_ITEM";
const PLUS_CART_ITEM = "PLUS_CART_ITEM";


let initialState = {
    items: {},
    totalPrice:0,
    totalCount:0,
    isFetching:false,

};

const getTotalPrice =arr =>arr.reduce((sum,obj)=>obj.price +sum,0);



const _get = (obj, path) => {
    // ёбаная хуйня чтобы доставать значения из пути и разделять их норально. Ёбаный костыль. 2:05:00
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    //тоже саоме что выше, это типа оптимизация и устанение дублирования кода но по факту ёбаный костыль
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case ADD_PIZZA_TO_CART:{
            const currentPizzaItems = !state.items[action.pizza.id]
                ? [action.pizza]
                :[...state.items[action.pizza.id].items  ,action.pizza];

            const newItems ={
                ...state.items,
                [action.pizza.id]: {

                    items:currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                },
            }
            // надо устранить  дублирование кода
            // const totalCount = Object.keys(newItems).reduce((sum,key)=> newItems[key].items.length +sum,0 );
            // const totalPrice = Object.keys(newItems).reduce((sum,key)=> newItems[key].totalPrice +sum,0 );
            const totalCount = getTotalSum(newItems, 'items.length');// устранение того что выше этим = ёбаный костыль
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items:newItems,
                totalCount: totalCount,
                totalPrice: totalPrice,
                // сложная хуйня. типа проходится по всем элементам, достаёт сумму и плюсует в новый обьект
                //надо изучить reduce
            }
        }
        case CLEAR_CART:{

            return {
                ...state,
                items: {},
                totalPrice:0,
                totalCount:0,
            }}
        case REMOVE_ITEM:{

            const newItems = {...state.items};
            const currentTotalPrice = newItems[action.id].totalPrice;
            const currentTotalCount = newItems[action.id].items.length;

            delete newItems[action.id];

            return {
                ...state,
                items:newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }}

        case 'PLUS_CART_ITEM': {
            const newObjItems = [
                ...state.items[action.id].items,
                state.items[action.id].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.id]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.id].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.id].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.id]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }
        default:
            return state;
    }
}
export default cartReducer;

export const toggleIsFetching = (isFetching) =>{
    return{type:TOGGLE_IS_FETCHING, isFetching}
}
export const addPizzaToCart = (pizza) =>{
    return {type:ADD_PIZZA_TO_CART,pizza}
};
export const clearCart = () =>{

    return {type:CLEAR_CART}
};
export const removeItem = (id) =>{
    return {type:REMOVE_ITEM,id}
};
export const plusCartItem = (id) =>{

    return {type:PLUS_CART_ITEM,id}
};
export const minusCartItem = (id) =>{

    return {type:MINUS_CART_ITEM,id}
};