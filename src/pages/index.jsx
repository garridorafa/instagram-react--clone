import React, {useState} from 'react';

import Layout from '../components/Layout';
import Post from '../components/Post';

const data = [
  {
    username : "cheyla444",
    caption : "Sleeping time!!",
    image : "https://upload.wikimedia.org/wikipedia/commons/1/17/Dog.in.sleep.jpg",
    avatar : 'http://localhost:8000/avatar2.jpg'
  },
  {
    username : "codeman35",
    caption : "working hard ....",
    image : "https://pixnio.com/free-images/2017/03/23/2017-03-23-13-49-09.jpg",
    avatar : 'http://localhost:8000/avatar1.jpg'
  },
  {
    username : "master1243",
    caption : "This scary!",
    image : "https://creazilla-store.s3.eu-central-1.wasabisys.com/photos/199470/spooky-scary-fear-photo-original.jpeg",
    avatar : 'http://localhost:8000/avatar3.jpg'
  },
  {
    username : "master1243",
    caption : "Sweet beach time!",
    image : "https://cdn.pixabay.com/photo/2014/05/22/06/26/virginia-beach-350572_1280.jpg",
    avatar : 'http://localhost:8000/avatar3.jpg'
  },
  {
    username : "codeman35",
    caption : "bla bla bla!!",
    image : "https://storage.needpix.com/rsynced_images/blah-blah-blah.jpg",
    avatar : 'http://localhost:8000/avatar1.jpg'
  },
  {
    username : "cheyla444",
    caption : "psssss :(",
    image : "https://p1.pxfuel.com/preview/165/4/42/darkness-boy-boys-attitude-silent-boy.jpg",
    avatar : 'http://localhost:8000/avatar2.jpg'
  }
]


const Home = () => {
  const [posts, setPosts] = useState(data);
  return (
    <Layout >
      {
        posts.map(post => (
          <Post avatar={post.avatar} username={post.username} caption={post.caption} image={post.image} />
        ))
      }
    </Layout>
  )
}

export default Home;