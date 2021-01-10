import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Container } from './styles';

const avatar = 'http://localhost:8000/avatar1.jpg';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header avatar={avatar} />
      <div>
        {children}
      </div>
      <Footer />
    </Container>
  )
}

export default Layout;