const todo = (todo, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
      if (todo.id === action.id) {
        const result = { id: todo.id, text: todo.text, completed: !todo.completed };
        return result;
      } else {
        return todo;
      }
    default:
      return todo;
  }
};

export default todo;