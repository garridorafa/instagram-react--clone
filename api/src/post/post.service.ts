import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Post } from './interfaces/post.intarface';
import { CreatePostDTO } from './dto/post.dto';

@Injectable()
export class PostService {

  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async getPosts(): Promise<Post[]> {
    const posts = await this.postModel.find();
    return posts;
  }

  async getPost(postID: string): Promise<Post> {
    const post = await this.postModel.findById(postID);
    return post;
  }
 
  async createPost(createPostDTO: CreatePostDTO): Promise<Post> {
    const post = new this.postModel(createPostDTO);
    return await post.save();
  }

  async updatePost(postID: string, createPostDTO: CreatePostDTO): Promise<Post> {
     const updatedPost = await this.postModel.findByIdAndUpdate(postID, createPostDTO, {new: true});
     return updatedPost;
  }

  async deletePost(postID: string): Promise<Post> {
    const deletePost = await this.postModel.findByIdAndDelete(postID);
    return deletePost;
  }

}
