import React from 'react';
import Post from './Post';


function PostList(props) {
  return (
    <div>
      <Post username={props.username} avatar={props.avatar} caption={props.caption} image={props.image} />
      <Post username={props.username} avatar={props.avatar} caption={props.caption} image={props.image} />
      <Post username={props.username} avatar={props.avatar} caption={props.caption} image={props.image} />
      <Post username={props.username} avatar={props.avatar} caption={props.caption} image={props.image} />
      <Post username={props.username} avatar={props.avatar} caption={props.caption} image={props.image} />
      <Post username={props.username} avatar={props.avatar} caption={props.caption} image={props.image} />
    </div>
  )
}

export default PostList;