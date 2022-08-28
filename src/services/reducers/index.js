import { combineReducers } from 'redux';

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_TARGET_INGREDIENT,
  DELETE_TARGET_INGREDIENT,
} from '../actions/index';

const ingredientsInitialState = {
  isLoading: false,
  hasError: false,
  ingredientsData: [],
};

const targetIngredientInitialState = {
  ingredient: {},
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

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  targetIngredient: targetIngredientReducer,
});
