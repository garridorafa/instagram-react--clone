import React from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';


//test
const username = "garridorafa";
const caption = "A random caption";
const image = "https://miro.medium.com/max/3000/1*qEKwznoakcHszhcDfcFhzQ.png"
const avatar = 'http://localhost:8000/placeholder-person.jpg'


const appStyle = {
  backgroundColor: "#fafafa",
  height: "100vh"
}

export default function Home() {
  return (
    <div className='app' style={appStyle}>
      <Header avatar={avatar} />
      <PostList username={username} avatar={avatar} caption={caption} image={image} />
    </div>
  )
}