import React from 'react';

import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';


import { 
    Container 
} from './styles';

const Layout: React.FC = ({children}) => {


  return (
        <Container>
            <Header/>
            <Content >
                {children}
            </Content>
            <Footer/>
        </Container>
  );
}

export default Layout;