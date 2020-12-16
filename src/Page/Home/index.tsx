import React from 'react';

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
      <Dailytasks tasks={getAllTasks()} del={deletItem}/>
    </Container>
  );
}

export default Home;