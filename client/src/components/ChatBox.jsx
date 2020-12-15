import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar'


const borderStyle = '1.5px solid lightgray';

const StyledDiv = styled.div`
  display: flex;
  justify-content: stretch;
  width: 970px;
  height: 80vh;
  border-radius: 3px;
  border: ${borderStyle};
  background-color: white;
  
  .chatList {
    min-width: 300px;
    border-right: ${borderStyle};
    
    .userProfile{
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.5rem;
      border-bottom: ${borderStyle};
      height: 70px;
    }

    .chatSelect {
      display: flex;
      flex-direction: column;

      .chatButton {
        display: flex;
        align-items: center;
        padding-top: 12px;

        img {
          height: 60px;
          width: 60px;
          margin-left: 20px;
        }
      }
    }
    
  }
  .messagesArea {
    align-items: flex-end;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;
    width: 670px;

    .messages {
      display: flex;
      justify-items: center;
      align-items: center;
      max-width: 220px;
      margin: 0 70px 10px 30px;
      padding: 16px;
      border: solid 1.5px lightgrey;
      border-radius: 22px;
    }

    .ownMessages {
      background-color: #efefef;
    }

    .otherMessages {
      align-self: flex-start;
    }
    
  }
`
const ChatBox = (props) => {
  return (
    <StyledDiv>
      <div className="chatList" >
        <div className="userProfile" >
          {props.data.userName}
        </div>
        <div className="chatSelect" >
          {
            props.data.chats.map((chat) => (
              <div className="chatButton">
                <Avatar key={chat.user.id} avatar={chat.user.avatar} /> {chat.user.userName}
              </div>
            ))
          }
        </div>
      </div>
      <div className="messagesArea" >

        {/* 
        
        Examples messages
        
        */}

          <div className="messages otherMessages">
            Bye
          </div>
          <div className="messages ownMessages" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, impedit!
          </div>
          <div className="messages otherMessages" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima suscipit quibusdam eos vero quas accusamus architecto ad ut, debitis ratione molestias distinctio totam iure autem modi? Doloribus nam necessitatibus ducimus.
          </div>
          <div className="messages ownMessages" >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis.
          </div>
          <div className="messages ownMessages" >
            "hello"
          </div>
          <div className="messages otherMessages" >
            "hello"
          </div>
          <div className="messages ownMessages" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi accusantium veniam illo sed unde reprehenderit inventore id veritatis doloribus autem! Minus nostrum esse in ea ratione rem eius ipsum nisi fugit, ad voluptas ut obcaecati tempora consequatur doloribus tempore cumque accusamus ipsam architecto repellat. Pariatur neque sed sunt voluptatem officiis animi voluptatum maiores voluptate ducimus. Placeat consequuntur soluta facere voluptate adipisci nisi harum explicabo aspernatur tempore.
          </div>
          <div className="messages otherMessages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae adipisci eos optio quod sit perferendis?
          </div>
          <div className="messages otherMessages" >
            "hello"
          </div>
          <div className="messages ownMessages" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum, molestiae, provident necessitatibus incidunt tempore beatae dolorum nesciunt aliquam natus itaque, rerum recusandae culpa facilis! Quam minus doloremque est expedita.
          </div>
          <div className="messages ownMessages" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum temporibus dolor.
          </div>
      </div>
    </StyledDiv>
  )
}

export default ChatBox;