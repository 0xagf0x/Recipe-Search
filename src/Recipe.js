import React from 'react';
import style from './recipe.module.css'


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className='recipe'>
            <h1>{title}</h1>
            <p className="calories"><span className="calories-bold">Calories:</span><span className="calories-integer">{calories}</span></p>
            <ul className="ingredientsUL">{ingredients.map(ingredients => (
                <li>{ingredients.text}</li>
            ))}
            </ul>
            <img className='image' src={image} alt="" />
        </div>
    );
}


export default Recipe;

