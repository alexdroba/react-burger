import React from 'react';
import PropTypes from 'prop-types';

import IngredientDetailsProperty from '../ingredient-details-property/ingredient-details-property';

import { ingredientTypes } from '../../utils/types';
import styles from './ingredient-details.module.css';

function IngredientDetails({ data }) {
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

IngredientDetails.propTypes = {
  data: PropTypes.shape(ingredientTypes),
};

export default IngredientDetails;
