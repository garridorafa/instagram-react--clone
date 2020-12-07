import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100px;

color: #8e8e8e;
`

const Footer = () => {
  return (
    <StyledDiv>
      © 2020 Rafael Garrido | @garridorafa
    </StyledDiv>
  )
}

export default Footer;