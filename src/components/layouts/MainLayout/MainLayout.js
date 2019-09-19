import React from 'react'
import Header from '../Header/Header';
//import Footer from '../Footer/Footer';
import { Container } from 'reactstrap';

const MainLayout = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default MainLayout;
