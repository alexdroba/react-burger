import { combineReducers } from 'redux';

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from '../actions/index';

const ingredientsInitialState = {
  isLoading: false,
  hasError: false,
  ingredientsData: [],
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

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
});
