import { BASE_URL_INGREDIENTS } from '../../utils/consts';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const GET_TARGET_INGREDIENT = 'GET_TARGET_INGREDIENT';
export const DELETE_TARGET_INGREDIENT = 'DELETE_TARGET_INGREDIENT';

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
