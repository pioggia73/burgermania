import React from 'react';
import Button from '../../UI/Button/Button';


const OrderSummary = (props) => {
  
   const ingredientSummary = Object.keys(props.ingredients)
   .map(ingredientKey => {
      return (
        <li key={ingredientKey}>
         <span style={{textTransform:'capitalize'}}>{ingredientKey}</span> 
         : {props.ingredients[ingredientKey]}
        </li>
      );
   })

   return (
      <>
        <h3>Your order</h3> 
        <p>A delicious burger with the following ingredients:</p>
        <ul>
         {ingredientSummary}
        </ul>
   <p><strong>Total Price: $ {props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button  btnType='Danger' clicked={props.purchasedCanceled}>CANCEL</Button>
        <Button  btnType='Success' clicked={props.purchasedContinued}>CONTINUE</Button>
      </>
   )
};

export default OrderSummary;
