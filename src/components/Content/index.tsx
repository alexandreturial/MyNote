import React,{ useState } from 'react';

import CardTask from '../TaskCard';

import {
    Container,
    TaskCount,
    TaskCountItem,
    DailyTask

} from './styles';

interface IContentProps{
    task: string
}
const Content: React.FC<IContentProps> = ({task}) => {
    const data = JSON.parse(task);
    
    return (
        <Container>
            <TaskCount>
                <TaskCountItem>
                    <h2>
                        0
                    </h2>
                    <h4>
                        task
                    </h4>
                </TaskCountItem>
                <TaskCountItem>
                    <h2>
                        10
                    </h2>
                    <h4>
                        finish
                    </h4>
                </TaskCountItem>
                <TaskCountItem>
                    <h2>
                        0
                    </h2>
                    <h4>
                        daily
                    </h4>
                </TaskCountItem>
            </TaskCount>
            <DailyTask>
                {   
                    data !== '' ? 
                        data.map((indicator) => (
                            <CardTask 
                                key={indicator.Key}
                                TitleTask={indicator.Title}
                            />
                        ))
                    :
                        
                        <h1>
                            ola
                        </h1>
                        
                }
            
            </DailyTask>
        </Container>
    );
}

export default Content;