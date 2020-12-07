import React from 'react';
import { Link } from 'gatsby';
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
  
  .logoName {
    text-decoration: none;

    :active {
      color: black;
    }

    :visited {
    color:black;
    }
  }
 
  

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

const Header = (props) => {
  return (
    <StyledDiv >

      <Link to="/" className="logoName">
        <h1>rafagram</h1>
      </Link>

      <input className="search" placeholder="search" />

      <div className="icons" >
        <Link to="/" className="logoName">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>
        <FontAwesomeIcon icon={faPaperPlane} size="2x" />
        <FontAwesomeIcon icon={faClock} size="2x" />
        <FontAwesomeIcon icon={faHeart} size="2x" />
        <Link to='/about/'>
          <Avatar avatar={props.avatar} />
        </Link>
      </div>
      
    </StyledDiv>
  )
}

export default Header;