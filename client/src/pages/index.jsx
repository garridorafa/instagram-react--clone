import React, {useState} from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import Post from '../components/Post/Post';

const data = [
  {
    id : "asd",
    username : "cheyla444",
    avatar : 'http://localhost:8000/avatar2.jpg',
    caption : "Sleeping time!!",
    image : "https://upload.wikimedia.org/wikipedia/commons/1/17/Dog.in.sleep.jpg",
    postLikes: [
      {
        username: "cheyla444",
        avatar: "http://localhost:8000/avatar2.jpg",
      },
      {
        username: "codeman35",
        avatar: "http://localhost:8000/avatar1.jpg",
      },
      {
        username: "master1243",
        avatar: "http://localhost:8000/avatar3.jpg"
      }
    ],
    coments: [
      {
        username: "codeman35",
        text: "cool!",
        likes: [
          "cheyla444",
          "master1243"
        ]
      },
      {
        username: "cheyla444",
        text: "<3",
        likes: [
          "master1243"
        ]
      }
    ]
  },
  {
    id : "asd2",
    username : "codeman35",
    caption : "working hard ....",
    image : "https://pixnio.com/free-images/2017/03/23/2017-03-23-13-49-09.jpg",
    avatar : 'http://localhost:8000/avatar1.jpg'
  },
  {
    id : "asd",
    username : "master1243",
    caption : "This scary!",
    image : "https://creazilla-store.s3.eu-central-1.wasabisys.com/photos/199470/spooky-scary-fear-photo-original.jpeg",
    avatar : 'http://localhost:8000/avatar3.jpg'
  },
  {
    id : "asd",
    username : "master1243",
    caption : "Sweet beach time!",
    image : "https://cdn.pixabay.com/photo/2014/05/22/06/26/virginia-beach-350572_1280.jpg",
    avatar : 'http://localhost:8000/avatar3.jpg'
  },
  {
    id : "asd",
    username : "codeman35",
    caption : "bla bla bla!!",
    image : "https://storage.needpix.com/rsynced_images/blah-blah-blah.jpg",
    avatar : 'http://localhost:8000/avatar1.jpg'
  },
  {
    id : "asd",
    username : "cheyla444",
    caption : "psssss :(",
    image : "https://p1.pxfuel.com/preview/165/4/42/darkness-boy-boys-attitude-silent-boy.jpg",
    avatar : 'http://localhost:8000/avatar2.jpg'
  }
]

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Home = () => {
  const [posts, setPosts] = useState(data);
  return (
    <Layout >
      <StyledDiv>
        {
          posts.map(post => (
            <Post key={post.id}
              avatar={post.avatar} 
              username={post.username} 
              caption={post.caption} 
              image={post.image} 
              postLikes={post.postLikes ? post.postLikes : ''}
              coments={post.coments}
            />
          ))
        }
      </StyledDiv>
    </Layout>
  )
}

export default Home;