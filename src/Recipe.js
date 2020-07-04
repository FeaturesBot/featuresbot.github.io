import React from 'react';
import Test from './logo.svg';
import './Recipe.css';

function Recipe({title, cookTime, prepTime, Author, content}){
    return(
        <div className="">
        <p>{title}</p>
    <h4>Cook Time: {cookTime} Prep Time: {prepTime}</h4>
            <p>{content}</p>
    <h4>Written By: {Author}</h4>
        </div>
    );
}
export default Recipe;