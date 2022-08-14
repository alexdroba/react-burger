import React from 'react';
import PropTypes from 'prop-types';

import IngredientsItem from '../ingredients-item/ingredients-item';

import styles from './ingredients-list.module.css';

function IngredientsList({ title, data }) {
  return (
    <div className={styles.ingridientsListWrapper}>
      <p className="text text_type_main-medium mb-6">{title}</p>
      <ul className={styles.ingridientsList}>
        {data.map((item) => (
          <li key={item._id}>
            <IngredientsItem data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

IngredientsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default IngredientsList;
