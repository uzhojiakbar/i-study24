export const getFromLS = (storage) => {
  return JSON.parse(localStorage.getItem(storage));
};

export const addToLS = (storage, data) => {
  return localStorage.setItem(storage, JSON.stringify(data));
};

export const clearLS = () => {
  return localStorage.clear();
};
