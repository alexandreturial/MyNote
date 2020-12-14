import React, { useState } from 'react';

import Dailytasks from '../../components/DailyTasks';

import { getTasks, DeletTasks } from '../../Repositorie/tasks';

import { Container } from './styles';


const Home: React.FC = () => {
  let tasks = getTasks();

  const [task, setTask] = useState(tasks);
  
  
  const deletItem = (key) => {
    const newTasks = DeletTasks(key)
    setTask(newTasks);
  }
  
  
  return (
    <Container>
      <Dailytasks tasks={task} del={deletItem}/>
    </Container>
  );
}

export default Home;