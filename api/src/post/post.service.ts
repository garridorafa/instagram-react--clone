import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from "./dto/post.dto";


@Injectable()
export class PostService {

  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async getPosts(): Promise<Post[]> {
    const posts = await this.postModel.find();
    return posts;
  }

  async getPost(postId: string): Promise<Post> {
    const post = await this.postModel.findById(postId);
    return post;
  }

  async createPost(createPostDTO: CreatePostDTO): Promise<Post> {
    const newPost = new this.postModel(createPostDTO);
    return await newPost.save();
  }

  async updatePost(postId: string, createPostDTO: CreatePostDTO): Promise<Post> {
    const updatedPost = await this.postModel.findByIdAndUpdate(postId, createPostDTO, {new: true});
    return updatedPost;
  }

  async deletePost(postId: string): Promise<any> {
    const deletedPost = await this.postModel.findByIdAndDelete(postId);
    return deletedPost;
  }

}
