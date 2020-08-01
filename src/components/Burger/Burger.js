import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
//import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

const Burger = (props) => {
   
   let ingredientsTransformedIntoArray = Object.keys(props.ingredients)
   .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
         return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
      })
   }).flat();

   if(ingredientsTransformedIntoArray.length === 0) {
      ingredientsTransformedIntoArray = <p>Please, start adding ingredients!!!</p>
   }
  
   return (
      <div className={styles.burger}>
         <BurgerIngredient type='bread-top'/>
            {ingredientsTransformedIntoArray}
         <BurgerIngredient type='bread-bottom' />
      </div>
   )
};

export default Burger;
