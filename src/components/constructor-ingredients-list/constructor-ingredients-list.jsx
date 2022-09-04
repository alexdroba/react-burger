import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ConstructorIngredientsItem from '../constructor-ingredients-item/constructor-ingredients-item';

import { updateIngredientConstructor } from '../../services/actions/index';

import { ingredientTypes } from '../../utils/types';
import styles from './constructor-ingredients-list.module.css';

function ConstructorIngredientsList({ data }) {
  const dispatch = useDispatch();

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = data[dragIndex];
      const newCards = [...data];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);

      dispatch(updateIngredientConstructor(newCards));
    },
    [data, dispatch],
  );

  return data.map((item, index) => (
    <ConstructorIngredientsItem key={item._dndid} index={index} item={item} moveCard={moveCard} />
  ));
}

ConstructorIngredientsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredientTypes)).isRequired,
};

export default ConstructorIngredientsList;
