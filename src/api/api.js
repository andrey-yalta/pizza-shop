import * as axios from "axios";


const instance = axios.create({
    baseURL:`/pizzas/`

});


export const pizzaAPI  = {
    getPizzas (category=null, SelectedSortBy)   {
        // debugger;
        return instance.get(`${category !== null ? `?category=${category}` : '?'}&_sort=${SelectedSortBy.type}&_order=${
            SelectedSortBy.order
        } ` )
            .then(response=> {
                return response.data})
    }
}