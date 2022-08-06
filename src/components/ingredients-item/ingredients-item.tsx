import React from 'react';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredients-item.module.css';

function IngredientsItem(props) {
  console.log(props, 'ITEM');

  return (
    <div className={styles.ingredientsItem}>
      <img src={props.image} alt="ingredient-img" />
      <p
        className="text text_type_digits-default mt-1 mb-1"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span className="mr-2">{props.price}</span>
        <CurrencyIcon type="primary" />
      </p>
      <p className="text text_type_main-default" style={{ minHeight: 48 }}>
        {props.name}
      </p>
      <Counter count={1} size="default" />
    </div>
  );
}

export default IngredientsItem;
