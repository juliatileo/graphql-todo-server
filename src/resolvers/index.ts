import { listTodos } from './Todo/listTodos';
import { createTodo } from './Todo/createTodo';
import { updateTodo } from './Todo/updateTodo';
import { deleteTodo } from './Todo/deleteTodo';

export default {
  Query: {
    todos: () => listTodos(),
  },
  Mutation: {
    createTodo: (_, { title }) => createTodo(title),
    updateTodo: (_, { id, title, done }) => updateTodo(id, title, done),
    deleteTodo: (_, { id }) => deleteTodo(id),
  },
};
