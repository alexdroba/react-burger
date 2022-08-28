import { combineReducers } from 'redux';

const ingredientsInitialState = {
  isLoading: false,
  hasError: false,
  ingredientsData: [],
};

const ingredientsReducer = (state = ingredientsInitialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
});
