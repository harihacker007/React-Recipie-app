import React from 'react';
import style from './recipe.module.css'

const Recipe = ({Name,Calories,image,ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1>{Name}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                <li>
                    {ingredient.text} 
                </li>
            ))}
            </ol>
            <img className={style.image} src={image} alt="images"/>
            <p className={style.para}>{Calories} Calories</p>
        </div>
    );
};

export default Recipe;