import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import styles from './ingredients-item.module.css';

function IngredientsItem({ data }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
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
      <div className={styles.ingredientsItemModal}>
        <Modal title="Детали ингредиента" onClose={handleCloseModal} isOpen={modalVisible}>
          <IngredientDetails data={data} />
        </Modal>
      </div>
    </>
  );
}

IngredientsItem.propTypes = {
  data: PropTypes.object,
};

export default IngredientsItem;
