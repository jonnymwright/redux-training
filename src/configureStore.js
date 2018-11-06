import { loadState, saveState } from "./localStorage";
import { createStore, combineReducers } from "redux";
import todos from "../src/reducers/todosReducer";
import visibilityFilter from "../src/reducers/visibilityFilterReducer";

const configureStore = () => {
  let todoApp = combineReducers({
    visibilityFilter,
    todos
  });

  let store = createStore(todoApp, loadState());
  store.subscribe(() => console.log(store.getState()));
  store.subscribe(() => saveState({ todos: store.getState().todos }));
  return store;
};

export default configureStore;
