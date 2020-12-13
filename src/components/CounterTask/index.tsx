import React from 'react';

import { 
    TaskCount,
    TaskCountItem, 

} from './styles';

interface ICounterTaskProps{
    task: number;
    finish: number;
    daily: number;
}

const CounterTask: React.FC<ICounterTaskProps> = ({task, finish, daily}) => {
  return (
    <TaskCount>
        <TaskCountItem>
            <h2>
                {task}
            </h2>
            <h4>
                task
            </h4>
        </TaskCountItem>
        <TaskCountItem>
            <h2>
                {finish}
            </h2>
            <h4>
                finish
            </h4>
        </TaskCountItem>
        <TaskCountItem>
            <h2>
                {daily}
            </h2>
            <h4>
                daily
            </h4>
        </TaskCountItem>
    </TaskCount>
  );
}

export default CounterTask;