import React from 'react';
import { SilderProvider } from '../../Hooks/Slider/slider';
import { useTasks } from '../../Hooks/Tasks';

import Dailytasks from '../../components/DailyTasks';
import Donetasks from '../../components/DoneTask';


import { Container } from './styles';


const Home: React.FC = () => {
  const {getAllTasks, getAllDoneTasks } = useTasks();
  return (
    <Container>
      <SilderProvider>
        <Dailytasks tasks={getAllTasks()}/>
        <Donetasks tasks={getAllDoneTasks()}/>
      </SilderProvider>
    </Container>
  );
}

export default Home;