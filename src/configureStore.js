import { loadState, saveState } from "./localStorage";
import { createStore, combineReducers } from "redux";
import todos from "../src/reducers/todosReducer";

const configureStore = () => {
  let todoApp = combineReducers({
    todos
  });

  let store = createStore(todoApp, loadState());
  store.subscribe(() => console.log(store.getState()));
  store.subscribe(() => saveState({ todos: store.getState().todos }));
  return store;
};

export default configureStore;
