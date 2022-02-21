import Todo from '@schemas/Todo';

export async function createTodo(title: string) {
  const todo = await Todo.create({ title });

  return todo;
}
