import React, { useState, useEffect } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { IngredientsContext } from '../../services/ingredientsContext';
import { getIngredientsData } from '../../utils/api';

import styles from './app.module.css';

function App() {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </div>
    </>
  );
}

export default App;
