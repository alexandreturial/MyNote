import React from 'react';

import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
  );
}

export default Home;