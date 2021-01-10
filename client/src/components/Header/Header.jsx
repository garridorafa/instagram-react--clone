import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPaperPlane,
  faClock,
  faHeart
} from '@fortawesome/free-solid-svg-icons';

import { Container } from './styles';

import Avatar from "../Avatar/Avatar";


const Header = (props) => {
  return (
    <Container >

      <Link to="/" className="logoName">
        <h1>rafagram</h1>
      </Link>

      <input className="search" placeholder="search" />

      <div className="icons" >
        <Link to="/" className="icon">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>
        <Link to="/direct/" className="icon">
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
        </Link>
        <Link className="icon" >
          <FontAwesomeIcon icon={faClock} size="2x" />
        </Link>
        <Link className="icon" >
          <FontAwesomeIcon icon={faHeart} size="2x" />
        </Link>
        <Link to="/about/" className="icon" >
          <Avatar avatar={props.avatar} />
        </Link>
      </div>
      
    </Container>
  )
}

export default Header;