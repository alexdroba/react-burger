import React, { useState, useContext, useMemo, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsList from '../ingredients-list/ingredients-list';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import {
  getIngredientsData,
  getTargetIngredient,
  deleteTargetIngredient,
} from '../../services/actions/index';

import styles from './burger-ingredients.module.css';

function BurgerIngredients() {
  const [currentCategory, setCurrentCategory] = useState('bun');
  const [modalVisible, setModalVisible] = useState(false);

  const { isLoading, hasError, ingredientsData: data } = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();

  const categoryBuns = useRef(null);
  const categorySauces = useRef(null);
  const categoryMain = useRef(null);

  const bun = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
  const sauce = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);
  const main = useMemo(() => data.filter((item) => item.type === 'main'), [data]);

  const handleOpenModal = (ingridient) => {
    setModalVisible(true);
    dispatch(getTargetIngredient(ingridient));
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    dispatch(deleteTargetIngredient());
  };

  // useEffect(() => {
  //   if (currentCategory === 'bun') {
  //     categoryBuns.current.scrollIntoView({ behavior: 'smooth' });
  //   } else if (currentCategory === 'sauce') {
  //     categorySauces.current.scrollIntoView({ behavior: 'smooth' });
  //   } else {
  //     categoryMain.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [currentCategory]);

  useEffect(() => {
    dispatch(getIngredientsData());
  }, [dispatch]);

  return (
    <div>
      {isLoading && 'Загрузка...'}
      {hasError && 'Произошла ошибка!'}
      {!isLoading && !hasError && data.length && (
        <>
          <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
          <div className={styles.tabs}>
            <Tab value="bun" active={currentCategory === 'bun'} onClick={setCurrentCategory}>
              Булки
            </Tab>
            <Tab value="sauce" active={currentCategory === 'sauce'} onClick={setCurrentCategory}>
              Соусы
            </Tab>
            <Tab value="main" active={currentCategory === 'main'} onClick={setCurrentCategory}>
              Начинки
            </Tab>
          </div>
          <div className={styles.ingredientsList}>
            <IngredientsList title="Булки" data={bun} onOpen={handleOpenModal} ref={categoryBuns} />
            <IngredientsList
              title="Соусы"
              data={sauce}
              onOpen={handleOpenModal}
              ref={categorySauces}
            />
            <IngredientsList
              title="Начинки"
              data={main}
              onOpen={handleOpenModal}
              ref={categoryMain}
            />
          </div>
          <Modal title="Детали ингредиента" onClose={handleCloseModal} isOpen={modalVisible}>
            <IngredientDetails />
          </Modal>
        </>
      )}
    </div>
  );
}

export default BurgerIngredients;
