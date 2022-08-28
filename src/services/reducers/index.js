import { combineReducers } from 'redux';
import { v1 as random } from 'uuid';

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_TARGET_INGREDIENT,
  DELETE_TARGET_INGREDIENT,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  GET_TOTAL_PRICE,
  ADD_INGREDIENT_CONSTRUCTOR,
  DELETE_INGREDIENT_CONSTRUCTOR,
  SWITCH_BUNS_INGREDIENT_CONSTRUCTOR,
  UPDATE_INGREDIENT_CONSTRUCTOR,
} from '../actions/index';

const ingredientsInitialState = {
  isLoading: false,
  hasError: false,
  ingredientsData: [],
};

const targetIngredientInitialState = {
  ingredient: {},
};

const orderInitialState = {
  isLoading: false,
  hasError: false,
  order: {},
};

const totalPriceInitialState = { sum: 0 };

const constructorInitialState = {
  ingredients: [],
};

const ingredientsReducer = (state = ingredientsInitialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredientsData: action.ingredientsData,
        isLoading: false,
      };
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
};

const targetIngredientReducer = (state = targetIngredientInitialState, action) => {
  switch (action.type) {
    case GET_TARGET_INGREDIENT: {
      return {
        ...state,
        ingredient: action.ingredient,
      };
    }
    case DELETE_TARGET_INGREDIENT: {
      return {
        ...state,
        ingredient: {},
      };
    }
    default: {
      return state;
    }
  }
};

const orderReducer = (state = orderInitialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
        isLoading: false,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

const totalPriceReducer = (state = totalPriceInitialState, action) => {
  switch (action.type) {
    case GET_TOTAL_PRICE:
      const total = action.ingredients.reduce((acc, item) => acc + item.price, 0);
      return {
        ...state,
        sum: total,
      };
    default: {
      return state;
    }
  }
};

const constructorReducer = (state = constructorInitialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_CONSTRUCTOR:
      return {
        ...state,
        ingredients: [...state.ingredients, { ...action.data, _dndid: random() }],
      };
    case DELETE_INGREDIENT_CONSTRUCTOR:
      return {
        ...state,
        ingredients: state.ingredients.filter((item) => item._dndid !== action.data._dndid),
      };
    case SWITCH_BUNS_INGREDIENT_CONSTRUCTOR:
      return {
        ...state,
        ingredients: [...state.ingredients.filter((item) => item.type !== 'bun'), action.data],
      };
    case UPDATE_INGREDIENT_CONSTRUCTOR:
      return {
        ...state,
        ingredients: [...action.data],
      };
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  targetIngredient: targetIngredientReducer,
  order: orderReducer,
  totalPrice: totalPriceReducer,
  constructorIngredients: constructorReducer,
});
