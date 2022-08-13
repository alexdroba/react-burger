import React, { useState, useEffect } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

// import { data } from '../../utils/data';

import styles from './app.module.css';

function App() {
  const dataUrl = 'https://norma.nomoreparties.space/api/ingredients';

  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    ingredientsData: [],
  });

  useEffect(() => {
    const getData = async () => {
      setState({ ...state, hasError: false, isLoading: true });
      const res = await fetch(dataUrl);
      const data = await res.json();
      setState({ ...state, ingredientsData: data.data, isLoading: false });
    };

    getData();
  }, []);

  const { ingredientsData, isLoading, hasError } = state;

  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <BurgerIngredients data={ingredientsData} />
        <BurgerConstructor data={ingredientsData} />
      </div>
    </>
  );
}

export default App;
