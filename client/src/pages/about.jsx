import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Avatar from '../components/Avatar';


const profile = {
  id: "",
  userName: 'codeman35',
  avatar: 'http://localhost:8000/avatar1.jpg',
  description: 'A fictional person, doing fictional things ...',
  publications: 15,
  followers: 1536
}

const StyledDiv = styled.div`
  margin-left:auto;
  margin-right:auto;
  max-width: 1000px;

  .info{
    display: flex;
    justify-content: center;
    padding: 25px;

    img {
      width: 150px;
      height: 150px;
      border-radius: 150px;
      object-fit: cover;
      margin-right: 40px;
    }

    span {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .posts{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    img{
      height: 300px;
      width: 300px;
      object-fit: cover;
      margin: 15px;
    }
  }
`

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


const AboutPage = () => {
  return (
    <Layout>
      <StyledDiv>
        <div className="info">
          <Avatar key={profile.id} avatar={profile.avatar} />
          <div>
            <span>{profile.userName}</span> <br />
            {`${profile.publications} posts  &  ${profile.followers} followers `} <br /><br />
            {profile.description}
          </div>
        </div>
        <div className="posts">
          {
            data.map((post) => (
               <img src={post.image} alt="" />
            ))
          }
        </div>
      </StyledDiv>
    </Layout>
  )
}

export default AboutPage;