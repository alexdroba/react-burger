import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import { ingredientTypes } from '../../utils/types';
import styles from './ingredients-item.module.css';

function IngredientsItem({ data, onOpen }) {
  const handleOpenModal = useCallback(() => {
    onOpen(data);
  }, [data]);

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: data,
  });

  const { ingredients, bun } = useSelector((state) => state.constructorIngredients);

  const counter = useMemo(() => {
    return data.type !== 'bun'
      ? ingredients.filter((item) => item._id === data._id).length
      : bun?._id === data._id
      ? 2
      : 0;
  }, [ingredients, bun]);

  return (
    <div className={styles.ingredientsItem} onClick={handleOpenModal} ref={dragRef}>
      <img src={data.image} alt={data.name} />
      <div className={styles.ingredientsItemPrice}>
        <span className="text text_type_digits-default mr-2">{data.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.ingredientsItemName}>
        <span className="text text_type_main-default">{data.name}</span>
      </div>
      {counter !== 0 && <Counter count={counter} size="default" />}
    </div>
  );
}

IngredientsItem.propTypes = {
  data: PropTypes.shape(ingredientTypes).isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default IngredientsItem;
