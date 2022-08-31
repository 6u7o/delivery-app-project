const sendToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getFromLocalStorage = (key) => {
  const getResult = localStorage.getItem(key) || '[]';
  return JSON.parse(getResult);
};

export {
  sendToLocalStorage,
  getFromLocalStorage,
};
