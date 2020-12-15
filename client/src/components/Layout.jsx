import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const avatar = 'http://localhost:8000/avatar1.jpg';

const StyledDiv = styled.div`
  background-color: #fafafa;
  height: 100%;
  margin-top: -8px;
`

const Layout = ({ children }) => {
  return (
    <StyledDiv>
      <Header avatar={avatar} />
      <div>
        {children}
      </div>
      <Footer />
    </StyledDiv>
  )
}

export default Layout;