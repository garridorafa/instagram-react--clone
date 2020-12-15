import React from 'react';
import styled from "styled-components";


const StyledDiv = styled.div`
  img {
    width: 46px;
    height: 46px;
    border-radius: 150px;
    object-fit: cover;
    margin-right: 16px;
  }
`

const Avatar = (props) => {
  return (
    <StyledDiv>
      <img src={props.avatar} alt="User Avatar" />
    </StyledDiv>
  )
}

export default Avatar;