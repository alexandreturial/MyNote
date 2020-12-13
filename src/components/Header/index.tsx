import React from 'react';

import { Container, 
    Section, 
    Title, 
    Subtitle
   
} from './styles';  

import CountTask from '../CounterTask';

const Header: React.FC = () => {
    let tasks = localStorage.getItem('@my-task:') !== null ? localStorage.getItem('@my-task:') : '';
 
    const data = [
          {"Title":"teste1","Description":"teste1","Data":"12/11/2020","Key":1607817720845}
          ,{"Title":"teste2","Description":"teste2","Data":"12/11/2020","Key":1607817768575}
          ,{"Title":"teste3","Description":"teste3","Data":"12/11/2020","Key":1607817809011}
          ,{"Title":"tete4","Description":"teste4","Data":"13/11/2020","Key":1607882836085}
          ,{"Title":"teste5","Description":"teste5\n","Data":"13/11/2020","Key":1607882841270}
          ,{"Title":"teste6","Description":"teste6","Data":"13/11/2020","Key":1607882845643}
          ,{"Title":"teste7","Description":"teste7","Data":"13/11/2020","Key":1607882851371}
          ,{"Title":"teste8","Description":"teste8","Data":"13/11/2020","Key":1607882856673}
        ];
    
    let DailyTaskCount =0;
    
    return (
        <Container>
            <Section>
                <Title>Hi (user name),</Title>
                <Subtitle>today you have 5 taks</Subtitle>
            </Section>
            <CountTask task={data.length} daily={DailyTaskCount} finish={4}/>

        </Container >
    );
}

export default Header;