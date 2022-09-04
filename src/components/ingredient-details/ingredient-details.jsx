import React from 'react';
import { useSelector } from 'react-redux';

import IngredientDetailsProperty from '../ingredient-details-property/ingredient-details-property';

import styles from './ingredient-details.module.css';

function IngredientDetails() {
  const { ingredient: data } = useSelector((state) => state.targetIngredient);

  return (
    <div>
      <div className={styles.ingredient}>
        <img src={data.image_large} alt={data.name} />
        <p className="text text_type_main-medium pt-4 pb-8">{data.name}</p>
        <ul className={styles.ingredientPropertyList}>
          <li className={styles.ingredientPropertyItem}>
            <IngredientDetailsProperty title="Калории,ккал" value={data.calories} />
          </li>
          <li className={styles.ingredientPropertyItem}>
            <IngredientDetailsProperty title="Белки, г" value={data.proteins} />
          </li>
          <li className={styles.ingredientPropertyItem}>
            <IngredientDetailsProperty title="Жиры, г" value={data.fat} />
          </li>
          <li className={styles.ingredientPropertyItem}>
            <IngredientDetailsProperty title="Углеводы, г" value={data.carbohydrates} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default IngredientDetails;
