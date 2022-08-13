import React from 'react';

import styles from './ingredient-details.module.css';

function IngredientDetails(props) {
  return (
    <div>
      <div className={styles.ingredient}>
        <img src={props.image_large} alt={props.name} />
        <p className="text text_type_main-medium pt-4 pb-8">{props.name}</p>
        <ul className={styles.ingredientPropertyList}>
          <li className={styles.ingredientPropertyItem}>
            <p className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</p>
            <p className="text text_type_digits-default text_color_inactive">{props.calories}</p>
          </li>
          <li className={styles.ingredientPropertyItem}>
            <p className="text text_type_main-default text_color_inactive mb-2">Белки, г</p>
            <p className="text text_type_digits-default text_color_inactive">{props.proteins}</p>
          </li>
          <li className={styles.ingredientPropertyItem}>
            <p className="text text_type_main-default text_color_inactive mb-2">Жиры, г</p>
            <p className="text text_type_digits-default text_color_inactive">{props.fat}</p>
          </li>
          <li className={styles.ingredientPropertyItem}>
            <p className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</p>
            <p className="text text_type_digits-default text_color_inactive">
              {props.carbohydrates}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default IngredientDetails;
