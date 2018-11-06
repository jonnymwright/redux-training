import uuid from 'uuid';

const addTodo = text => {
  return {
    type: "ADD_TODO",
    id: uuid.v4(),
    text
  };
};

export default addTodo;