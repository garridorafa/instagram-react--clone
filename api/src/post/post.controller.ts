import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';

import { CreatePostDTO } from './dto/post.dto';

import { PostService } from "./post.service";

@Controller('post')
export class PostController {

  constructor(private postService: PostService) {}

  @Post()
  async createPosts(@Res() res, @Body() createPostDTO: CreatePostDTO) {

    const post = await this.postService.createPost(createPostDTO)
    return res.status(HttpStatus.OK).json({
      message: 'received',
      post: post
    });
  }



}
