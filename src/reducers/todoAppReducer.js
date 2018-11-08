import { combineReducers } from "redux";
import todos, * as fromTodos from "./todosReducer";

let todoApp = combineReducers({
  todos
});

export default todoApp;

// selectors

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter);
