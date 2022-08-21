import React, { useState, useEffect } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import { IngredientsContext } from '../../services/ingredientsContext';

import styles from './app.module.css';

function App() {
  const dataUrl = 'https://norma.nomoreparties.space/api/ingredients';

  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    ingredientsData: [],
  });

  const getIngredientsData = () => {
    return fetch(dataUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((data) => setState({ ...state, ingredientsData: data.data, isLoading: false }))
      .catch((e) => {
        setState({ ...state, hasError: true, isLoading: false });
      });
  };

  useEffect(() => {
    getIngredientsData();
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
