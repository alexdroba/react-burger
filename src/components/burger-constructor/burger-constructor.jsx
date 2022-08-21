import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { IngredientsContext } from '../../services/ingredientsContext';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

import { ingredientTypes } from '../../utils/types';
import styles from './burger-constructor.module.css';

function BurgerConstructor() {
  const [modalVisible, setModalVisible] = useState(false);
  const { ingredientsData: data } = useContext(IngredientsContext);

  const bun = data.filter((item) => item.type === 'bun')[0];
  const ingredients = data.filter((item) => item.type !== 'bun');

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

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
        <p className="text text_type_digits-medium">610</p>
        <CurrencyIcon type="primary" />
        <Button type="primary" size="large" onClick={handleOpenModal}>
          Оформить заказ
        </Button>
      </div>
      <div className={styles.constructorModal}>
        <Modal onClose={handleCloseModal} isOpen={modalVisible}>
          <OrderDetails />
        </Modal>
      </div>
    </div>
  );
}

export default BurgerConstructor;
