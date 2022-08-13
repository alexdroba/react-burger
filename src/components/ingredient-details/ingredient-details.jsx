import React from 'react';

import IngredientDetailsProperty from '../ingredient-details-property/ingredient-details-property';

import styles from './ingredient-details.module.css';

function IngredientDetails(props) {
  return (
    <div>
      <div className={styles.ingredient}>
        <img src={props.image_large} alt={props.name} />
        <p className="text text_type_main-medium pt-4 pb-8">{props.name}</p>
        <ul className={styles.ingredientPropertyList}>
          <li className={styles.ingredientPropertyItem}>
            <IngredientDetailsProperty title="Калории,ккал" value={props.calories} />
          </li>
          <li className={styles.ingredientPropertyItem}>
            <IngredientDetailsProperty title="Белки, г" value={props.proteins} />
          </li>
          <li className={styles.ingredientPropertyItem}>
            <IngredientDetailsProperty title="Жиры, г" value={props.fat} />
          </li>
          <li className={styles.ingredientPropertyItem}>
            <IngredientDetailsProperty title="Углеводы, г" value={props.carbohydrates} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default IngredientDetails;
