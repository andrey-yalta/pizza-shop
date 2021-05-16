import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedCategory} from "../../redux/pizza-reducer";


export const Categories = React.memo(()=>{
    //  реакт мемо - это контроль что компонента перезагрузится только тогда, когда что-то изменится в стейте
        const dispatch = useDispatch();

        const SelectedCategory = useSelector(state => state.homePage.SelectedCategory);

        const onSelectCategoriesType = React.useCallback((type) => {
            dispatch(setSelectedCategory(type));
        }, []);

        const categories = useSelector(state => state.homePage.categories);

        console.log("render categories");
        return(
            <div className="categories">
                <ul>
                    <li className={SelectedCategory === null? "active":""} onClick={()=>onSelectCategoriesType(null)}>Все</li>

                    {categories && categories.map((name,index)=>(
                        <li className={SelectedCategory === index? "active":""}
                            onClick={()=>onSelectCategoriesType(index)}
                            key={`${name}_${index}`}
                        >
                            {name}
                        </li>
                    ))}

                    {/*{props.items.make(name=><li>{name}</li>)}*/}
                    {/*{props.items.map((u, index)=> <li key={`${u}_${index}`} onClick={(index)=>setActiveItem(index)}>{u}</li>)}*/}

                </ul>
            </div>
        )
    }
)