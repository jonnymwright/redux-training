import { loadState, saveState } from "./localStorage";
import { createStore } from "redux";
import todoApp from "../src/reducers/todoAppReducer";

const configureStore = () => {
  let store = createStore(todoApp, loadState());
  store.subscribe(() => console.log(store.getState()));
  store.subscribe(() => saveState({ todos: store.getState().todos }));
  return store;
};

export default configureStore;
