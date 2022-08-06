import React from 'react';

import IngredientsItem from '../ingredients-item/ingredients-item';

import styles from './ingredients-list.module.css';

function IngredientsList(props) {
  return (
    <div className={styles.ingridientsListWrapper}>
      <p className="text text_type_main-medium mb-6">{props.title}</p>
      <ul className={styles.ingridientsList}>
        {props.data.map((item) => (
          <li key={item._id}>
            <IngredientsItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
