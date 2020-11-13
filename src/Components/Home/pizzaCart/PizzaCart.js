import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPizzas} from "../../../redux/pizza-reducer";
import {Pizza} from "./Pizza";
import Preloader from "../../../Assets/Preloader/Preloader";
import {addPizzaToCart} from "../../../redux/cart-reducer";

export const PizzaCart=()=>{

    const dispatch = useDispatch();
    const pizzas = useSelector(state => state.homePage.pizzas);
    const SelectedCategory = useSelector(state => state.homePage.SelectedCategory);
    const SelectedSortBy = useSelector(state => state.homePage.SelectedSortBy);
    const sortsArray = useSelector(state => state.homePage.sortsArray);
    const isFetching = useSelector(state => state.homePage.isFetching);

    const pizzaItems = useSelector(state => state.cartPage.items);

    const arrayOfTen = Array(10).fill(0);
    React.useEffect(()=>{
        dispatch(getPizzas(SelectedCategory,sortsArray[SelectedSortBy]));

    },[SelectedCategory,SelectedSortBy])

    const onPizzaAdd=(obj)=>{

        dispatch(addPizzaToCart(obj));
    }
    if(isFetching){
        return (<div>>{arrayOfTen.map((u,index)=>  < Preloader key={index}/>)}</div>)
    }
    return(

            <div className="content__items">{pizzas.map((u,index)=><Pizza  AddedPizzaItems={pizzaItems[u.id]&& pizzaItems[u.id].items.length}  handleAppPizza={onPizzaAdd} key={index} {...u}/> )}</div>


    )
}