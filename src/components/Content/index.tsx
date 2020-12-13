import React from 'react';

import CardTask from '../TaskCard';
import CountTask from '../CounterTask';

import {
    Container,
    DailyTask

} from './styles';

interface IContentProps{
    task: string
}
const Content: React.FC<IContentProps> = ({task}) => {
    const data = JSON.parse(task);
    let DailyTaskCount =0;
    let date = new Date();

    for(let i of data){
        if(date.getDate() +'/'+ date.getMonth() +'/'+ date.getFullYear() === i.Data){
            DailyTaskCount += 1;
            
        }
    }

    return (
        <Container>
            <CountTask task={data.length} daily={DailyTaskCount} finish={4}/>
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