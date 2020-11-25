import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPaperPlane,
  faClock,
  faHeart,
  faUser
} from '@fortawesome/free-solid-svg-icons'

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  borderTop: '1.5px solid lightgray',
  borderBottom: '1.5px solid lightgray',
  alignItems: "center",
  alignContent: "center"
}

const searchStyle = {
  backgroundColor: "#fafafa",
  border: '1.5px solid lightgray',
  height: "29px",
  borderRadius: "5px",
}

const headerIconsStyles = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "250px"
}

function Header() {
  return (
    <div className="app__header" style={headerStyle}>
      <h1>rafagram</h1>
      <input placeholder="search" style={searchStyle}></input>
      <div className="appp___header__icons" style={headerIconsStyles}>
        <FontAwesomeIcon icon={faHome} size="2x" />
        <FontAwesomeIcon icon={faPaperPlane} size="2x" />
        <FontAwesomeIcon icon={faClock} size="2x" />
        <FontAwesomeIcon icon={faHeart} size="2x" />
        <FontAwesomeIcon icon={faUser} size="2x" />
      </div>
    </div>
  )
}

export default Header;