import React from 'react';

import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

// import { Container } from './styles';

const Home: React.FC = () => {

    let tasks = localStorage.getItem('@my-task:') !== null ? localStorage.getItem('@my-task:') : null;
   
  return (
      <div>
        <Header/>
        <Content task={tasks || '[]'}/>
        <Footer/>
      </div>
  );
}

export default Home;