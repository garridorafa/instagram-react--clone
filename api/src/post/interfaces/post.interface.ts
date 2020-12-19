import { Document } from "mongoose";

export interface Post extends Document {
  readonly id: string;
  readonly username: string;
  readonly avatar: string;
  readonly caption: string;
  readonly image: string;
}