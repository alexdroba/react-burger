import { BASE_URL_INGREDIENTS, BASE_URL_ORDERS } from '../../utils/consts';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const GET_TARGET_INGREDIENT = 'GET_TARGET_INGREDIENT';
export const DELETE_TARGET_INGREDIENT = 'DELETE_TARGET_INGREDIENT';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

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
