const storageKey = "todoAppStorage";
const loadState = () => {
  try {
    const serializedState = localStorage.getItem(storageKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};
const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(storageKey, serializedState);
  } catch (err) {
    console.log(err);
  }
};

export {loadState, saveState};