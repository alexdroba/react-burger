import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import { ingredientTypes } from '../../utils/types';
import styles from './ingredients-item.module.css';

function IngredientsItem({ data, onOpen }) {
  const handleOpenModal = useCallback(() => {
    onOpen(data);
  }, [data]);

  return (
    <div className={styles.ingredientsItem} onClick={handleOpenModal}>
      <img src={data.image} alt={data.name} />
      <div className={styles.ingredientsItemPrice}>
        <span className="text text_type_digits-default mr-2">{data.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.ingredientsItemName}>
        <span className="text text_type_main-default">{data.name}</span>
      </div>
      <Counter count={1} size="default" />
    </div>
  );
}

IngredientsItem.propTypes = {
  data: PropTypes.shape(ingredientTypes).isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default IngredientsItem;
