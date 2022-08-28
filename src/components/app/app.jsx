import React, { useState, useEffect } from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import { rootReducer } from '../../services/reducers/index';
import { IngredientsContext } from '../../services/ingredientsContext';
import { getIngredientsData } from '../../utils/api';

import styles from './app.module.css';

function App() {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  const enhancer = composeEnhancers(applyMiddleware(thunk));
  const store = createStore(rootReducer, enhancer);

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
    <Provider store={store}>
      <IngredientsContext.Provider value={{ ingredientsData }}>
        <AppHeader />
        <div className={styles.container}>
          {isLoading && 'Загрузка...'}
          {hasError && 'Произошла ошибка!'}
          {!isLoading && !hasError && ingredientsData.length && (
            <>
              <BurgerIngredients />
              <BurgerConstructor />
            </>
          )}
        </div>
      </IngredientsContext.Provider>
    </Provider>
  );
}

export default App;
