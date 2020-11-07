import * as axios from "axios";


const instance = axios.create({
    baseURL:`http://localhost:3000/db.json`

});


export const pizzaAPI  = {
    getPizzas ()   {
        return instance.get()
            .then(response=> {
                return response.data})
    }
}