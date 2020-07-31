
import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
// ***** components ***** //

const controls = [
   {
      label: 'salad',
      type: 'salad'
   },
   {
      label: 'meat',
      type: 'meat'
   }, {
      label: 'cheese',
      type: 'cheese',
   }, {
      label: 'bacon',
      type: 'bacon'
   }
];

const BuildControls = (props) => (

      <div className={classes.BuildControls}>
      <p>Current price: <strong>${props.price.toFixed(2)}</strong></p>
         {controls.map(control => (
         <BuildControl 
         key = {control.label} 
         label = {control.label}
         added ={() => props.ingredientAdded(control.type)}
         removed = {() => props.ingredientRemove(control.type)}
         disabled = {props.disabled[control.type]}
         /> 
         ))}
         <button 
            className = {classes.OrderButton}
            disabled = {!props.purchasable}>
               ORDER NOW!!!
         </button>
      </div>
   );

export default BuildControls;
