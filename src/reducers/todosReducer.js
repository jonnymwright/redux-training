import todo from "./todoReducer";
import { combineReducers } from "redux";

const byId = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
    case "TOGGLE_TODO":
      return {
        ...state, 
        [action.id]: todo(state[action.id], action)
      };
    default:
      return state;
  }
};

const allIds = (state=[], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.id];
    default:
      return state;
  }
}

const todos = combineReducers({
  byId, allIds
})

export default todos;

const getAllTodos = (state) => 
  state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case "all":
      return getAllTodos(state);
    case "active":
      return getAllTodos(state).filter(todo => !todo.completed);
    case "completed":
      return getAllTodos(state).filter(todo => todo.completed);
    default:
      return [];
  }
};
