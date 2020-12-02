import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPaperPlane,
  faClock,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

import Avatar from "./Avatar";


const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 67px;
  background-color: white;
  border-bottom: 1.5px solid lightgray;
  border-bottom: '1.5px solid lightgray';
  
  .search {
    background-color: #fafafa;
    border: 1.5px solid lightgray;
    height: 29px;
    border-radius: 3px;
  }

  .icons {
    display: flex;
    width: 250px;
    justify-content: space-evenly;
    align-items: center;
  }
`

function Header(props) {
  return (
    <StyledDiv >
      <h1>rafagram</h1>
      <input className="search" placeholder="search" />
      <div className="icons" >
        <FontAwesomeIcon icon={faHome} size="2x" />
        <FontAwesomeIcon icon={faPaperPlane} size="2x" />
        <FontAwesomeIcon icon={faClock} size="2x" />
        <FontAwesomeIcon icon={faHeart} size="2x" />
        <Avatar avatar={props.avatar} />
      </div>
    </StyledDiv>
  )
}

export default Header;