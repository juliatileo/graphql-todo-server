import { Schema, model } from 'mongoose';

interface Todo {
  title: string;
  done: boolean;
}

const TodoSchema: Schema = new Schema<Todo>({
  title: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
});

export default model<Todo>('Todo', TodoSchema);
