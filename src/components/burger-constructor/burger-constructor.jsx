import React, { useState, useEffect, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';

import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import ConstructorIngredientsList from '../constructor-ingredients-list/constructor-ingredients-list';

import {
  getOrderData,
  addIngredientConstructor,
  switchBunsIngredientConstructor,
  getTotalPrice,
  clearIngredientConstructor,
} from '../../services/actions/index';

import styles from './burger-constructor.module.css';

function BurgerConstructor() {
  const [modalVisible, setModalVisible] = useState(false);

  const { ingredients: data } = useSelector((state) => state.constructorIngredients);
  const { sum } = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();

  const bun = useMemo(() => data.filter((item) => item.type === 'bun')[0], [data]);
  const ingredients = useMemo(() => data.filter((item) => item.type !== 'bun'), [data]);

  const handleOpenModal = () => {
    const idIngredients = data.map((item) => item._id);
    setModalVisible(true);
    dispatch(getOrderData(idIngredients));
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    dispatch(clearIngredientConstructor());
  };

  const [{ isHover }, dropTargerRef] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(data) {
      if (data.type === 'bun') {
        dispatch(switchBunsIngredientConstructor(data));
      } else {
        dispatch(addIngredientConstructor(data));
      }
    },
  });

  useEffect(() => {
    dispatch(getTotalPrice(data));
  }, [data, dispatch]);

  return (
    <div className={styles.constructorWrapper} ref={dropTargerRef}>
      {data.length && bun ? (
        <>
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
            <div className={styles.constructor}>
              <ConstructorIngredientsList data={ingredients} />
            </div>
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
            <p className="text text_type_digits-medium">{sum}</p>
            <CurrencyIcon type="primary" />
            <Button type="primary" size="large" onClick={handleOpenModal}>
              Оформить заказ
            </Button>
          </div>
          <Modal onClose={handleCloseModal} isOpen={modalVisible}>
            <OrderDetails />
          </Modal>
        </>
      ) : (
        <p className="text text_type_main-medium">Сначала выберите булку</p>
      )}
    </div>
  );
}

export default BurgerConstructor;
