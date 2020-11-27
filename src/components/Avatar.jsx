import React from 'react';

const avatarStyle = {
  width:"46px",
  height:"46px",
  borderRadius:"150px",
  objectFit: "cover",
  marginRight: "16px"
}

function Avatar(props) {
  return (
    <div >
      <img src={props.avatar} alt="User Avatar" style={avatarStyle} />
    </div>
  )
}

export default Avatar;