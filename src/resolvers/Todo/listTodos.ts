import Todo from '@schemas/Todo';

export async function listTodos() {
  const todos = await Todo.find();

  return todos;
}
