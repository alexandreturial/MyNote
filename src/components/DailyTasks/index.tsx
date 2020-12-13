import React from 'react';

import { DailyTask } from './styles';
import CardTask from '../TaskCard';

interface IDailyTasksProps{
    tasks: {
        Key: number;
        Title: string
    }[]
}

const DailyTasks: React.FC<IDailyTasksProps> = ({tasks}) => {
  return (
    <DailyTask>
        {   
            tasks.map((indicator) => (
                
                    <CardTask 
                        key={indicator.Key}
                        TitleTask={indicator.Title}
                    />
                ))
        }
    </DailyTask>
  );
}

export default DailyTasks;