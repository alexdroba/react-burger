import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import { data } from '../../utils/data';

import styles from './app.module.css';

function App() {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </div>
    </>
  );
}

export default App;
