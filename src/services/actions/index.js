import { BASE_URL_INGREDIENTS } from '../../utils/consts';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

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
