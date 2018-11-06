import { connect } from "react-redux";
import { withRouter } from 'react-router'
import TodoList from "./todoList";
import toggleTodo from "../actionCreators/toggleTodoActionCreator";
import { getVisibleTodos } from '../reducers/todoAppReducer'

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state, ownProps.match.params.filter || 'all')
  };
};
const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;
