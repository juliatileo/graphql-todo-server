import Todo from '@schemas/Todo';

export async function deleteTodo(id: string) {
  const todo = await Todo.findByIdAndDelete(id);

  return todo;
}
