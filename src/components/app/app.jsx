import React, { useState, useEffect } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import { IngredientsContext } from '../../services/ingredientsContext';
import { getIngredientsData } from '../../utils/api';

import styles from './app.module.css';

function App() {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    ingredientsData: [],
  });

  useEffect(() => {
    getIngredientsData(state, setState);
  }, []);

  const { ingredientsData, isLoading, hasError } = state;

  return (
    <IngredientsContext.Provider value={{ ingredientsData }}>
      <AppHeader />
      <div className={styles.container}>
        {isLoading && 'Загрузка...'}
        {hasError && 'Произошла ошибка!'}
        {!isLoading && !hasError && ingredientsData.length && (
          <>
            <BurgerIngredients data={ingredientsData} />
            <BurgerConstructor />
          </>
        )}
      </div>
    </IngredientsContext.Provider>
  );
}

export default App;
