import React, { useState, useContext } from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsList from '../ingredients-list/ingredients-list';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import { IngredientsContext } from '../../services/ingredientsContext';

import styles from './burger-ingredients.module.css';

function BurgerIngredients() {
  const [current, setCurrent] = useState('one');
  const [modalVisible, setModalVisible] = useState(false);
  const [targetIngredient, setTargetIngredient] = useState(null);
  const { ingredientsData: data } = useContext(IngredientsContext);

  const bun = data.filter((item) => item.type === 'bun');
  const sauce = data.filter((item) => item.type === 'sauce');
  const main = data.filter((item) => item.type === 'main');

  const handleOpenModal = (ingridient) => {
    setModalVisible(true);
    setTargetIngredient(ingridient);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
      <div className={styles.tabs}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.ingredientsList}>
        <IngredientsList title="Булки" data={bun} onOpen={handleOpenModal} />
        <IngredientsList title="Соусы" data={sauce} onOpen={handleOpenModal} />
        <IngredientsList title="Начинки" data={main} onOpen={handleOpenModal} />
      </div>
      <div className={styles.ingredientsModal}>
        <Modal title="Детали ингредиента" onClose={handleCloseModal} isOpen={modalVisible}>
          <IngredientDetails data={targetIngredient} />
        </Modal>
      </div>
    </div>
  );
}

export default BurgerIngredients;
