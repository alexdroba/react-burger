import { API_URL } from './consts';

export const getIngredientsData = (state, setState) => {
  return fetch(API_URL)
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
