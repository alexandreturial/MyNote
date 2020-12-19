import React from 'react';
import { SilderProvider } from '../../Hooks/Slider/slider';

import Dailytasks from '../../components/DailyTasks';

import { useTasks } from '../../Hooks/Tasks';

import { Container } from './styles';


const Home: React.FC = () => {
  const { deletTask, getAllTasks } = useTasks();

  const deletItem = (key) => {
    deletTask(key);
  }
  
  return (
    <Container>
      <SilderProvider>
        <Dailytasks tasks={getAllTasks()} del={deletItem}/>
        <h1>OLA</h1>
      
        
      </SilderProvider>
    </Container>
  );
}

export default Home;