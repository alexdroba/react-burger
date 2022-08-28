import React, { useState, useContext, useEffect, useReducer, useMemo } from 'react';

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { IngredientsContext } from '../../services/ingredientsContext';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

import { getOrderData } from '../../utils/api';
import { SET_TOTAL_PRICE, RESET_TOTAL_PRICE } from '../../actions/types';

import styles from './burger-constructor.module.css';

const totalPriceInitialState = { sum: 0 };

function reducer(state, action) {
  switch (action.type) {
    case SET_TOTAL_PRICE:
      const totalBunPrice = action.bun.price * 2;
      const totalIngrediensPrice = action.ingredients.reduce(
        (acc, item) => acc + item.price,
        state.sum,
      );
      return { sum: totalBunPrice + totalIngrediensPrice };
    case RESET_TOTAL_PRICE:
      return totalPriceInitialState;
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function BurgerConstructor() {
  const [modalVisible, setModalVisible] = useState(false);
  const [stateOrder, setStateOrder] = useState({
    isLoading: false,
    hasError: false,
    order: 0,
  });
  const { ingredientsData: data } = useContext(IngredientsContext);
  const [totalPriceState, totalPriceDispatcher] = useReducer(
    reducer,
    totalPriceInitialState,
    undefined,
  );

  const bun = useMemo(() => data.filter((item) => item.type === 'bun')[0], data);
  const ingredients = useMemo(() => data.filter((item) => item.type !== 'bun'), data);

  const handleOpenModal = () => {
    const idIngredients = data.map((item) => item._id);
    setModalVisible(true);
    getOrderData(stateOrder, setStateOrder, idIngredients);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    totalPriceDispatcher({ type: SET_TOTAL_PRICE, bun, ingredients });
  }, [data]);

  const { order } = stateOrder;

  return (
    <div className={styles.constructorWrapper}>
      <div className="mb-10">
        <div className={styles.constructorFirstItem}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name + ' (верх)'}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <ul className={styles.constructor}>
          {ingredients.map((item) => (
            <li className={styles.constructorItem} key={item._id}>
              <DragIcon type="primary" />
              <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
            </li>
          ))}
        </ul>
        <div className={styles.constructorLastItem}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name + ' (низ)'}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>
      <div className={styles.constructorTotal}>
        <p className="text text_type_digits-medium">{totalPriceState.sum}</p>
        <CurrencyIcon type="primary" />
        <Button type="primary" size="large" onClick={handleOpenModal}>
          Оформить заказ
        </Button>
      </div>
      <Modal onClose={handleCloseModal} isOpen={modalVisible}>
        <OrderDetails orderNumber={order} />
      </Modal>
    </div>
  );
}

export default BurgerConstructor;
