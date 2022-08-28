import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ConstructorIngredientsItem from '../constructor-ingredients-item/constructor-ingredients-item';

import {
  deleteIngredientConstructor,
  updateIngredientConstructor,
} from '../../services/actions/index';

import styles from './constructor-ingredients-list.module.css';

function ConstructorIngredientsList({ data }) {
  const { ingredients } = useSelector((state) => state.constructorIngredients);
  const dispatch = useDispatch();

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = ingredients[dragIndex];
      const newCards = [...ingredients];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);
      console.log('SPL', newCards);

      dispatch(updateIngredientConstructor(newCards));
    },
    [ingredients, dispatch],
  );

  return (
    <>
      {data.map((item, index) => (
        <ConstructorIngredientsItem
          key={item._dndid}
          index={index}
          item={item}
          moveCard={moveCard}
        />
      ))}
    </>
  );
}

export default ConstructorIngredientsList;
