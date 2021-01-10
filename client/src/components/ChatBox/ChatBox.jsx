import React from 'react';

import { 
  ChatButton,
  ChatList,
  ChatSelectArea,
  Container,
  Message,
  MessageArea,
  UserProfile
} from './styles';

import Avatar from '../Avatar/Avatar';


const ChatBox = (props) => {
  return (
    <Container>
      <ChatList>
        <UserProfile>
          {props.data.userName}
        </UserProfile>
        <ChatSelectArea>
          {
            props.data.chats.map((chat) => (
              <ChatButton>
                <Avatar key={chat.user.id} avatar={chat.user.avatar} /> {chat.user.userName}
              </ChatButton>
            ))
          }
        </ChatSelectArea>
      </ChatList>
      <MessageArea>

        {/* 
        
        Examples messages
        
        */}

          <Message type="otherMessages">
            Bye
          </Message>
          <Message type="ownMessages" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, impedit!
          </Message>
          <Message type="otherMessages" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima suscipit quibusdam eos vero quas accusamus architecto ad ut, debitis ratione molestias distinctio totam iure autem modi? Doloribus nam necessitatibus ducimus.
          </Message>
          <Message type="ownMessages" >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis.
          </Message>
          <Message type="ownMessages" >
            "hello"
          </Message>
          <Message type="otherMessages" >
            "hello"
          </Message>
          <Message type="ownMessages" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi accusantium veniam illo sed unde reprehenderit inventore id veritatis doloribus autem! Minus nostrum esse in ea ratione rem eius ipsum nisi fugit, ad voluptas ut obcaecati tempora consequatur doloribus tempore cumque accusamus ipsam architecto repellat. Pariatur neque sed sunt voluptatem officiis animi voluptatum maiores voluptate ducimus. Placeat consequuntur soluta facere voluptate adipisci nisi harum explicabo aspernatur tempore.
          </Message>
          <Message type="otherMessages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae adipisci eos optio quod sit perferendis?
          </Message>
          <Message type="otherMessages" >
            "hello"
          </Message>
          <Message type="ownMessages" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum, molestiae, provident necessitatibus incidunt tempore beatae dolorum nesciunt aliquam natus itaque, rerum recusandae culpa facilis! Quam minus doloremque est expedita.
          </Message>
          <Message type="ownMessages" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum temporibus dolor.
          </Message>
      </MessageArea>
    </Container>
  )
}

export default ChatBox;