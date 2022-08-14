import React from 'react';
import PropTypes from 'prop-types';

import IngredientsItem from '../ingredients-item/ingredients-item';

import { ingredientTypes } from '../../utils/types';
import styles from './ingredients-list.module.css';

function IngredientsList({ title, data, onOpen }) {
  return (
    <div className={styles.ingridientsListWrapper}>
      <p className="text text_type_main-medium mb-6">{title}</p>
      <ul className={styles.ingridientsList}>
        {data.map((item) => (
          <li key={item._id}>
            <IngredientsItem data={item} onOpen={onOpen} />
          </li>
        ))}
      </ul>
    </div>
  );
}

IngredientsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredientTypes)).isRequired,
  title: PropTypes.string.isRequired,
};

export default IngredientsList;
