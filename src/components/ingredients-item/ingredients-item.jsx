import React, { useState } from 'react';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import Modal from '../modal/modal';

import styles from './ingredients-item.module.css';

function IngredientsItem(props) {
  const [state, setState] = useState({
    modalVisible: false,
  });

  const handleOpenModal = () => {
    setState({ ...state, modalVisible: true });
  };

  return (
    <>
      <div className={styles.ingredientsItem} onClick={handleOpenModal}>
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
      <div>{state.modalVisible && <Modal />}</div>
    </>
  );
}

export default IngredientsItem;
