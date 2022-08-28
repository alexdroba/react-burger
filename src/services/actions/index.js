import { BASE_URL_INGREDIENTS, BASE_URL_ORDERS } from '../../utils/consts';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const GET_TARGET_INGREDIENT = 'GET_TARGET_INGREDIENT';
export const DELETE_TARGET_INGREDIENT = 'DELETE_TARGET_INGREDIENT';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export const GET_TOTAL_PRICE = 'GET_TOTAL_PRICE';

export const ADD_INGREDIENT_CONSTRUCTOR = 'ADD_INGREDIENT_CONSTRUCTOR';
export const DELETE_INGREDIENT_CONSTRUCTOR = 'DELETE_INGREDIENT_CONSTRUCTOR';
export const SWITCH_BUNS_INGREDIENT_CONSTRUCTOR = 'SWITCH_BUNS_INGREDIENT_CONSTRUCTOR';
export const UPDATE_INGREDIENT_CONSTRUCTOR = 'UPDATE_INGREDIENT_CONSTRUCTOR';

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`));

export const getIngredientsData = () => {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    fetch(BASE_URL_INGREDIENTS)
      .then(checkResponse)
      .then((data) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredientsData: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      });
  };
};

export const getTargetIngredient = (ingredient) => {
  return {
    type: GET_TARGET_INGREDIENT,
    ingredient,
  };
};

export const deleteTargetIngredient = () => {
  return {
    type: DELETE_TARGET_INGREDIENT,
  };
};

export const getOrderData = (idIngredients) => {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    fetch(BASE_URL_ORDERS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ ingredients: idIngredients }),
    })
      .then(checkResponse)
      .then((data) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: data.order,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
        });
      });
  };
};

export const getTotalPrice = (ingredients) => {
  return {
    type: GET_TOTAL_PRICE,
    ingredients,
  };
};

export const addIngredientConstructor = (data) => {
  return {
    type: ADD_INGREDIENT_CONSTRUCTOR,
    data,
  };
};

export const deleteIngredientConstructor = (data) => {
  return {
    type: DELETE_INGREDIENT_CONSTRUCTOR,
    data,
  };
};

export const switchBunsIngredientConstructor = (data) => {
  return {
    type: SWITCH_BUNS_INGREDIENT_CONSTRUCTOR,
    data,
  };
};

export const updateIngredientConstructor = (data) => {
  return {
    type: UPDATE_INGREDIENT_CONSTRUCTOR,
    data,
  };
};
