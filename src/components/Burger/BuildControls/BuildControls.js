
import React from 'react';
import styles from './BuildControls.module.css';
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

      <div className={styles.buildControls}>
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
            className = {styles.orderButton}
            disabled = {!props.purchasable}
            onClick={props.ordered}
         >
            ORDER NOW!!!
         </button>
      </div>
   );

export default BuildControls;
