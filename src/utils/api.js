import { BASE_URL_INGREDIENTS, BASE_URL_ORDERS } from './consts';

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`));

export const getIngredientsData = (state, setState) => {
  return fetch(BASE_URL_INGREDIENTS)
    .then(checkResponse)
    .then((data) => setState({ ...state, ingredientsData: data.data, isLoading: false }))
    .catch((e) => {
      setState({ ...state, hasError: true, isLoading: false });
    });
};

export const getOrderData = (state, setState, idIngredients) => {
  return fetch(BASE_URL_ORDERS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ ingredients: idIngredients }),
  })
    .then(checkResponse)
    .then((data) => setState({ ...state, order: data.order.number, isLoading: false }))
    .catch((e) => {
      setState({ ...state, hasError: true, isLoading: false });
    });
};
