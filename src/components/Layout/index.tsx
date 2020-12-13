import React from 'react';

import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';


import { 
    Container 
} from './styles';

const Layout: React.FC = ({children}) => {
    let tasks = localStorage.getItem('@my-task:') !== null ? localStorage.getItem('@my-task:') : null;


  return (
        <Container>
            <Header/>
            <Content task={tasks || '[]'}>
                {children}
            </Content>
            <Footer/>
        </Container>
  );
}

export default Layout;