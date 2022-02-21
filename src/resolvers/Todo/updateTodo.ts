import Todo from '@schemas/Todo';

export async function updateTodo(id: string, title: string, done: boolean) {
  const todo = await Todo.findByIdAndUpdate(id, { title, done });

  return todo;
}
