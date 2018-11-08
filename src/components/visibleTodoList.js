import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import TodoList from "./todoList";
import toggleTodo from "../actionCreators/toggleTodoActionCreator";
import { fetchTodos } from '../actionCreators/receiveTodosActionCreator';
import { getVisibleTodos } from "../reducers/todoAppReducer";

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || "all";
  return {
    todos: getVisibleTodos(state, filter),
    filter
  };
};
VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    { onTodoClick: toggleTodo, fetchTodos }
  )(VisibleTodoList)
);

export default VisibleTodoList;
