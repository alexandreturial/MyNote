import React from 'react';

import { Container, 
    Section, 
    Title, 
    Subtitle
   
} from './styles';  

const Header: React.FC = () => {
    return (
        <Container>
            <Section>
                <Title>Hi (user name),</Title>
                <Subtitle>today you have 5 taks</Subtitle>
            </Section>
          
        </Container >
    );
}

export default Header;