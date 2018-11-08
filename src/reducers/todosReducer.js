import { combineReducers } from "redux";

const byId = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_TODOS":
      console.log("byId received todos:", state);
      const nextState = { ...state };
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
};

const receiveTodos = (state, action) => {
  switch (action.type) {
    case "RECEIVE_TODOS":
      console.log("receiveTodos received todos:", state);
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  if (action.filter !== "all") return state;
  return receiveTodos(state, action);
};

const activeIds = (state = [], action) => {
  if (action.filter !== "active") return state;
  return receiveTodos(state, action);
};

const completedIds = (state = [], action) => {
  if (action.filter !== "completed") return state;
  return receiveTodos(state, action);
};

const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds
});

const todos = combineReducers({
  byId,
  idsByFilter
});

export default todos;

//selectors

export const getVisibleTodos = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
};