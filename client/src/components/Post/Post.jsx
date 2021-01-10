import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Avatar from '../Avatar/Avatar';


const StyledDiv = styled.div`
  margin-right: 0;
  margin: 22px;
  min-width: 400px;
  max-width: 800px;
  margin-bottom: 60px;
  background-color: white;
  border: 1.5px solid lightgray;

  .header {
    display: flex;
    padding: 16px;
    position: relative;

    .options {
      position: absolute;
      right: 20px;
      font-weight: bold;
    }
  }
  
  .body {

    img{
      height: 532px;
      width: 100%;
      object-fit: cover;
    }

    .footer {
      margin: 18px;

      .icons {
      display: flex;
      width: 120px;
      justify-content: space-between;
      align-items: center;
      }
    }

    .newComments {
      border-top: 1.5px solid lightgray;
      padding: 5px;
      
      input {
        width: 90%;
        height: 50px;
        border: none;
      }
    }

  }
`

const Post = (props) => {
  return (
    <StyledDiv >
      <div className="header" >
        <Avatar avatar={props.avatar} />
        <h3> {props.username} </h3>  
        <p className="options">...</p>
      </div>
      
      <div className="body">
        <img src={props.image} alt="post" />
        
        <div className="footer">
          <div className="icons">
            <FontAwesomeIcon icon={faHeart} size="2x" />
            <FontAwesomeIcon icon={faComment} size="2x" />
            <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          </div>
            {props.postLikes ? props.postLikes.length + " likes"  : ""} <br/>
           <strong> {props.username} </strong> {props.caption}
           <div className="comments">
            {
              props.coments ? props.coments.map((coment) => <div><strong>{coment.username}</strong> {coment.text}</div> ): ""
            }
           </div>
        </div>

        <div className="newComments" >
          <input placeholder="Add a comment" />
          <a>ADD</a>
        </div>

      </div>
    </StyledDiv>
  )
}

export default Post;