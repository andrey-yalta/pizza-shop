import React from "react";
import {Categories} from "./Categories";
import {Sort} from "./Sort/Sort";
import {PizzaCart} from "./pizzaCart/PizzaCart";
const categoriesArray = ["Мясные", "Вегетерианские", "Острые","Гриль", "Закрытые"]
export const Home =()=>{
    return(<div>
        <div className="wrapper">

            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories items={categoriesArray}/>
                    <Sort items={["популярности", "цене","алфавиту"]}/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <PizzaCart/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}