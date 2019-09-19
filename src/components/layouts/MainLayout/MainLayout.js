import React from 'react'
//import Header from '../../layouts/Header/Header';
//import Footer from '../../layouts/Footer/Footer';
import { Container } from 'reactstrap';

const MainLayout = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default MainLayout;
