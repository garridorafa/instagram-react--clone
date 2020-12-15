import { Interface } from "readline";

import { Document } from 'mongoose';

export interface Post extends Document {
  readonly username: string;
  readonly avatar: string;
  readonly caption: string;
  readonly image: string;
  readonly createdAt: Date;

}