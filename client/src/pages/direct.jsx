import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import ChatBox from '../components/ChatBox';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const userChats = {
  userName: 'codeman35',
  avatar: 'http://localhost:8000/avatar1.jpg',
  description: 'A fictional person, doing fictional things ...',
  publications: 15,
  followers: 1536,
  chats: [
    {
      user: {
        id:"",
        userName: 'cheyla444',
        avatar: 'http://localhost:8000/avatar2.jpg'
      },
      messages: [
        {
          sender: "guest",
          date: "",
          text: "Hello"
        },
        {
          sender: "host",
          date: "",
          text: "Hi, whats up?"
        },
        {
          sender: "guest",
          date: "",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus accusantium aliquam quae iure vel alias."
        },
        {
          sender: "host",
          date: "",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus impedit rerum adipisci eligendi nulla cum eveniet, modi ipsa quos debitis laboriosam, vero libero dicta a rem facere odit? Commodi."
        },
      ]
    },
    {
      user: {
        id: "",
        userName: 'master1243',
        avatar: 'http://localhost:8000/avatar3.jpg'
      },
      messages: [
        {
          sender: "guest",
          date: "",
          text: "Hello"
        },
        {
          sender: "host",
          date: "",
          text: "Hi, whats up?"
        },
        {
          sender: "guest",
          date: "",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus accusantium aliquam quae iure vel alias."
        },
        {
          sender: "host",
          date: "",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus impedit rerum adipisci eligendi nulla cum eveniet, modi ipsa quos debitis laboriosam, vero libero dicta a rem facere odit? Commodi."
        },
      ]
    },
  ]
}

const DirectPage = () => {
  return (
    <Layout >
      <StyledDiv>
        <ChatBox data={userChats} />
      </StyledDiv>
    </Layout>
  )
}

export default DirectPage;