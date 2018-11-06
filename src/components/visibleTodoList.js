import { connect } from "react-redux";
import TodoList from "./todoList";
import toggleTodo from "../actionCreators/toggleTodoActionCreator";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.completed);
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
    default:
      return [];
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id))
  };
};
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
