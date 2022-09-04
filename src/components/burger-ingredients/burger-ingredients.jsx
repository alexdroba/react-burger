import React, { useState, useMemo, useRef, useEffect } from 'react';
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
  const listIngredients = useRef(null);

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

  const handleClickTab = (tab) => {
    tab.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleListScroll = () => {
    const listTop = listIngredients.current.offsetTop;
    const bunsTop = categoryBuns.current.getBoundingClientRect().top;
    const saucesTop = categorySauces.current.getBoundingClientRect().top;
    const mainTop = categoryMain.current.getBoundingClientRect().top;
    if (bunsTop - listTop <= 100) {
      setCurrentCategory('bun');
    }
    if (saucesTop - listTop <= 100) {
      setCurrentCategory('sauce');
    }
    if (mainTop - listTop <= 100) {
      setCurrentCategory('main');
    }
  };

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
            <div onClick={() => handleClickTab(categoryBuns)}>
              <Tab value="bun" active={currentCategory === 'bun'} onClick={setCurrentCategory}>
                Булки
              </Tab>
            </div>
            <div onClick={() => handleClickTab(categorySauces)}>
              <Tab value="sauce" active={currentCategory === 'sauce'} onClick={setCurrentCategory}>
                Соусы
              </Tab>
            </div>
            <div onClick={() => handleClickTab(categoryMain)}>
              <Tab value="main" active={currentCategory === 'main'} onClick={setCurrentCategory}>
                Начинки
              </Tab>
            </div>
          </div>
          <div className={styles.ingredientsList} onScroll={handleListScroll} ref={listIngredients}>
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
