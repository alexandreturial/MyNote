import React from 'react';

import { Container, 
    Section, 
    Title, 
    Subtitle
   
} from './styles';  

import CountTask from '../CounterTask';

const Header: React.FC = () => {
    let tasks = localStorage.getItem('@my-task:') !== null ? localStorage.getItem('@my-task:') : null;
    const user = localStorage.getItem('@my-task-login:') !== null ? localStorage.getItem('@my-task-login:') : null;

    const data = tasks  !== null ?  JSON.parse(tasks) : [];
    
    let DailyTaskCount =0;
    let date = new Date();

    for(let i of data){
        if(date.getDate() +'/'+ date.getMonth() +'/'+ date.getFullYear() === i.Data){
            DailyTaskCount += 1;
            
        }
    }
    
    return (
        <Container>
            <Section>
                <Title>Hi {user},</Title>
                <Subtitle>today you have {data.length} taks</Subtitle>
            </Section>
            <CountTask task={data.length} daily={DailyTaskCount} finish={4}/>

        </Container >
    );
}

export default Header;