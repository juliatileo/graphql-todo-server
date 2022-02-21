import { Schema, model } from 'mongoose';

const TodoSchema: Schema = new Schema({
  title: String,
  done: Boolean,
});

export default model('Todo', TodoSchema);
