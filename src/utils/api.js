import { API_URL_INGREDIENTS, API_URL_ORDERS } from './consts';

export const getIngredientsData = (state, setState) => {
  return fetch(API_URL_INGREDIENTS)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
    .then((data) => setState({ ...state, ingredientsData: data.data, isLoading: false }))
    .catch((e) => {
      setState({ ...state, hasError: true, isLoading: false });
    });
};

export const getOrderData = (state, setState, idIngredients) => {
  return fetch(API_URL_ORDERS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ ingredients: idIngredients }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
    .then((data) => setState({ ...state, order: data.order.number, isLoading: false }))
    .catch((e) => {
      setState({ ...state, hasError: true, isLoading: false });
    });
};
