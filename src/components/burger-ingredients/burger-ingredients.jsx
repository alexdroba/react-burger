import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsList from '../ingredients-list/ingredients-list';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import { ingredientTypes } from '../../utils/types';
import styles from './burger-ingredients.module.css';

function BurgerIngredients({ data }) {
  const [current, setCurrent] = React.useState('one');

  const bun = data.filter((item) => item.type === 'bun');
  const sauce = data.filter((item) => item.type === 'sauce');
  const main = data.filter((item) => item.type === 'main');

  const [modalVisible, setModalVisible] = useState(false);
  const [ingridientsData, setIngridientsData] = useState(null);

  const handleOpenModal = (ingridient) => {
    setModalVisible(true);
    setIngridientsData(ingridient);
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
      <div style={{ overflow: 'hidden' }}>
        <Modal title="Детали ингредиента" onClose={handleCloseModal} isOpen={modalVisible}>
          <IngredientDetails data={ingridientsData} />
        </Modal>
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredientTypes)).isRequired,
};

export default BurgerIngredients;
