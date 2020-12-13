import React from 'react';

import CountTask from '../components/CounterTask';
import Dailytasks from '../components/DailyTasks';

// import { Container } from './styles';


const Home: React.FC = () => {

  let tasks = localStorage.getItem('@my-task:') !== null ? localStorage.getItem('@my-task:') : '';
 
  const data = tasks  !== null ? JSON.parse(tasks) : [];
  let DailyTaskCount =0;
  let date = new Date();

  for(let i of data){
      if(date.getDate() +'/'+ date.getMonth() +'/'+ date.getFullYear() === i.Data){
          DailyTaskCount += 1;
          
      }
  }
  
  return (
    <>
       <CountTask task={data.length} daily={DailyTaskCount} finish={4}/>
        <Dailytasks tasks={data}/>
    </>
  );
}

export default Home;