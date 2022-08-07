import React from 'react';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredients-item.module.css';

function IngredientsItem(props) {
  return (
    <div className={styles.ingredientsItem}>
      <img src={props.image} alt={props.name} />
      <div className={styles.ingredientsItemPrice}>
        <span className="text text_type_digits-default mr-2">{props.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.ingredientsItemName}>
        <span className="text text_type_main-default">{props.name}</span>
      </div>
      <Counter count={1} size="default" />
    </div>
  );
}

export default IngredientsItem;
