import React from 'react';

import { DailyTask, Img } from './styles';
import CardTask from '../TaskCard';

import taskImg from '../../styles/task.jpg';


interface IDailyTasksProps{
    tasks?: {
        Title: string, 
        Description?: string,
        Data?: Date,
        Key: number
    }[],
    del(number):void;
}

const DailyTasks: React.FC<IDailyTasksProps> = ({tasks, del}) => {
    const deletItem = (key) => {
        del(key);
    }
  return (
    <DailyTask>
        {   
            tasks ?
            tasks.map((indicator) => (
                
                    <CardTask 
                        key={indicator.Key}
                        TitleTask={indicator.Title}
                        delet={deletItem}
                        index={indicator.Key}
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