import { Schema } from 'mongoose';

export const PostSchema = new Schema({
  id: String,
  username: String,
  avatar: String,
  caption: String,
  image: String
});