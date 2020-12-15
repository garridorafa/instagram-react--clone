import { Schema } from 'mongoose';

export const PostSchema = new Schema({
  username: String,
  avatar: String,
  caption: String,
  image: String,
  postLikes: String,
  coments: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})