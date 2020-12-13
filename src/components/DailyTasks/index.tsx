import React from 'react';

import { DailyTask, Img } from './styles';
import CardTask from '../TaskCard';

import taskImg from '../../styles/task.jpg';


interface IDailyTasksProps{
    tasks?: {
        Key: number;
        Title: string
    }[] 
}

const DailyTasks: React.FC<IDailyTasksProps> = ({tasks}) => {
  
  return (
    <DailyTask>
        {   
            tasks ?
            tasks.map((indicator) => (
                
                    <CardTask 
                        key={indicator.Key}
                        TitleTask={indicator.Title}
                    />
                ))
            :
                <Img>
                    <img src={taskImg} alt=""/>
                    <h1>
                        No Tasks,<br/>
                        <span>add your task.</span>
                    </h1>
                </Img>
                
        }
    </DailyTask>
  );
}

export default DailyTasks;