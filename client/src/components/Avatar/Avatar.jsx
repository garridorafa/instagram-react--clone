import React from 'react';
import { StyledBox } from './styles';


const Avatar = (props) => {
  return (
    <StyledBox>
      <img src={props.avatar} alt="User Avatar" />
    </StyledBox>
  )
}

export default Avatar;
