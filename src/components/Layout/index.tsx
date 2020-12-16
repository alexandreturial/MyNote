import React from 'react';

import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

import { TaskProvider } from '../../Hooks/Tasks';


import { 
    Container 
} from './styles';

const Layout: React.FC = ({children}) => {


  return (
        <Container>
            <TaskProvider>
                <Header/>
                <Content >
                    {children}
                </Content>
                <Footer/>
            </TaskProvider>
        </Container>
  );
}

export default Layout;