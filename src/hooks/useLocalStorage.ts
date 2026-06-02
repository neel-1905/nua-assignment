export const useLocalStorage = (key: string) => {
  const setItem = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = () => {
    return JSON.parse(localStorage.getItem(key) || "null");
  };

  const removeItem = () => {
    localStorage.removeItem(key);
  };

  const clear = () => {
    localStorage.clear();
  };

  return {
    setItem,
    getItem,
    removeItem,
    clear,
  };
};
