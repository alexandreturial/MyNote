import React from 'react';

import { getTasks } from '../../Repositorie/tasks';
import { useAuth } from '../../Hooks/Auth';


import CountTask from '../CounterTask';

import { Container, 
    Section, 
    Title, 
    Subtitle,
    NavBar
   
} from './styles';


import {
    GiExitDoor
} from 'react-icons/gi';

const Header: React.FC = () => {
    const user = localStorage.getItem('@my-task:user') !== null ? localStorage.getItem('@my-task:user') : null;
    
    const { signOut } = useAuth();
    
    const data = getTasks();
    
    let DailyTaskCount =0;
    let date = new Date();

    for(let i of data){
        if(date.getDate() +'/'+ date.getMonth() +'/'+ date.getFullYear() === i.Data){
            DailyTaskCount += 1;
            
        }
    }
    
    return (
        <Container>
            <NavBar>
                <Section>
                    <Title>Hi {user},</Title>
                    <Subtitle>today you have {data.length} taks</Subtitle>
                </Section>
                <button onClick={signOut}>
                    <GiExitDoor/>
                </button>
            </NavBar>
            <CountTask task={data.length} daily={DailyTaskCount} finish={4}/>

        </Container >
    );
}

export default Header;