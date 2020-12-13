import React from 'react';

import Dailytasks from '../../components/DailyTasks';

import { Container } from './styles';


const Home: React.FC = () => {

  let tasks = localStorage.getItem('@my-task:') !== null ? localStorage.getItem('@my-task:') : null;
  
  const data = tasks  !== null ?  JSON.parse(tasks) : null;
 
  
  
  return (
    <Container>
      <Dailytasks tasks={data}/>
    </Container>
  );
}

export default Home;