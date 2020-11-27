import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Avatar from './avatar';


const postStyle = {
  margin: "22px",
  backgroundColor: "white",
  border: "1.5px solid lightgray"
}

const postHeaderStyle = {
  display: "flex",
  padding: "16px",
  position: "relative"
  
}

const avatarStyle = {
  height: "46px",
  borderRadius:"100%",
  marginRight: "16px"
  
}

const postOptionsStyle = {
  position: "absolute",
  right: "20px",
  fontWeight: "bold"
}

const postImg = {
  width: "100%",
  objectFit: "cover"
}

const commentArea = {
  borderTop: "1.5px solid lightgray",
  padding: "5px"
}

const commentStyle = {
  width: "90%",
  height: "50px",
  border: "none",
}

function Post(props) {
  return (
    <div className="post" style={postStyle}>

      <div className="post__postHeader" style={postHeaderStyle} >
        <Avatar avatar={props.avatar} />
        <p> {props.username} </p>
        <p style={postOptionsStyle} >...</p>
      </div>
      
      <div className="post__postBody">
        <img src={props.image} alt="post" style={postImg} />
        <div>
          <FontAwesomeIcon icon={faHeart} size="2x" />
          <FontAwesomeIcon icon={faComment} size="2x" />
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
        </div>
        <p> {props.username}: {props.caption} </p>
        <div style={commentArea} >
          <input placeholder="Add a comment" style={commentStyle} />
          <a>ADD</a>
        </div>
      </div>
    </div>
  )
}

export default Post;