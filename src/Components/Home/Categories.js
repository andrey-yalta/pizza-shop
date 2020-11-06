import React from "react";


export const Categories =(props)=>{

    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index)=>{
        setActiveItem(index);
    }

    return(
        <div className="categories">
            <ul>
                <li className={activeItem === null? "active":""} onClick={()=>onSelectItem(null)}>Все</li>

                {props.items && props.items.map((name,index)=>(
                    <li className={activeItem === index? "active":""}
                        onClick={()=>onSelectItem(index)}
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
